from fastapi import FastAPI

from pydantic import BaseModel # basemodel -> form validation
#It tells FastAPI: "Whenever somebody calls /predict, these fields must exist."

import pickle
import numpy as np

app = FastAPI() # creating my backend app

# Load the trained model once when the server starts
with open("model.pkl", "rb") as f:
    model = pickle.load(f)


@app.get("/") 
# If someone visits the home page (/) using a GET request
# run the function below.
def home():
    return {"message": "Groundwater depletion prediction system!"}
    # Send a JSON response.

#NOTE: FastAPI automatically converts the python dict into JSON.

class WaterInput(BaseModel):
    tank_capacity: float
    current_level: float
    residents: int
    daily_usage: float
    rainfall: float


@app.post("/predict")
def predict(data: WaterInput):
    return {
        "received": data
    }