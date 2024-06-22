from sklearn.preprocessing import LabelEncoder

def preprocess_data(data, input_cols):
    """
    Preprocess the selected data columns.
    """
    # Extract the chosen columns
    chosen_data = data[input_cols]

    # Identify categorical columns
    categorical_cols = chosen_data.select_dtypes(include=['object']).columns

    # Apply label encoding to categorical columns
    label_encoders = {}
    for col in categorical_cols:
        label_encoders[col] = LabelEncoder()
        chosen_data[col] = label_encoders[col].fit_transform(chosen_data[col])

    return chosen_data, label_encoders
