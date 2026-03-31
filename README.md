# 💧Water Depletion Prediction System

AquaGuard is a machine learning–based system that predicts when water tanks in apartment complexes will run out. It enables proactive water management by estimating remaining water duration and generating early warning alerts.

---

## 📌 Overview

Urban apartments often face unexpected water shortages due to the lack of predictive visibility into water usage. AquaGuard addresses this by analyzing consumption patterns, tank levels, and environmental factors to estimate the time remaining until water depletion.

---

## 🧠 Key Features

* 📊 Predicts **days left until water depletion**
* 🔔 Alert system: Safe / Warning / Critical
* 🌦️ Considers rainfall and seasonal variations
* ⚡ Real-time predictions via Flask API
* 🧠 Uses advanced ML models for improved accuracy

---

## 🗂️ Project Structure

```
GroundWater_Project/
│── GroundWater_DataSet.ipynb      # Dataset generation
│── GroundWater_TrainedModel.ipynb # Model training & evaluation
│── water_data.csv                 # Dataset
│── model.pkl                      # Final trained model
│── app.py                         # Flask backend
│── README.md                      # Documentation
```

---

## ⚙️ Technologies Used

* Python
* Pandas, NumPy
* Scikit-learn
* Flask
* HTML, CSS, JavaScript

---

## 📊 Data & Feature Engineering

The dataset includes:

* Tank capacity
* Current water level
* Number of residents
* Daily water usage
* Rainfall
* Season

Additional engineered features:

* **tank_fill_ratio** → proportion of tank filled
* **usage_per_person** → per capita water usage

These features improve model performance by capturing normalized and behavioral patterns.

---

## 🤖 Machine Learning Models

### 🔹 ElasticNet Regression

* MAE: 1.40
* R² Score: 0.64
* Cross-validation Score: ~0.64

### 🔹 Random Forest Regressor (Final Model)

* MAE: ~0.15 days
* R² Score: ~0.96+
* Cross-validation: High and consistent

---

## 🏆 Model Selection

Random Forest was selected as the final model due to:

* Significantly lower error
* Ability to capture **non-linear relationships**
* Better performance across cross-validation

---

## 🚨 Alert System

* 🟢 SAFE → More than 5 days left
* 🟡 WARNING → 2–5 days left
* 🔴 CRITICAL → Less than 2 days left

---

## 🚀 How It Works

1. User inputs tank and usage details
2. Model predicts remaining days
3. System generates alert level
4. Enables proactive decision-making

---

## 💡 Why Machine Learning?

A simple formula assumes constant usage:

```
days_left = current_level / daily_usage
```

However, in real-world scenarios, water consumption varies due to:

* Seasonal changes
* Rainfall
* Human behavior

AquaGuard uses ML to model these variations and provide more accurate predictions.

---

## 📈 Evaluation Metrics

* Mean Absolute Error (MAE)
* R² Score
* Cross-validation

---

## 👩‍💻 Author

**Jebasingh Sunderson I**
**Edlyn Jessica Philip**

---

## 🌟 Future Improvements

* 📱 Mobile notifications
* 🌍 Weather API integration
* 🤖 Automated tanker booking
* 📊 Interactive dashboard

---

## 📜 License

MIT License
