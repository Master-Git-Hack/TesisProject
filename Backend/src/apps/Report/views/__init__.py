from typing import Dict, Tuple

from flask import send_file
from flask_restx import Namespace, Resource, fields
from src.config import rootPath

ns = Namespace("reports", description="reports related operations")


@ns.route("/report")
class UserLogin(Resource):
    """
    User Report Resource
    """

    @ns.doc("user login")
    def get(self) -> Tuple[Dict, int]:
        """
        User Login Post Method
        """
        return send_file(
            f"{rootPath}/tmp/report.pdf",
            as_attachment=True,
            mimetype="application/pdf",
            download_name="report.pdf",
        )
