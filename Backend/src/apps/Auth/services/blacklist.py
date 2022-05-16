from typing import Dict, Tuple

from src.apps.Auth.models import blacklist

from .... import db
from ..models.blacklist import BlacklistToken


def saveToken(token: str) -> Tuple[Dict, int]:
    """
    This method logs out the user
    """
    blacklistToken = BlacklistToken(token=token)
    try:
        db.session.add(blacklistToken)
        db.session.commit()
        response = {"status": "success", "message": "Successfully logged out."}
        return response, 200
    except Exception as e:
        print(e)
        response = {"status": "fail", "message": f"Try again: {e}"}
        return response, 200
