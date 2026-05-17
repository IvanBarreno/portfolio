# Machine Learning

> Teaching computers to learn from data — without being explicitly programmed for every situation.

## What is it?

Machine Learning (ML) is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed for every scenario. Instead of writing rules, you feed data to algorithms that discover patterns and build models capable of making predictions or decisions on new, unseen data.

The term was coined by Arthur Samuel in 1959. Today ML powers search engines, recommendation systems, fraud detection, language translation, image recognition, and autonomous vehicles.

## The Core Idea

Traditional programming: `Data + Rules → Output`
Machine learning: `Data + Output → Rules (the model)`

Instead of writing `if price < 500 and condition == "new" → recommend`, you feed thousands of examples to an algorithm and it figures out the rules itself.

## Types of Machine Learning

### Supervised Learning
Training data has labeled examples (input + correct answer). The model learns to map inputs to outputs.
- **Regression** — predict a continuous value: house price, temperature, salary
- **Classification** — predict a category: spam/not spam, dog/cat, disease/healthy

### Unsupervised Learning
Training data has no labels. The model discovers hidden structure on its own.
- **Clustering** — group similar items: customer segments, document topics (k-means, DBSCAN)
- **Dimensionality reduction** — compress data while preserving structure (PCA, t-SNE)

### Reinforcement Learning
An agent learns by interacting with an environment, receiving rewards or penalties for actions. Used in game playing (AlphaGo), robotics, and recommendation systems.

## Key Concepts

- **Feature** — an input variable used to make a prediction (age, income, pixel values)
- **Label/Target** — the output the model predicts (price, category, yes/no)
- **Training set** — the data used to fit the model
- **Test set** — held-out data used to evaluate the model on unseen examples
- **Overfitting** — the model memorizes training data too well and fails on new data; too complex
- **Underfitting** — the model is too simple to capture the underlying pattern
- **Bias-variance tradeoff** — balancing model complexity; too simple = high bias; too complex = high variance
- **Cross-validation** — split training data into K folds; train on K-1, validate on 1, rotate; more reliable evaluation
- **Hyperparameters** — parameters set before training (learning rate, number of trees) vs parameters learned during training (weights)

## The ML Workflow

```
1. Define the problem → what are we predicting? what data do we have?
2. Collect & explore data → EDA, understand distributions, missing values
3. Preprocess → clean, encode categorical variables, scale features, handle nulls
4. Split → train/validation/test sets
5. Select model → linear regression, random forest, neural network...
6. Train → fit model on training data
7. Evaluate → metrics: accuracy, precision, recall, F1, RMSE, AUC-ROC
8. Tune → hyperparameter search (GridSearchCV, RandomizedSearchCV)
9. Deploy → serve predictions via API or batch job
10. Monitor → detect data drift, model degradation over time
```

## Related Technologies

Scikit-learn · TensorFlow · PyTorch · Pandas · NumPy · Matplotlib · Jupyter Notebook · MLflow
