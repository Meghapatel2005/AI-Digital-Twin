import joblib

model = joblib.load("model/failure_model.pkl")


def predict_failure(sensor_data):
    X = [[
        sensor_data["temperature"],
        sensor_data["vibration"],
        sensor_data["rpm"]
    ]]

    prediction = model.predict(X)[0]
    probability = model.predict_proba(X)[0][1] * 100

    if probability >= 70 or (
    sensor_data["temperature"] > 90
    and sensor_data["vibration"] > 0.65
    and sensor_data["health"] < 70
):
     status = "High Risk"
    elif probability >= 30:
     status = "Medium Risk"
    else:
     status = "Low Risk"

    return {
        "failure_probability": round(probability, 2),
        "status": status
    }