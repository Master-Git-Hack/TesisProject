from flask import request
from flask_restx import Resource

from ..controllers import getAllUsers, getUser, saveNewUser
from ..controllers.user import model, ns


@ns.route("/Auth")
class UserList(Resource):
    @ns.doc("list_of_registeredmodels")
    @ns.marshal_list_with(model, envelope="data")
    def get(self):
        """List all registered users"""
        return getAllUsers()

    @ns.response(201, "User successfully created.")
    @ns.doc("create a new user")
    @ns.expect(model, validate=True)
    def post(self):
        """Creates a new User"""
        return saveNewUser(data=request.json)

    @ns.route("/<string:publicId>")
    @ns.param("publicId", "The User identifier")
    @ns.response(404, "User not found.")
    class User(Resource):
        @ns.doc("get a user")
        @ns.marshal_with(model)
        def get(self, publicId):
            """get a user given its identifier"""
            user = getUser(publicId)
            if not user:
                ns.abort(404)
            else:
                return user
