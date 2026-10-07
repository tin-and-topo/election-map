# VoteReady Election Map

**tin+topo**

[![Python](https://img.shields.io/badge/Python-3.x-blue.svg)](https://www.python.org/)
[![Geopandas](https://img.shields.io/badge/Geopandas-Active-success.svg)](https://geopandas.org/)
[![AGOL](https://img.shields.io/badge/ArcGIS_Online-Ready-orange.svg)](https://www.arcgis.com/)

> A static, accessible voter-information guide that lets people explore polling locations, sample ballot content, ballot questions, and voting resources. The initial published-data scope is Hamilton County, Tennessee’s November 3, 2026 State and Federal General Election.

---

## Current Application

The GitHub Pages application is dependency-free and lives at the repository root:

```text
├── index.html                 # Accessible application shell
├── assets/css/styles.css      # Responsive interface styles
├── assets/js/election-data.js # Reviewed Hamilton County snapshot and official source links
└── assets/js/app.js           # Site selection and safe DOM rendering
```

The app does not collect, transmit, or persist user data. Site selection is kept only in the page URL fragment so a view can be shared without contacting a server.

### Publish with GitHub Pages

1. Push the repository to its intended public GitHub repository.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select the publishing branch (normally `main`) and the `/(root)` folder.
4. Before each new publication, review `assets/js/election-data.js` against the linked sources and update its retrieval date. Election data can change at any time.

GitHub Pages is appropriate for this public, static guide. It must not be used to store voter lookups, registration records, addresses, credentials, or service secrets. Any future personalized lookup needs a separately hosted backend with an approved privacy review.

## Data publishing requirements

- Obtain data from the responsible election authority and record its source and retrieval date. The current Hamilton County source pages are the [Notice of Election](https://elect.hamiltontn.gov/NovNoE.aspx), [early-voting locations](https://elect.hamiltontn.gov/ev.aspx), [Election Day polling places](https://elect.hamiltontn.gov/ed.aspx), and [official generic sample ballot](https://elect.hamiltontn.gov/Portals/12/HTML/GenSample.html).
- Have two people review polling locations, deadlines, and ballot text before publishing.
- Preserve source data outside this public repository when it contains restricted or personally identifying information.
- Do not infer a voter’s district from their address in the browser. Direct personalized lookups to the responsible election authority.

## Repository Structure

This project follows the standard `tin+topo` template structure to keep data, exploration, and production code completely separated:

```text
├── data/
│   ├── processed/         # Cleaned, derived, or finalized spatial data
│   └── raw/               # Original, unaltered spatial downloads (DO NOT COMMIT to Git)
├── notebooks/             # Jupyter Notebooks for spatial exploration and prototyping
├── scripts/               # Production-ready Python or Node.js scripts
├── src/                   # Reusable production Python code
├── .env.example           # Template for local environment variables and secrets
├── .gitignore             # Standard GIS ignore rules (blocks massive spatial binaries)
├── AGENTS.md and CLAUDE.md   # AI coding-agent constraints and project guidance
├── README.md              # Project documentation (You are here!)
└── requirements.txt       # Python dependencies (pandas, geopandas, arcgis, etc.)
```

## Getting Started

### 1. Clone the Repository
Clone this repository to your local machine (e.g., `C:\github\[project-name]`). Do not clone into a OneDrive-synced folder like `Documents` to avoid sync conflicts.

### 2. Configure Environment Variables
**Never commit actual credentials to GitHub.**
1. Create a copy of `.env.example` and rename it to `.env`.
2. Fill in only the values required by your project locally. Use ArcGIS named-user or OAuth authentication where available; do not put passwords, tokens, or certificates in source code.

### 3. Install Dependencies
Install the required libraries to run this project:

```sh
# To install only the core production dependencies:
pip install -r requirements.txt

# To install all development tools (like JupyterLab) as well:
pip install -r requirements-dev.txt
```

### 4. Run Local Checks

```sh
pre-commit install
pre-commit run --all-files
ruff check .
```

Run `pytest` when the project includes tests.

---

## Data Handling Rules

1. **Large Spatial Files:** Do not commit `.shp`, `.gdb`, `.tif`, or any large spatial binaries to this repository.
2. **Raw Data:** Store all raw downloads in `data/raw/`. Treat this folder as read-only.
3. **Outputs:** Write all cleaned, intermediate, and final spatial outputs to `data/processed/`.

---

## AI Agent Compatibility

This repository is pre-configured to work with `tin+topo` AI coding assistants and enterprise models.
Please refer to [AGENTS.md](AGENTS.md) and [CLAUDE.md](CLAUDE.md) for specific instructions on how agents should interact with this codebase.

---

## Point of Contact

* **Project Owner:** Colin T. Stiles | cts@tinandtopo.com
* **Last Updated:** 2026-10-07
