from ... import api
from .controllers.auth import ns as authNS
# import the last use of the namespace to import all the routes
from .views import ns as userNS

api.add_namespace(authNS)
api.add_namespace(userNS)
