# Google Colab

> Free cloud-hosted Jupyter notebooks with GPU access — no setup, just open and code.

## What is it?

Google Colaboratory (Colab) is a free, cloud-based Jupyter notebook environment hosted by Google. It requires no installation — you open a browser, create a notebook, and start writing Python code. Notebooks run on Google's servers and can access free GPU and TPU accelerators.

Colab notebooks are stored in Google Drive and can be shared like Google Docs — a link gives access to the notebook and its outputs.

## Why it matters

Colab removes the two biggest barriers to machine learning experimentation:

1. **No setup** — no Python installation, no virtual environment, no CUDA drivers; the environment is ready with TensorFlow, PyTorch, Pandas, and Scikit-learn pre-installed
2. **Free GPU/TPU** — training neural networks on a CPU takes hours; with Colab's free GPU (NVIDIA T4 or similar), it takes minutes

Colab is used for:
- **Learning ML** — follow any tutorial without installing anything
- **Prototyping models** — test ideas without committing to a full development environment
- **Collaboration** — share a working notebook with a teammate (or professor) by sharing a link
- **Running experiments** — use free GPU time for experiments before buying cloud compute
- **Reproducible research** — share the exact code and environment that produced your results

## Key Concepts

- **Runtime** — a virtual machine that executes your notebook; free tier gives ~12 hours of connected runtime
- **GPU/TPU** — enable under Runtime → Change Runtime Type; dramatically speeds up deep learning training
- **`!` prefix** — run shell commands: `!pip install librosa`, `!nvidia-smi`, `!ls /content`
- **Google Drive mounting** — `from google.colab import drive; drive.mount('/content/drive')` — access your Drive files
- **Forms** — create interactive parameter inputs with `#@param` annotations
- **Colab Pro/Pro+** — paid tiers that give more RAM, longer runtimes, and better GPUs
- **Secrets** — store API keys securely: `from google.colab import userdata; key = userdata.get('MY_API_KEY')`
- **`%cd` and `%pwd`** — navigate and check the current working directory

## Quick Example

```python
# Mount Google Drive to access datasets
from google.colab import drive
drive.mount('/content/drive')

# Install a library not pre-installed
!pip install -q transformers datasets

# Check GPU availability
import torch
print(f"GPU available: {torch.cuda.is_available()}")
print(f"GPU name: {torch.cuda.get_device_name(0)}")

# Load dataset from Drive
import pandas as pd
df = pd.read_csv('/content/drive/MyDrive/datasets/sales_data.csv')
print(df.head())

# Download trained model to local machine
from google.colab import files
files.download('model.pt')
```

## Related Technologies

Jupyter Notebook · Python · TensorFlow · PyTorch · Google Drive · Kaggle Notebooks
