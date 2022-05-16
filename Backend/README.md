# Flask Template for projects

## Previous requirements

1. [Python 3.6+](https://www.python.org/downloads/)

2. [PIP](https://pip.pypa.io/en/stable/installation/)

3. [VirtualEnv](https://virtualenv.pypa.io/en/latest/installation.html)

## Install dependencies

```bash
pip install -r requirements.txt
pip install -r requirements.txt --upgrade

```

## The tree structure should now look as follows

```bash
.
├── src
│   ├── __init__.py
│   ├── config.py
│   │
│   ├── apps
│   │   ├── Auth
│   │   │  ├── __init__.py
│   │   │  │
│   │   │  ├── controllers
│   │   │  │   ├── __init__.py
│   │   │  │   ├── auth.py 
│   │   │  │   └── user.py
│   │   │  │
│   │   │  ├── helpers
│   │   │  │   ├── __init__.py
│   │   │  │   └── auth.py 
│   │   │  │
│   │   │  ├── models
│   │   │  │   ├── __init__.py
│   │   │  │   ├── blacklist.py
│   │   │  │   └── user.py
│   │   │  │
│   │   │  ├── services
│   │   │  │   ├── __init__.py
│   │   │  │   ├── blacklist.py
│   │   │  │   └── user.py
│   │   │  │
│   │   │  ├── test
│   │   │  │   ├── __test__auth.py
│   │   │  │   └── __test__userModel.py
│   │   │  │
│   │   │  └── views
│   │   │      └── __init__.py
│   │   │
│   │   └── [APP_NAME]
│   │      ├── __init__.py
│   │      │
│   │      ├── controllers
│   │      │   └── user.py
│   │      │
│   │      ├── helpers
│   │      │   └── auth.py 
│   │      │
│   │      ├── models
│   │      │   └── user.py
│   │      │
│   │      ├── services
│   │      │   └── user.py
│   │      │
│   │      ├── test
│   │      │   └── __test__[Name].py
│   │      │
│   │      └── views
│   │          └── __init__.py
│   │
│   ├── test
│   │   ├── __init__.py
│   │   ├── __test__config.py 
│   │   └── base.py
│   │
│   ├── routes
│   │   └── __init__.py
│   │
│   ├── tmp
│   │
│   └── util
│       ├── __init__.py
│       ├── decorator.py
│       └── dto.py
│
├── wsgi.py
├── .flaskenv
├── Dockerfile
├── start.sh
└── requirements.txt
```

## Execute the application

Run application

```bash
flask run
```

Test application

```bash
python wsgi.py test
```

[reference](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563)
