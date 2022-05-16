from typing import Dict, Tuple

from flask import request
from flask_restx import Namespace, Resource, fields

from ..helpers.auth import Auth

ns = Namespace("auth", description="auth related operations")

model = ns.model(
        "userAuth",
        {
            "email": fields.String(required=True, description="The email address"),
            "password": fields.String(required=True, description="The user password"),
        },
    )

@ns.route("/signin")
class UserLogin(Resource):
    """
    User Login Resource
    """

    @ns.doc("user login")
    @ns.expect(model)
    def post(self) -> Tuple[Dict, int]:
        """
        User Login Post Method
        """
        return Auth.loginUser(data=request.json)


@ns.route("/signout")
class LogoutAPI(Resource):
    """
    Logout Resource
    """
    @ns.doc("logout a user")
    def post(self) -> Tuple[Dict[str, str], int]:
        # get auth token
        return Auth.logoutUser(data=request.headers.get("Authorization"))
