# Jupyter Notebook

> An interactive computing environment — mix code, output, visualizations, and documentation in one document.

## What is it?

Jupyter Notebook is an open-source web application that allows you to create and share documents containing live code, equations, visualizations, and narrative text. It originated from the IPython project and was released as Project Jupyter in 2014 by Fernando Pérez.

The name "Jupyter" is a nod to the three core supported languages at launch: **Ju**lia, **Pyt**hon, and **R**.

A Jupyter notebook is a `.ipynb` file (JSON internally) consisting of cells — each cell can contain code, Markdown text, or raw content, and can be executed independently.

## Why it matters

Jupyter fundamentally changed how data scientists work. Before Jupyter, you wrote a script, ran it, and looked at output in a terminal. With Jupyter, you can:

- Run one cell at a time and see output immediately below the code
- Iterate on a single step without re-running the entire analysis
- Mix code with explanatory text and visualizations in the same document
- Share a complete analysis (code + output + commentary) as a single file

This interactive, incremental workflow is perfectly suited for:
- **Exploratory Data Analysis** — try things, see results, iterate
- **Data cleaning** — inspect data at each transformation step
- **Model development** — test different approaches quickly
- **Presenting findings** — a notebook IS the report; code + charts + conclusions together
- **Teaching and learning** — tutorials, courses, workshops

## Key Concepts

- **Cell types** — Code (executes), Markdown (renders text/equations), Raw (unformatted)
- **Kernel** — the computational engine behind a notebook; one kernel per notebook; Python, R, Julia, etc.
- **Cell state** — cells have an execution count `[1]`; kernel maintains state between cells; variable from cell 3 is available in cell 7
- **Magic commands** — special IPython commands: `%timeit`, `%matplotlib inline`, `%%bash`, `%who`
- **Widgets (`ipywidgets`)** — interactive UI elements: sliders, dropdowns, that make notebooks dynamic
- **JupyterLab** — the next-generation web interface; a full IDE with file browser, terminals, and multiple notebooks
- **nbconvert** — export notebooks to HTML, PDF, Markdown, slides
- **Google Colab** — a free cloud-hosted Jupyter environment with GPU access (see separate note)

## Tips for Good Notebooks

- Structure notebooks like a document: introduction → data loading → EDA → modeling → conclusions
- Restart kernel and run all before sharing — ensures reproducibility
- Keep cells short and focused; one idea per cell
- Use Markdown cells to explain *why*, not just *what*

## Related Technologies

Python · Pandas · Matplotlib · Scikit-learn · Google Colab · JupyterHub · nbconvert
