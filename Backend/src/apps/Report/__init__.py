from ... import api

# import the last use of the namespace to import all the routes
from .views import ns as reportNS

api.add_namespace(reportNS)
