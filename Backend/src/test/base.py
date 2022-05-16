from flask_testing import TestCase

from .. import app, db


class BaseTestCase(TestCase):
    def createApp(self):
        """
        Create the app instance
        :return: Flask instance
        """
        app.config.from_object("src.config.TestingConfig")
        return app

    def setUp(self) -> None:
        """
        This method is called before each test
        """
        db.create_all()
        db.session.commit()

    def tearDown(self) -> None:
        """
        This method is called after each test
        """
        db.session.remove()
        db.drop_all()
