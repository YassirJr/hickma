from sklearn.neighbors import NearestNeighbors

def train_knn_model(data, n_neighbors=5):
    """
    Train a K-Nearest Neighbors model.
    """
    knn_model = NearestNeighbors(n_neighbors=n_neighbors)
    knn_model.fit(data)
    return knn_model
