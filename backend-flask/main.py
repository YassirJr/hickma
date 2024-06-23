from flask import Flask, request, jsonify
import pandas as pd
from sklearn.neighbors import NearestNeighbors
import numpy as np
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)

# Load and preprocess the data
DATA_PATH = 'data_ecc.csv'
data = pd.read_csv(DATA_PATH, on_bad_lines='skip')

input_cols = data.columns.drop(['id_etudiant']) #, 'PFE'])  # Excluding 'id_etudiant' and 'PFE'
# Separate categorical and numerical columns
categorical_cols = data.select_dtypes(include=['object']).columns
numerical_cols = data.select_dtypes(include=[np.number]).columns

# Encode categorical data using LabelEncoder
label_encoders = {col: LabelEncoder() for col in categorical_cols}
for col, encoder in label_encoders.items():
    data[col] = encoder.fit_transform(data[col].astype(str))  # Ensure data is string

# Replace missing values for numerical columns with mean
for col in numerical_cols:
    data[col].fillna(data[col].mean(), inplace=True)

# Train the KNN model
knn_model = NearestNeighbors(n_neighbors=5)
knn_model.fit(data[input_cols])

def get_recommendations(input_data, top_n):
    # Create a DataFrame for KNN input with the correct structure and data types
    knn_input = pd.DataFrame(columns=input_cols)
    
    for col in input_cols:
        # If the column is categorical, we need to use the label encoder and handle missing values
        if col in categorical_cols:
            if col in input_data and input_data[col] is not None and input_data[col] != '':
                # Transform the input using label encoder and ensure it's a string
                knn_input.at[0, col] = label_encoders[col].transform([str(input_data[col])])[0]
            else:
                # Assign the most common category if value is missing
                knn_input.at[0, col] = data[col].mode()[0]
        # For numerical columns, we can directly assign the input or the mean if it's missing
        else:
            knn_input.at[0, col] = input_data.get(col, data[col].mean())

    # Ensure all data is of the correct type before proceeding
    for col in input_cols:
        if col in categorical_cols:
            knn_input[col] = knn_input[col].astype(int)
        else:
            knn_input[col] = knn_input[col].astype(float)
    
    # Now we can use knn_input to find the nearest neighbors
    distances, indices = knn_model.kneighbors(knn_input)

    # Retrieve the top n closest samples
    recommendations = data.iloc[indices[0]].head(top_n)
    
    # Decode categorical data
    for col in categorical_cols:
        recommendations[col] = label_encoders[col].inverse_transform(recommendations[col].astype(int))
    
    return recommendations.to_dict(orient='records')

@app.route('/get-recommendations', methods=['POST'])
def api_get_recommendations():
    try:
        content = request.get_json()
        top_n = content.get('top_n', 2)
        partial_input = {k: v for k, v in content.items() if k in input_cols}
        print(top_n , partial_input)
        recommendations = get_recommendations(partial_input, top_n)
        return jsonify({'recommendations': recommendations}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
