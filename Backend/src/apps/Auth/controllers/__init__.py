from datetime import datetime
from uuid import uuid4

from .... import db
from ..models.user import User


def saveNewUser(data):
    user = User.query.filter_by(email=data["email"]).first()
    if not user:
        newUser = User(
            publicId=str(uuid4()),
            email=data["email"],
            username=data["username"],
            password=data["password"],
            registeredOn=datetime.utcnow(),
        )
        saveChanges(newUser)
        response = {"status": "success", "message": "Successfully registered."}
        return response, 201
    else:
        response = {
            "status": "fail",
            "message": "User already exists. Please Sign in.",
        }
        return response, 409


def getAllUsers():
    return User.query.all()


def getUser(publicId):
    return User.query.filter_by(publicId=publicId).first()


def saveChanges(data):
    db.session.add(data)
    db.session.commit()
