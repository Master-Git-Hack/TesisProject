from datetime import datetime
from typing import Dict, Tuple

from bluetooth import discover_devices, find_service
from bluetooth.ble import DiscoveryService

from ..models.bt import Bluetooth as BT
from ..models.bt import btSchema, db


class Bluetooth:
    def __init__(self, max_discovery: int = 1) -> None:
        """Initialize Bluetooth class.

        Args:
            max_discovery (int, optional): It is necessary to set the number of devices wants to discover or to wait to return values found, Defaults to 1.
        """
        self.max_discovery = max_discovery

    def scan(self) -> list(Dict):
        """Scan Bluetooth devices.

        Returns:
            list: A List with a Dictionary with the devices found.
        """
        discover = []
        devices = discover_devices(lookup_names=True, lookup_class=True)
        for address, name, device_class in devices:
            services = find_service(address)
            discover.append(
                dict(
                    address=address,
                    name=name,
                    services=services or None,
                    device_class=device_class,
                )
            )
        return discover

    def ble_scan(self) -> list(Dict):
        """Scan Bluetooth devices.

        Returns:
            list: A List with a Dictionary with the devices found.
        """
        service = DiscoveryService()
        devices = service.discover(self.max_discovery)
        return [dict(address=address, name=name) for address, name in devices.items()]

    def full_scan(self) -> Dict:
        """Scan Bluetooth devices.

        Returns:
            Dict: A Dict1 with a Dictionary with the devices found and a Dictionary with the bluetooth and ble devices found, int that order.
        """
        return dict(bt=self.scan(), ble=self.ble_scan())

    def verify(self) -> Dict:
        """Realize a verification of the Bluetooth devices recorded in DB.

        Returns:
            A Dictionary with the devices found and recorded previously.
        """

        return dict(
            bt=handleDevices(self.scan(), "BT"),
            ble=handleDevices(self.ble_scan(), "BLE"),
        )


def handleDevices(data: list, types: str) -> list(Dict):
    """A method to handle the devices found.

    Args:
        data (list): data of the devices found.

    Returns:
        list: list of dictionaries with the devices found.
    """
    payload = []
    for current in data:
        device = BT.query.filter_by(address=current["address"]).first()
        if device is not None:
            payload.append(btSchema.dump(device))
        else:
            newDevice = BT(
                address=current["address"],
                name=current["name"],
                types=types,
                services=current["services"] or None,
                banned=False,
                date=datetime.now(),
            )
            saveChanges(newDevice)
            payload.append(
                dict(
                    address=current["address"],
                    name=current["name"],
                    types=types,
                    services=current["services"] or None,
                    banned=False,
                    date=datetime.now(),
                )
            )
    return payload


def saveChanges(data: BT) -> None:
    """
    This method saves the changes to the database
    """
    db.session.add(data)
    db.session.commit()
