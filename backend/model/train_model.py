import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib

# Dummy Training Data
X = np.array([
    [70, 0.20, 3400],
    [72, 0.25, 3450],
    [75, 0.30, 3500],
    [80, 0.45, 3600],
    [85, 0.60, 3700],
    [90, 0.80, 3800],
])

# Labels
y = np.array([0, 0, 0, 1, 1, 1])

model = RandomForestClassifier()

model.fit(X, y)

joblib.dump(model, "backend/model/failure_model.pkl")

print("Model Trained Successfully ✅")