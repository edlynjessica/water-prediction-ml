from fastapi import FastAPI

from pydantic import BaseModel # basemodel -> form validation
#It tells FastAPI: "Whenever somebody calls /predict, these fields must exist."

from fastapi.middleware.cors import CORSMiddleware # because we are deploying backend in Render and frontend separately in GitHub Pages, we need to allow cross-origin requests.

import joblib
import numpy as np

app = FastAPI() # creating my backend app


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # We'll tighten this later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load the trained model once when the server starts
model = joblib.load("model.pkl")


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

    input_data = np.array([[
        data.tank_capacity,
        data.current_level,
        data.residents,
        data.daily_usage,
        data.rainfall
    ]])

    prediction = model.predict(input_data)[0]

    if prediction > 5:
        alert = "SAFE"
    elif prediction > 2:
        alert = "WARNING"
    else:
        alert = "CRITICAL"

    return {
        "days_left": round(float(prediction), 2),
        "alert": alert
    }