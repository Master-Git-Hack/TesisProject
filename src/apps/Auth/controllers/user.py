from typing import Dict, Tuple

from flask import request
from flask_restx import Namespace, Resource

from ....util.decorator import adminTokenRequired
from ..services.user import getAllUsers, getUser, saveNewUser, userModel

ns = Namespace("user", description="user related operations")
model = ns.model("user", userModel)


@ns.route("/")
class UserList(Resource):
    """
    User List Resource
    """

    @ns.doc("list_of_registered_users")
    @adminTokenRequired
    @ns.marshal_list_with(model, envelope="data")
    def get(self) -> Tuple[Dict, int]:
        """
        Returns list of registered users
        """
        return getAllUsers()

    @ns.expect(model, validate=True)
    @ns.response(201, "User successfully created.")
    @ns.doc("create a new user")
    def post(self) -> Tuple[Dict, int]:
        """
        Creates a new user
        """
        return saveNewUser(data=request.json)


@ns.route("/<string:publicId>")
@ns.param("publicId", "The User identifier")
class User(Resource):
    """
    User Resource
    """

    @ns.doc("get a user")
    @ns.marshal_with(model)
    def get(self, publicId: str) -> Tuple[Dict, int]:
        """
        Returns a user given its identifier
        """
        response = getUser(publicId)
        if not response:
            ns.abort(404, f"User {publicId} doesn't exist")
        else:
            return response
