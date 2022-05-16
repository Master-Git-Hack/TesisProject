from os import getenv
from unittest import TestLoader, TextTestRunner

from flask import Flask
from flask_bcrypt import Bcrypt
from flask_marshmallow import Marshmallow
# from flask_migrate import Migrate, MigrateCommand
from flask_restx import Api
# from flask_script import Manager
from flask_sqlalchemy import SQLAlchemy

from .config import configAPI, configByName, env

db = SQLAlchemy()
bcrypt = Bcrypt()


def createApp():
    context = Flask(__name__)
    context.config.from_object(configByName[env])
    db.init_app(context)
    bcrypt.init_app(context)
    return context


app = createApp()
app.app_context().push()
# manager = Manager(app)
# migrate = Migrate(app,db)
# manager.add_command('db', MigrateCommand)
api = Api(
    app,
    prefix=configAPI["prefix"],
    version=configAPI["version"],
    title=configAPI["title"],
    docs=configAPI["docsPath"],
    description="API para el maenjo de datos del proyecto en curso, para mayor información contacta a: Einar Jhordany Serna Valdivia <e.serna.1a.43@gmail.com>",
    ordered=True,
    contact="Einar Jhordany Serna Valdivia",
)
ma = Marshmallow(app)

import src.routes


# @manager.command
def run() -> None:
    """Run the application."""
    app.run()


# @manager.command
def test() -> bool:
    """Run the unit tests."""
    tests = TestLoader().discover("src/test", pattern="test*.py")
    result = TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1
