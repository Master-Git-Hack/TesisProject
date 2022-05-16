from functools import wraps
from typing import Callable

from flask import request

from ..apps.Auth.helpers.auth import Auth


def tokenRequired(f) -> Callable:
    @wraps(f)
    def decorated(*args, **kwargs):

        data, status = Auth.getLoggedInUser(request)
        token = data.get("data")

        if not token:
            return data, status

        return f(*args, **kwargs)

    return decorated


def adminTokenRequired(f) -> Callable:
    @wraps(f)
    def decorated(*args, **kwargs):
        data, status = Auth.getLoggedInUser(request)
        token = data.get("data")
        if not token:
            return data, status
        admin = token.get("admin")
        if not admin:
            response_object = {"status": "fail", "message": "admin token required"}
            return response_object, 401

        return f(*args, **kwargs)

    return decorated
