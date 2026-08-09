import random


def generate_sensor_data():

    # Normal machine condition
    if random.random() < 0.8:
        return {
            "temperature": round(random.uniform(70, 80), 1),
            "vibration": round(random.uniform(0.20, 0.40), 2),
            "rpm": random.randint(3400, 3500),
            "health": random.randint(95, 99),
        }

    # Anomaly condition
    return {
        "temperature": round(random.uniform(82, 95), 1),
        "vibration": round(random.uniform(0.55, 0.90), 2),
        "rpm": random.randint(3000, 3400),
        "health": random.randint(45, 80),
    }