from json import dump
from socket import AF_INET, SOCK_DGRAM, socket

import schedule
from bluetooth import discover_devices, find_service
from bluetooth.ble import DiscoveryService
from nmap3 import NmapScanTechniques


def ble(max_discovery=1):
    service = DiscoveryService()
    devices = service.discover(max_discovery)
    return [{address: {"name": name}} for address, name in devices.items()]


def bt():
    discover = []
    devices = discover_devices(lookup_names=True, lookup_class=True)
    for address, name, device_class in devices:
        services = find_service(address)
        if len(services) == 0:
            discover.append(
                {
                    address: {
                        "name": name,
                        "services": services,
                        "device_class": device_class,
                    }
                }
            )
        else:
            discover.append({address: {"name": name, "device_class": device_class}})
    return discover


def network(host):
    nmap = NmapScanTechniques()
    devices = nmap.nmap_fin_scan(host)
    return [
        {device: devices[device]}
        for device in devices
        if device != "stats" and device != "runtime"
    ]


def full_discovery(host, max_discovery=1):
    return {"ble": ble(max_discovery), "network": network(host), "bt": bt()}


def recorded_fd(host):
    data = full_discovery(host)
    with open("", "w") as file:
        dump(data, file, indent=4, sort_keys=True)


schedule.every(5).minutes.do(recorded_fd, host="host")


def execute():
    while True:
        schedule.run_pending()
        time.sleep(1)
