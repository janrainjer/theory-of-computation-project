# Development
Setup project
```bash
git clone https://github.com/theory-of-comedy/spelling-dee-backend.git
git checkout dev
python -m venv venv

source ./venv/bin/activate # for MacOS and Linux
.\venv\Scripts\activate # for Window

pip install -r ./requirements-dev.txt
uvicorn main:app --reload
# http://localhost:8000/docs
```

Enable precommit
```bash
pre-commit install
```
