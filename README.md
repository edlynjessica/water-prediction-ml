# 💧 Water Quality Prediction using Machine Learning

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project uses machine learning techniques to predict water quality based on physicochemical properties. It compares multiple models and identifies the most suitable one for the dataset.

---

## 📌 Overview

Water quality assessment is essential for ensuring safe consumption and environmental monitoring. This project applies regression models to analyze water parameters and predict quality levels.

---

## 🧠 Features

* Data preprocessing and cleaning
* Exploratory Data Analysis (EDA)
* Model training and evaluation
* Cross-validation for performance consistency
* Model comparison

---

## 🗂️ Project Structure

```
water-prediction-ml/
│── data/               # Dataset files
│── notebooks/          # Jupyter notebooks
│── src/                # Source code
│── models/             # Saved models
│── README.md           # Documentation
│── LICENSE             # MIT License
```

---

## ⚙️ Technologies Used

* Python
* NumPy
* Pandas
* Scikit-learn
* Matplotlib / Seaborn

---

## 📊 Model Performance

### 🔹 Elastic Net Regression

* MAE: 1.4088
* R² Score: 0.6469
* Cross-validation Score: 0.6447

### 🔹 Random Forest Regressor

* MAE: 0.2422
* R² Score: 0.9672
* Cross-validation Score: 0.9648

---

## 🏆 Conclusion

From the experiments, **Elastic Net was selected as the preferred model** for this project due to its simplicity, interpretability, and stable performance across cross-validation.

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/edlynjessica/water-prediction-ml.git
cd water-prediction-ml
```

### 2. Install dependencies

```
pip install -r requirements.txt
```

### 3. Run the project

```
python main.py
```

---

## 📈 Results

The models were evaluated using Mean Absolute Error (MAE) and R² score. Cross-validation was used to ensure consistent performance across different data splits.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Authors

**Jebasingh Sunderson I**
**Edlyn Jessica Philip**

---

## 🌟 Acknowledgements

* Scikit-learn documentation
* Open-source datasets and ML resources

---
