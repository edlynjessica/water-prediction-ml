# 💧 Water Depletion Prediction System

An end-to-end Machine Learning web application that predicts the remaining number of days until a water tank is depleted based on water consumption patterns and environmental factors.

---

## 🌐 Live Demo

**Frontend:** https://vocal-dasik-b18ce8.netlify.app/

**Backend API:** https://water-prediction-ml.onrender.com/

**API Documentation:** https://water-prediction-ml.onrender.com/docs

---

## 📖 Overview

Water shortages in residential communities often occur unexpectedly due to changing consumption patterns and limited visibility into remaining water availability.

The Water Depletion Prediction System uses Machine Learning to estimate the number of days left until a water tank runs out and classifies the result into actionable alert levels, helping users take preventive measures before shortages occur.

---

## ✨ Features

* 💧 Predicts remaining days until water depletion
* 🤖 Machine Learning–based prediction using Random Forest Regression
* 🚦 Smart alert system (Safe / Warning / Critical)
* 🌧️ Considers rainfall along with water consumption
* ⚡ FastAPI REST API backend
* 🌐 Responsive web interface
* ☁️ Fully deployed using Render and Netlify

---

## 🛠️ Tech Stack

### Backend

* Python
* FastAPI
* Scikit-learn
* Pandas
* NumPy
* Joblib

### Frontend

* HTML5
* CSS3
* JavaScript (Fetch API)

### Deployment

* Render
* Netlify

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```text
water-prediction-ml/
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── index.js
│
├── notebooks/
│   ├── GroundWater_DataSet.ipynb
│   └── GroundWater_TrainedModel.ipynb
│
├── data/
│   └── water_data.csv
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## 📊 Input Features

The prediction model uses the following parameters:

* Tank Capacity (L)
* Current Water Level (L)
* Number of Residents
* Daily Water Usage (L/day)
* Rainfall (mm)

---

## 🤖 Machine Learning Model

**Algorithm**

* Random Forest Regressor

**Performance**

* **R² Score:** **0.97**
* **Mean Absolute Error (MAE):** **≈ 0.15 days**

### Feature Importance

| Feature             | Importance |
| ------------------- | ---------: |
| Daily Usage         |  **57.2%** |
| Current Water Level |  **38.8%** |
| Residents           |   **2.6%** |
| Tank Capacity       |   **0.8%** |
| Rainfall            |   **0.6%** |

The model identifies **daily water usage** and **current water level** as the primary factors influencing water depletion.

---

## 🚦 Alert Levels

| Days Remaining   | Status      |
| ---------------- | ----------- |
| More than 5 days | 🟢 SAFE     |
| 2 – 5 days       | 🟡 WARNING  |
| Less than 2 days | 🔴 CRITICAL |

---

## 🚀 How It Works

1. User enters tank and water usage details.
2. The frontend sends the data to the FastAPI backend.
3. The trained Random Forest model predicts the remaining days.
4. The backend returns the prediction.
5. The application displays the predicted days along with the corresponding alert level.

---

## 🌍 Deployment

* **Frontend:** Netlify
* **Backend:** Render
* **Model Serving:** FastAPI + Scikit-learn

---

## 💡 Future Improvements

* 🌦️ Live Weather API integration
* 📱 Mobile notifications
* 📊 Interactive analytics dashboard
* 🏢 Multi-apartment support
* 📈 Historical water usage analysis
* 🚰 Automated tanker booking recommendations

---

## 👨‍💻 Authors

* **Edlyn Jessica Philip**
* **Jebasingh Sunderson**

---

## 📄 License

This project is licensed under the MIT License.
