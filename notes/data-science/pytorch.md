# PyTorch

> The research-first deep learning framework — flexible, Pythonic, and the standard in academia.

## What is it?

PyTorch is an open-source deep learning framework developed by Facebook's AI Research lab (FAIR) and released in 2016. It is built on top of Torch (a Lua-based ML library) and was designed to feel natural to Python developers — dynamic computation graphs, NumPy-like tensor operations, and no magic.

PyTorch became the dominant framework in academic machine learning research and has rapidly grown in industry adoption, now competing directly with TensorFlow for production workloads.

## Why it matters

PyTorch's defining feature is its **dynamic computation graph** (define-by-run). Unlike TensorFlow 1.x's static graphs, PyTorch builds the computation graph as your code runs — making debugging as simple as inserting `print()` statements or using a standard Python debugger.

This "Pythonic" nature won over researchers who need to experiment quickly. Today, the majority of ML papers are implemented in PyTorch, and most state-of-the-art models (GPT, BERT, Stable Diffusion) are released with PyTorch implementations.

Key strengths:
- **Dynamic graphs** — natural debugging and conditional logic in models
- **Research-friendly** — most SOTA models released in PyTorch first
- **TorchVision, TorchText, TorchAudio** — domain-specific libraries for vision, NLP, and audio
- **ONNX export** — export models to the ONNX format for deployment in other runtimes
- **torch.compile** (PyTorch 2.0+) — graph compilation for production speedups

## Key Concepts

- **Tensor** — PyTorch's core data structure; like NumPy arrays but GPU-capable; `torch.Tensor`
- **`autograd`** — automatic differentiation engine; tracks operations on tensors to compute gradients
- **`requires_grad=True`** — flag that tells autograd to track gradients for this tensor
- **`backward()`** — computes gradients for all tensors with `requires_grad=True` through the computational graph
- **`nn.Module`** — the base class for all neural network layers and models
- **`DataLoader`** — batches, shuffles, and loads datasets in parallel with multiple workers
- **`optimizer.zero_grad()`** — clear gradients before each backward pass (PyTorch accumulates gradients)
- **`.to(device)`** — move tensors or models to CPU/GPU: `.to("cuda")` or `.to("cpu")`

## Quick Example

```python
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, TensorDataset

device = "cuda" if torch.cuda.is_available() else "cpu"

# Define model
class Classifier(nn.Module):
    def __init__(self, input_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 128),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(128, 1),
            nn.Sigmoid(),
        )

    def forward(self, x):
        return self.net(x)

model = Classifier(input_dim=20).to(device)
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
criterion = nn.BCELoss()

# Training loop
for epoch in range(50):
    for X_batch, y_batch in train_loader:
        X_batch, y_batch = X_batch.to(device), y_batch.to(device)
        optimizer.zero_grad()
        predictions = model(X_batch).squeeze()
        loss = criterion(predictions, y_batch)
        loss.backward()
        optimizer.step()
```

## Related Technologies

TensorFlow · Keras · NumPy · CUDA · Hugging Face · Scikit-learn · MLflow
