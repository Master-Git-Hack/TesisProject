from audioop import add
from datetime import datetime
from typing import Dict

from dateparser import parse
from json2html import *
from nmap3 import Nmap, NmapScanTechniques

from ..helpers.host import getHost
from ..models.network import Network as NT
from ..models.network import db, ntSchema


class Network:
    def __init__(self, host: str = getHost(), mask: str = "24") -> None:
        """_summary_

        Args:
            host (str, optional):define the actual IP Addr. Defaults to getHost().
            mask (str, optional): use the mask assigned to the actual device. Defaults to "24".
        """
        self.host = f"{host}/{mask}"

    def osmatch_scan(self, device: str) -> Dict or None:
        """Scan the OS of the device."""
        os = Nmap().nmap_os_detection(device)
        match = os[device]["osmatch"]
        return match[0] if len(match) > 0 else None

    def scan(self) -> list():
        nmap = NmapScanTechniques()
        devices = nmap.nmap_fin_scan(self.host)
        payload = list()
        for address, info in devices.items():
            if address != "stats" and address != "runtime":
                device = NT.query.filter_by(address=device).first()
                if device is None:
                    payload.append(ntSchema.dump(device))
                else:
                    payload.append(
                        dict(
                            address=address,
                            hostname=info["hostname"],
                            macaddress=info["macaddress"] or None,
                            osmatch=self.osmatch_scan(device),
                            ports=info["ports"],
                            state=info["state"],
                            date=datetime.utcnow(),
                            status=False,
                        )
                    )
        return payload
