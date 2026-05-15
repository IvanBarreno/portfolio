# Keras

> The high-level deep learning API — build neural networks in minutes, not hours.

## What is it?

Keras is a high-level neural network API written in Python, originally created by François Chollet and released in 2015. In TensorFlow 2.x, Keras became the official high-level API and is now accessed as `tf.keras`. Keras 3 (released 2024) is a standalone multi-backend library that runs on TensorFlow, PyTorch, and JAX.

Keras abstracts the complexity of deep learning — you define model architecture with a few lines, call `compile()` and `fit()`, and Keras handles the training loop, gradient computation, and GPU acceleration.

## Why it matters

Deep learning without Keras (or PyTorch's equivalent `nn.Module`) requires writing:
- The forward pass
- The loss calculation
- The gradient computation
- The parameter update
- The batch iteration
- The validation loop
- The metrics tracking

Keras provides all of this in `model.fit()`. This allows you to focus on model architecture and data rather than engineering the training loop from scratch.

Keras is perfect for:
- Learning deep learning concepts without low-level distractions
- Rapid prototyping — try a new architecture in minutes
- Standard models (CNNs, RNNs, Transformers) that don't need custom training loops

## Key Concepts

- **Sequential API** — stack layers linearly; simplest; good for straightforward models
- **Functional API** — build models as computation graphs; supports multi-input, multi-output, shared layers
- **Subclassing API** — inherit from `keras.Model` and define `call()`; maximum flexibility; closest to PyTorch
- **Layers** — `Dense`, `Conv2D`, `LSTM`, `Embedding`, `Dropout`, `BatchNormalization`, `MultiHeadAttention`
- **Activation functions** — `relu`, `sigmoid`, `softmax`, `tanh` — applied after each layer
- **`compile()`** — configure optimizer, loss function, and metrics
- **`fit()`** — train the model; handles batching, epochs, validation, and callbacks
- **Callbacks** — `EarlyStopping`, `ModelCheckpoint`, `ReduceLROnPlateau`, `TensorBoard`

## Quick Example

```python
import keras
from keras import layers

# Functional API — image classifier
inputs = keras.Input(shape=(28, 28, 1))  # grayscale image

x = layers.Conv2D(32, 3, activation="relu")(inputs)
x = layers.MaxPooling2D()(x)
x = layers.Conv2D(64, 3, activation="relu")(x)
x = layers.GlobalAveragePooling2D()(x)
x = layers.Dense(128, activation="relu")(x)
x = layers.Dropout(0.4)(x)
outputs = layers.Dense(10, activation="softmax")(x)  # 10 classes

model = keras.Model(inputs, outputs)

model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=1e-3),
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)

model.summary()

model.fit(
    X_train, y_train,
    validation_split=0.1,
    epochs=20,
    batch_size=64,
    callbacks=[keras.callbacks.EarlyStopping(patience=3)],
)
```

## Related Technologies

TensorFlow · PyTorch · NumPy · Scikit-learn · TensorBoard · CUDA
