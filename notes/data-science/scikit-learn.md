# Scikit-learn

> The Python machine learning toolkit — a consistent API for every classical ML algorithm.

## What is it?

Scikit-learn (sklearn) is an open-source Python machine learning library built on NumPy, SciPy, and Matplotlib. Created by David Cournapeau in 2007 and first released publicly in 2010, it provides efficient implementations of dozens of ML algorithms behind a consistent, unified API.

Scikit-learn is the gold standard for classical machine learning in Python — everything from preprocessing and feature engineering to model training, evaluation, and pipeline construction.

## Why it matters

Machine learning algorithms can be mathematically complex to implement correctly. Scikit-learn provides battle-tested, optimized implementations that let you focus on the problem rather than the math. Its consistent `fit/transform/predict` API means switching between a linear regression and a random forest is a single line change.

Scikit-learn covers the full classical ML workflow:
- Data preprocessing and feature engineering
- Supervised learning (regression + classification)
- Unsupervised learning (clustering + dimensionality reduction)
- Model selection and hyperparameter tuning
- Pipeline construction and persistence

## Key Concepts

- **Estimator API** — every object has `fit()` to learn from data; transformers add `transform()`; predictors add `predict()`
- **`Pipeline`** — chain preprocessing steps + a model into a single object; prevents data leakage; makes deployment clean
- **`train_test_split`** — split data into training and test sets with shuffling and stratification
- **`cross_val_score`** — K-fold cross-validation in one function call
- **`GridSearchCV` / `RandomizedSearchCV`** — exhaustive / random hyperparameter search with cross-validation
- **`StandardScaler`** — normalize features to mean=0, std=1; required for many algorithms
- **`OneHotEncoder`** — convert categorical variables to binary columns
- **`ColumnTransformer`** — apply different transformations to different columns

## Quick Example

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import classification_report

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Preprocessing
numeric_features = ["age", "income", "score"]
categorical_features = ["category", "region"]

preprocessor = ColumnTransformer([
    ("num", StandardScaler(), numeric_features),
    ("cat", OneHotEncoder(drop="first"), categorical_features),
])

# Full pipeline: preprocessing + model
pipe = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", RandomForestClassifier(n_estimators=100, random_state=42)),
])

pipe.fit(X_train, y_train)

print(classification_report(y_test, pipe.predict(X_test)))
cv_scores = cross_val_score(pipe, X, y, cv=5, scoring="f1_weighted")
print(f"CV F1: {cv_scores.mean():.3f} ± {cv_scores.std():.3f}")
```

## Related Technologies

NumPy · Pandas · Matplotlib · Seaborn · TensorFlow · PyTorch · MLflow · Jupyter Notebook
