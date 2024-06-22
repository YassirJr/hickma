import backend.backup.data_loader as data_loader
import preprocessor
import model

def main():
    # Load the dataset
    data = data_loader.load_data('data_ecc.csv')

    # Ask the user for input columns and number of neighbors
    input_cols = input("Enter the columns for similarity analysis separated by comma (e.g., column1, column2): ").split(',')
    k = int(input("Enter the number of neighbors for similarity analysis: "))

    # Preprocess data
    chosen_data, label_encoders = preprocessor.preprocess_data(data, input_cols)

    # Train the KNN model
    knn_model = model.train_knn_model(chosen_data, n_neighbors=k)

    # Ask for user input to find similar items
    user_input = []
    for col in input_cols:
        val = input(f"Enter the value for {col}: ")
        # Encode user input for categorical columns
        if col in chosen_data.select_dtypes(include=['object']).columns:
            val = label_encoders[col].transform([val])[0]
        user_input.append(val)

    # Find the nearest neighbors
    distances, indices = knn_model.kneighbors([user_input])

    # Display the recommended items
    print("Recommended items based on input:")
    for idx in indices[0]:
        print(data.iloc[idx])

if __name__ == "__main__":
    main()
