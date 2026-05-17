# Seaborn

> Statistical data visualization built on Matplotlib — beautiful charts with less code.

## What is it?

Seaborn is a Python data visualization library built on top of Matplotlib, created by Michael Waskom and released in 2012. It provides a high-level interface for drawing attractive and informative statistical graphics. Seaborn integrates tightly with Pandas DataFrames, making it easy to go from data to charts with minimal code.

Where Matplotlib gives you full control at the cost of verbosity, Seaborn gives you beautiful defaults and statistical plotting functions out of the box.

## Why it matters

Matplotlib requires a lot of boilerplate for common statistical charts — a grouped bar chart with confidence intervals, a regression line scatter plot, or a correlation matrix heatmap. Seaborn provides these as single function calls.

Seaborn is the go-to for:
- **EDA (Exploratory Data Analysis)** — quickly visualize distributions, relationships, and categories
- **Statistical plots** — confidence intervals, regression lines, and kernel density estimates are built in
- **Publication-quality aesthetics** — clean default styles that look good without customization

## Key Concepts

- **Figure-level vs axes-level functions** — figure-level (`relplot`, `catplot`, `displot`) create their own Figure with FacetGrid; axes-level (`scatterplot`, `boxplot`, `histplot`) draw on existing Axes
- **FacetGrid** — creates multiple subplots conditioned on a variable — plot by category automatically
- **`hue`** — a Seaborn parameter that splits data by category and colors each group differently
- **`palette`** — the color scheme for hue groups: `viridis`, `husl`, `Set2`, or a list of hex colors
- **Kernel Density Estimate (KDE)** — a smooth curve estimating the probability distribution of data
- **Pair plot** — shows pairwise relationships between all numerical variables in a dataset
- **Theme** — `sns.set_theme()` or `sns.set_style("darkgrid")` sets the global visual style

## Quick Example

```python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

sns.set_theme(style="darkgrid", palette="husl")

df = pd.read_csv("projects.csv")

# Distribution of project creation over time
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Box plot grouped by category
sns.boxplot(data=df, x="category", y="lines_of_code", ax=axes[0])
axes[0].set_title("Lines of Code by Category")

# Scatter with regression line
sns.regplot(data=df, x="commits", y="stars", ax=axes[1],
            scatter_kws={"alpha": 0.5}, line_kws={"color": "red"})
axes[1].set_title("Commits vs Stars")

plt.tight_layout()
plt.show()

# Correlation heatmap — one-liner
numeric_df = df.select_dtypes(include="number")
sns.heatmap(numeric_df.corr(), annot=True, cmap="coolwarm", fmt=".2f")
plt.show()
```

## Related Technologies

Matplotlib · Pandas · NumPy · Plotly · SciPy · Statsmodels · Jupyter Notebook
