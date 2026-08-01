import random


def generate_sensor_data():
    return {
        "temperature": round(random.uniform(70, 80), 1),
        "vibration": round(random.uniform(0.20, 0.40), 2),
        "rpm": random.randint(3400, 3500),
        "health": random.randint(95, 99),
    }