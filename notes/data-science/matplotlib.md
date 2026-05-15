# Matplotlib

> The foundational Python plotting library — create any static, animated, or interactive visualization.

## What is it?

Matplotlib is a comprehensive plotting library for Python created by John Hunter in 2003, inspired by MATLAB's plotting functions. It produces publication-quality figures in a variety of hardcopy formats (PNG, PDF, SVG) and interactive environments (Jupyter Notebook, web apps).

Matplotlib is the foundation of the Python visualization ecosystem — Seaborn, Pandas `.plot()`, and many other libraries are built on top of Matplotlib.

## Why it matters

Data that can't be seen can't be understood. Matplotlib is the tool that transforms arrays of numbers into line charts, scatter plots, histograms, heatmaps, and 3D surfaces. It is used for:

- **Exploratory Data Analysis (EDA)** — understand distributions, correlations, and outliers before modeling
- **Model evaluation** — plot confusion matrices, ROC curves, learning curves
- **Result communication** — publish figures in papers, reports, and presentations
- **Custom visualizations** — anything Seaborn can't do, Matplotlib can

## Key Concepts

- **Figure** — the entire window/canvas; can contain multiple subplots
- **Axes** — a single plot within a Figure; has x/y axes, labels, title, and the actual data
- **Two interfaces** — `pyplot` (MATLAB-style, stateful, quick) and Object-Oriented API (explicit, recommended for complex plots)
- **Backend** — the rendering engine; `inline` for Jupyter, `TkAgg` for desktop windows, `Agg` for file output
- **Artists** — everything drawn on a Figure is an Artist: lines, text, rectangles, etc.
- **Colormaps** — named color scales for heatmaps and gradient plots: `viridis`, `plasma`, `coolwarm`
- **`tight_layout()`** — automatically adjusts subplot spacing to prevent label overlap

## Quick Example

```python
import matplotlib.pyplot as plt
import numpy as np

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Left: line plot with multiple series
x = np.linspace(0, 2 * np.pi, 100)
axes[0].plot(x, np.sin(x), label="sin(x)", color="#22d3ee", linewidth=2)
axes[0].plot(x, np.cos(x), label="cos(x)", color="#a855f7", linewidth=2)
axes[0].set_title("Trigonometric Functions")
axes[0].set_xlabel("x")
axes[0].legend()
axes[0].grid(True, alpha=0.3)

# Right: histogram
data = np.random.normal(loc=0, scale=1, size=1000)
axes[1].hist(data, bins=40, color="#4ade80", edgecolor="white", alpha=0.8)
axes[1].set_title("Normal Distribution (n=1000)")
axes[1].set_xlabel("Value")
axes[1].set_ylabel("Frequency")

plt.tight_layout()
plt.savefig("plot.png", dpi=150, bbox_inches="tight")
plt.show()
```

## Related Technologies

Seaborn · Pandas · NumPy · Plotly · Bokeh · Jupyter Notebook
