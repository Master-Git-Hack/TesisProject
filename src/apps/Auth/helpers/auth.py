from typing import Dict, Tuple

from ..models.user import User
from ..services.blacklist import saveToken


class Auth:
    @staticmethod
    def loginUser(data: Dict[str, str]) -> Tuple[Dict, int]:
        """
        This method login the user and return the access token
        """
        try:
            # fetch the user data
            user = User.query.filter_by(email=data.get("email")).first()
            if user and user.checkPassword(data.get("password")):
                authToken = User.encodeAuthToken(user.id)
                if authToken:
                    response = {
                        "status": "success",
                        "message": "Successfully logged in.",
                        "Authorization": authToken.decode(),
                    }
                    return response, 200
            else:
                response = {
                    "status": "fail",
                    "message": "email or password does not match.",
                }
                return response, 401

        except Exception as e:
            print(e)
            response = {"status": "fail", "message": "Try again"}
            return response, 500

    @staticmethod
    def logoutUser(data: str) -> Tuple[Dict[str, str], int]:
        """
        This method logs out the user
        """
        if data:
            authToken = data.split(".")[1]
        else:
            authToken = ""
        if authToken:
            resp = User.decodeAuthToken(authToken)
            if not isinstance(resp, str):
                # mark the token as blacklisted
                return saveToken(token=authToken)
            else:
                response = {"status": "fail", "message": resp}
                return response, 401
        else:
            response = {"status": "fail", "message": "Provide a valid auth token."}
            return response, 403

    @staticmethod
    def getLoggedInUser(newRequest):
        """
        This method gets the logged in user
        """
        authToken = newRequest.headers.get("Authorization")
        print(authToken)
        if authToken:
            resp = User.decodeAuthToken(authToken)
            print(resp)
            if not isinstance(resp, str):
                user = User.query.filter_by(id=resp).first()
                response = {
                    "status": "success",
                    "data": {
                        "userId": user.id,
                        "email": user.email,
                        "admin": user.admin,
                        "registeredOn": str(user.registeredOn),
                    },
                }
                return response, 200
            response = {"status": "fail", "message": resp}
            return response, 401
        else:
            response = {"status": "fail", "message": "Provide a valid auth token."}
            return response, 401
