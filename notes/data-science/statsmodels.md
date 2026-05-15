# Statsmodels

> Statistical modeling and econometrics for Python — when you need p-values, confidence intervals, and model diagnostics.

## What is it?

Statsmodels is a Python library for statistical analysis, econometrics, and time series analysis. It provides classes and functions for fitting statistical models, conducting hypothesis tests, and exploring data with a focus on statistical rigor and interpretability.

Created by Skipper Seabold and Josef Perktold, Statsmodels fills the gap between Scikit-learn (optimized for prediction) and what statisticians need: coefficient estimates, standard errors, p-values, confidence intervals, and model diagnostics.

## Why it matters

Scikit-learn is excellent for machine learning — training models that make accurate predictions. But it deliberately hides statistical details like p-values and confidence intervals. When you need to **understand and explain** a model (inference, not just prediction), Statsmodels is the right tool.

Use cases:
- **Linear and logistic regression** with full statistical output (coefficients, p-values, R², residual analysis)
- **Time series analysis** — ARIMA, SARIMA, VAR models for forecasting
- **Hypothesis testing** — t-tests, chi-square, ANOVA, Granger causality
- **Econometrics** — instrumental variables, panel data, heteroskedasticity tests
- **Survival analysis** — Kaplan-Meier curves, Cox proportional hazards

## Key Concepts

- **Formula API** — R-style formulas: `"salary ~ experience + education + C(gender)"` — intuitive model specification
- **OLS (Ordinary Least Squares)** — linear regression; provides coefficients, t-stats, p-values, confidence intervals
- **`results.summary()`** — a comprehensive statistical output table similar to R or Stata output
- **Residual diagnostics** — check linear regression assumptions: normality, homoskedasticity, autocorrelation
- **ARIMA** — AutoRegressive Integrated Moving Average; the classic time series forecasting model
- **`tsa` (time series analysis)** — a full submodule for seasonal decomposition, stationarity tests, and forecasting

## Quick Example

```python
import statsmodels.formula.api as smf
import statsmodels.api as sm
import pandas as pd

df = pd.read_csv("salaries.csv")

# Linear regression with R-style formula
model = smf.ols("salary ~ experience + C(education) + age", data=df).fit()

print(model.summary())
# Output includes: coefficients, std errors, t-values, p-values,
# R², adjusted R², F-statistic, AIC, BIC

# Residual diagnostics
sm.qqplot(model.resid, line="s")  # check normality of residuals

# Time series: ARIMA
from statsmodels.tsa.arima.model import ARIMA

ts_model = ARIMA(time_series, order=(1, 1, 1)).fit()
forecast = ts_model.forecast(steps=12)
print(forecast)
```

## Related Technologies

Pandas · NumPy · SciPy · Scikit-learn · Matplotlib · Seaborn · Jupyter Notebook
