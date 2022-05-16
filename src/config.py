"""
config file for the project
"""
from os import getenv
from os.path import abspath, dirname, join

rootPath = abspath(dirname(__file__))


class Config:
    """Base configuration."""

    SECRET_KEY = getenv("SECRET_KEY") or "secret-key"
    DEBUG = False
    ENV = getenv("FLASK_ENV") or "dev"
    VERSION = getenv("VERSION") or "1"
    API_URL = getenv("API_URL") or f"/api/v{VERSION}/"
    TITLE = getenv("TITLE") or "API DEV"
    CORS = getenv("CORS") or "*"
    CORS_ORIGIN = getenv("CORS_ORIGIN") or "*"
    TEMPORARY_PATH = getenv("TEMPORARY_PATH") or "tmp"

class Paths:
    """Paths configuration."""
    tmp = join(rootPath, Config.TEMPORARY_PATH)


class DevelopmentConfig:
    """Development configuration."""

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = (
        getenv("DATABASE_URL_DEV") or f"sqlite:///{rootPath}/db.sqlite"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class TestingConfig(Config):
    """Testing configuration."""

    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = (
        getenv("DATABASE_URL_TEST") or f"sqlite:///{rootPath}/db.sqlite"
    )
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProductionConfig(Config):
    """Production configuration."""

    DEBUG = False
    SQLALCHEMY_DATABASE_URI = getenv("DATABASE_URL")


configByName = dict(dev=DevelopmentConfig, test=TestingConfig, prod=ProductionConfig)
configAPI = dict(
    title=Config.TITLE,
    version=Config.VERSION,
    prefix=Config.API_URL,
    authorizations={
        "apiKey": {"type": "apiKey", "in": "header", "name": "Authorization"}
    },
    docsPath="/docs",
)
key = Config.SECRET_KEY
env = Config.ENV
corsSRC = {f"{Config.API_URL}{Config.CORS}": dict(origin=Config.CORS_ORIGIN)}

