from datetime import datetime, timedelta

from flask_rest import fields
from sqlalchemy import JSON, Boolean, Column, DateTime, Integer, String
from sqlalchemy.dialects import postgresql as psql

from .... import db, ma


class Network(db.Model):
    """
    Network model for storing devices
    """

    __tablename__ = "network"
    id = Column(Integer, primary_key=True, autoincrement=True)
    address = Column(String(50), unique=True)
    hostname = Column(JSON)
    mac = Column(JSON)
    os = Column(JSON)
    ports = Column(JSON)
    state = Column(JSON)
    banned = Column(Boolean, default=False)
    date = Column(DateTime, default=datetime.utcnow)

    def __init__(self, address, hostname, mac, os, ports, state, banned, date):
        self.address = address
        self.hostname = hostname
        self.mac = mac
        self.os = os
        self.ports = ports
        self.state = state
        self.banned = banned
        self.date = date

    def __repr__(self):
        return f"<Network {self.address} banned:{self.banned}>"
