from datetime import datetime, timedelta
from typing import Union

from flask_restx import fields
from jwt import ExpiredSignatureError, InvalidTokenError, decode, encode
from sqlalchemy import Boolean, Column, DateTime, Integer, String

from .... import bcrypt, db, ma
from ....config import key
from .blacklist import BlacklistToken


class User(db.Model):
    """User Model for storing user related details"""

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255), unique=True, nullable=False)
    registeredOn = Column(DateTime, nullable=False)
    admin = Column(Boolean, nullable=False, default=False)
    publicId = Column(String(100), unique=True)
    username = Column(String(50), unique=True)
    passwordHash = Column(String(255))

    @property
    def password(self):
        raise AttributeError("password: write-only field")

    @password.setter
    def password(self, password):
        self.passwordHash = bcrypt.generate_password_hash(password).decode("utf-8")

    def checkPassword(self, password):
        return bcrypt.check_password_hash(self.passwordHash, password)

    @staticmethod
    def encodeAuthToken(userId: int) -> bytes:
        """
        Generates the Auth Token
        :return: string
        """
        try:
            payload = {
                "exp": datetime.utcnow() + timedelta(days=1, seconds=5),
                "iat": datetime.utcnow(),
                "sub": userId,
            }
            return encode(payload, key, algorithm="HS256")
        except Exception as e:
            return e

    @staticmethod
    def decodeAuthToken(authToken: str) -> Union[str, int]:
        """
        Decodes the auth token
        :param auth_token:
        :return: integer|string
        """
        try:
            payload = decode(authToken, key)
            is_blacklisted_token = BlacklistToken.checkBlacklist(authToken)
            if is_blacklisted_token:
                return "Token blacklisted. Please log in again."
            else:
                return payload["sub"]
        except ExpiredSignatureError:
            return "Signature expired. Please log in again."
        except InvalidTokenError:
            return "Invalid token. Please log in again."

    def __repr__(self):
        return f"<User '{self.username}'>"


db.create_all()

class UserSchema(ma.Schema):
    class Meta:
        model = User
        fields = ("id", "email", "registeredOn", "admin", "publicId", "username")

apiUserModel = dict(
    email = fields.String(required=True, description="User Email Address"),
    username = fields.String(required=True, description="User Username"),
    password = fields.String(required=True, description="User Password"),
    publicId = fields.String(description="User Public Id"),
)