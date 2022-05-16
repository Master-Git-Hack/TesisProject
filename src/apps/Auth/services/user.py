from datetime import datetime
from typing import Dict, Tuple
from uuid import uuid4

from .... import db
from ..models.user import User, UserSchema, apiUserModel

userModel = apiUserModel

def saveNewUser(data: Dict) -> Tuple[Dict, int]:
    """
    This method creates a new user
    """
    user = User.query.filter_by(email=data.get("email")).first()
    if not user:
        newUser = User(
            publicId=str(uuid4()),
            email=data["email"],
            username=data["username"],
            password=data["password"],
            registeredOn=datetime.now(),
        )
        saveChanges(newUser)
        return generateToken(newUser)
    else:
        response = {"status": "fail", "message": "User already exists. Please Sign in."}
        return response, 409


def getAllUsers():
    """
    This method returns all users
    """
    return User.query.all()


def getUser(publicId: str):
    """
    This method returns a user given its identifier
    """
    return User.query.filter_by(publicId=publicId).first()


def generateToken(user: User) -> Tuple[Dict[str, str], int]:
    """
    This method generates a token for the user
    """
    try:
        authToken = user.encodeAuthToken(user.id)
        response = {
            "status": "success",
            "message": "Successfully logged in.",
            "Authorization": authToken,
        }
        return response, 201
    except Exception as e:
        print(e)
        response = {
            "status": "fail",
            "message": "Try again, something went wrong. Please try again.",
        }
        return response, 401


def saveChanges(data: User) -> None:
    """
    This method saves the changes to the database
    """
    db.session.add(data)
    db.session.commit()
