from datetime import datetime

from sqlalchemy import JSON, Boolean, Column, DateTime, Integer, String

from .... import db, ma


class Bluetooth(db.Model):
    """
    BT model for storing devices
    """

    __tablename__ = "bt"
    id = Column(Integer, primary_key=True, autoincrement=True)
    address = Column(String(50), unique=True)
    name = Column(String(50))
    types = Column(String(50))
    services = Column(JSON)
    banned = Column(Boolean, default=False)
    date = Column(DateTime, default=datetime.utcnow)

    def __init__(self, address, name, types, services, banned, date):
        self.address = address
        self.name = name
        self.types = types
        self.services = services
        self.banned = banned
        self.date = date

    def __repr__(self):
        return f"<BT {self.address} banned:{self.banned}>"


db.create_all()


class BluetoothSchema(ma.Schema):
    class Meta:
        fields = ("id", "address", "name", "types", "services", "banned", "date")


btSchema = BluetoothSchema()
btsSchema = BluetoothSchema(many=True)
