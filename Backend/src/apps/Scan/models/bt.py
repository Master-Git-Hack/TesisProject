from datetime import datetime

from flask_rest import fields
from sqlalchemy import Boolean, Column, DateTime, Integer, String

from .... import db, ma


class BT(db.Model):
    """
    BT model for storing devices
    """

    __tablename__ = "bt"
    id = Column(Integer, primary_key=True, autoincrement=True)
    address = Column(String(50), unique=True)
    name = Column(String(50))
    types = Column(String(50))
    banned = Column(Boolean, default=False)
    date = Column(DateTime, default=datetime.utcnow)

    def __init__(self, address, name, types, banned, date):
        self.address = address
        self.name = name
        self.types = types
        self.banned = banned
        self.date = date

    def __repr__(self):
        return f"<BT {self.address} banned:{self.banned}>"
