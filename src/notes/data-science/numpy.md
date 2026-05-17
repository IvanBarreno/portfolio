# NumPy

> The foundation of scientific computing in Python — fast, multi-dimensional arrays and math.

## What is it?

NumPy (Numerical Python) is an open-source Python library providing support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions. Created by Travis Oliphant in 2005, NumPy is the foundational library for virtually all scientific and numerical computing in Python.

When you use Pandas, Scikit-learn, TensorFlow, or any other data science library, they are all built on top of NumPy arrays under the hood.

## Why it matters

Pure Python lists are flexible but slow — they are collections of Python objects with overhead per element. NumPy arrays store homogeneous data in contiguous memory blocks (like C arrays), which allows:

- **Speed** — operations run at C/Fortran speeds, orders of magnitude faster than Python loops
- **Memory efficiency** — a NumPy array of floats uses ~8x less memory than a Python list of the same floats
- **Broadcasting** — perform operations between arrays of different shapes without writing loops
- **Vectorization** — apply operations to entire arrays at once: `array * 2` multiplies every element

## Key Concepts

- **ndarray** — the core data structure; an N-dimensional array of a single data type
- **dtype** — the data type of array elements (`float64`, `int32`, `bool`); choosing the right dtype saves memory
- **Shape** — a tuple describing array dimensions: `(100,)` = 1D, `(100, 3)` = 2D (matrix), `(10, 10, 3)` = 3D (image)
- **Vectorized operations** — `a + b`, `np.sqrt(a)`, `a * b` operate element-wise on entire arrays; no Python loops
- **Broadcasting** — rules for how NumPy handles operations between arrays of different but compatible shapes
- **Slicing** — `array[0:5, 1:3]` extracts sub-arrays; returns a **view** (not a copy) by default
- **Universal functions (ufuncs)** — functions that operate element-wise: `np.sin`, `np.log`, `np.exp`
- **Random module** — `np.random` for generating random numbers, shuffling, and sampling

## Quick Example

```python
import numpy as np

# Creating arrays
a = np.array([1, 2, 3, 4, 5], dtype=np.float64)
matrix = np.zeros((3, 4))           # 3x4 matrix of zeros
identity = np.eye(3)                # 3x3 identity matrix
rand = np.random.randn(100, 2)      # 100 samples, 2 features

# Vectorized operations — no loops needed
scores = np.array([78, 92, 65, 88, 71])
normalized = (scores - scores.mean()) / scores.std()  # z-score normalization

# Broadcasting — add a row vector to each row of a matrix
matrix = np.random.rand(5, 3)   # shape (5, 3)
bias = np.array([0.1, 0.2, 0.3])  # shape (3,)
result = matrix + bias          # broadcasts: adds bias to each of 5 rows

# Linear algebra
A = np.array([[1, 2], [3, 4]])
eigenvalues, eigenvectors = np.linalg.eig(A)
```

## Related Technologies

Pandas · Scikit-learn · TensorFlow · PyTorch · SciPy · Matplotlib · Python
