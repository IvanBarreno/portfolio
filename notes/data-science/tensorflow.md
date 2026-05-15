# TensorFlow

> Google's end-to-end open-source platform for machine learning — from research to production.

## What is it?

TensorFlow is an open-source machine learning framework developed by Google Brain and released in 2015. It was originally built for large-scale neural network research and training but evolved into a full ML platform covering data loading, model building, training, evaluation, deployment, and serving.

TensorFlow 2.x (released 2019) adopted Keras as its official high-level API, making it significantly more user-friendly while retaining the power needed for production deployments.

## Why it matters

TensorFlow is Google's bet on how machine learning should be built and deployed. It is used internally across all of Google's products and is the framework behind TensorFlow Serving (model serving), TensorFlow Lite (mobile/embedded deployment), TensorFlow.js (browser-based ML), and TFX (ML production pipelines).

Key strengths:
- **Production-grade deployment** — TensorFlow Serving, TF Lite, TF.js
- **TensorBoard** — visualization tool for training metrics, model graphs, embeddings
- **Distributed training** — `tf.distribute.Strategy` for multi-GPU and multi-machine training
- **SavedModel format** — portable, language-agnostic model format
- **Keras integration** — high-level API that makes model building accessible

## Key Concepts

- **Tensor** — the fundamental data structure; a multi-dimensional array; like NumPy arrays but can run on GPUs
- **Computational graph** — TF 1.x executed a static graph; TF 2.x uses eager execution (runs immediately like NumPy)
- **`tf.data`** — efficient data pipeline API for loading, preprocessing, and batching datasets at scale
- **`tf.keras`** — the high-level model building API built into TensorFlow 2.x
- **GradientTape** — records operations for automatic differentiation; used for custom training loops
- **`@tf.function`** — decorator that compiles a Python function into a TensorFlow graph for speed
- **Callbacks** — `ModelCheckpoint`, `EarlyStopping`, `TensorBoard` — hook into the training loop

## Quick Example

```python
import tensorflow as tf
from tensorflow import keras

# Build a model
model = keras.Sequential([
    keras.layers.Dense(128, activation="relu", input_shape=(20,)),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(64, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid"),  # binary classification
])

model.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=["accuracy", keras.metrics.AUC(name="auc")],
)

# Train with callbacks
callbacks = [
    keras.callbacks.EarlyStopping(patience=5, restore_best_weights=True),
    keras.callbacks.ModelCheckpoint("best_model.keras", save_best_only=True),
]

history = model.fit(
    X_train, y_train,
    validation_split=0.2,
    epochs=50,
    batch_size=32,
    callbacks=callbacks,
)
```

## Related Technologies

Keras · PyTorch · NumPy · Scikit-learn · TensorBoard · CUDA · Python · MLflow
