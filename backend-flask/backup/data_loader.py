import pandas as pd

def load_data(filepath):
    """
    Load data from a CSV file, skipping bad lines.
    """
    return pd.read_csv(filepath, on_bad_lines='skip')
