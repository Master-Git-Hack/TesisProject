from socket import AF_INET, SOCK_DGRAM, socket


def getIp():
    """function to get the ip address of the device

    Returns:
        string: -- ip address of the device
    """
    sockt = socket(AF_INET, SOCK_DGRAM)
    sockt.settimeout(0)
    try:
        # doesn't even have to be reachable
        sockt.connect(("0.0.0.0", 1))
        IP = sockt.getsockname()[0]
    except Exception:
        IP = "127.0.0.1"
    finally:
        sockt.close()
    return IP
