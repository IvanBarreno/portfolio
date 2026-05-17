# SciPy

> Scientific algorithms for Python — optimization, statistics, signal processing, and linear algebra.

## What is it?

SciPy is an open-source Python library for scientific and technical computing, built on top of NumPy. It was created by Travis Oliphant, Pearu Peterson, and Eric Jones, with the first release in 2001. SciPy provides algorithms for mathematics, science, and engineering — covering optimization, linear algebra, integration, interpolation, signal processing, statistics, and more.

If NumPy provides the arrays, SciPy provides the algorithms.

## Why it matters

NumPy handles data storage and basic math. SciPy handles the harder algorithms:
- Need to find the minimum of a function? → `scipy.optimize`
- Need to solve a system of differential equations? → `scipy.integrate`
- Need to test if two samples come from the same distribution? → `scipy.stats`
- Need to apply a Fourier transform? → `scipy.fft`
- Need to smooth a noisy signal? → `scipy.signal`

SciPy is essential for any work involving applied mathematics, signal processing, or rigorous statistical testing — areas where data science meets traditional scientific computing.

## Key Submodules

| Module | Purpose |
|---|---|
| `scipy.stats` | Statistical distributions, hypothesis tests, correlation |
| `scipy.optimize` | Minimization, root finding, curve fitting |
| `scipy.linalg` | Linear algebra (faster than NumPy's for dense matrices) |
| `scipy.signal` | Signal processing, filtering, convolution |
| `scipy.fft` | Fast Fourier Transforms |
| `scipy.integrate` | Numerical integration and ODE solvers |
| `scipy.interpolate` | Interpolation of data points |
| `scipy.sparse` | Sparse matrix storage and operations |
| `scipy.spatial` | KD-trees, Delaunay triangulation, distances |

## Quick Example

```python
from scipy import stats, optimize
import numpy as np

# Hypothesis testing — are these two samples from the same distribution?
group_a = np.array([82, 78, 91, 85, 88, 79, 95])
group_b = np.array([74, 69, 81, 76, 72, 78, 80])

t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"t={t_stat:.3f}, p={p_value:.4f}")
print("Significant" if p_value < 0.05 else "Not significant")

# Curve fitting — fit a custom function to noisy data
def model(x, a, b, c):
    return a * np.exp(-b * x) + c

xdata = np.linspace(0, 4, 50)
ydata = model(xdata, 3.0, 1.3, 0.5) + np.random.normal(0, 0.2, 50)

params, covariance = optimize.curve_fit(model, xdata, ydata, p0=[2, 1, 0])
print(f"Fitted parameters: a={params[0]:.2f}, b={params[1]:.2f}, c={params[2]:.2f}")
```

## Related Technologies

NumPy · Pandas · Statsmodels · Scikit-learn · Matplotlib · Jupyter Notebook
