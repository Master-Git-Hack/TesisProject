from datetime import datetime

from sqlalchemy import Column, DateTime, Integer, String

from .... import db


class BlacklistToken(db.Model):
    """
    Token Model for storing JWT tokens
    """

    __tablename__ = "blacklist_tokens"

    id = Column(Integer, primary_key=True, autoincrement=True)
    token = Column(String(500), unique=True, nullable=False)
    blacklistedOn = Column(DateTime, nullable=False)

    def __init__(self, token):
        """
        Constructor
        :param token:
        """
        self.token = token
        self.blacklistedOn = datetime.now()

    def __repr__(self):
        """
        Representation
        :return: String
        """
        return f"<id: token: {self.token}>"

    @staticmethod
    def checkBlacklist(authToken):
        response = BlacklistToken.query.filter_by(token=str(authToken)).first()
        if response:
            return True
        else:
            return False


db.create_all()
