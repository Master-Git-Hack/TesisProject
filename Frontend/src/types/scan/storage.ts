/** @format */

import { bluetooth } from "./bt";
import { network } from "./network";
interface Properties {
	ble: Array<bluetooth>;
	bt: Array<bluetooth>;
	network: Array<network>;
	status: string;
	message: string;
}
/*
export const initialState:Properties = {
    ble: [
        {
            name: '',
            address: '',
            status: false,
        }
    ],
    bt: [
        {
            name: '',
            address: '',
            status:false,
        }
    ],
    network: [{
        address: '',
        hostname: [{
            name: '',
            type: ''
        }],
        macaddress: {
            addr: '',
            addrtype: '',
            vendor: ''
        },
        osmatch: [],
        ports: [],
        state: {
            reason: '',
            reason_ttl: 0,
            state: 0
        },
        status: false,
    }],
    status: 'unset',
    message: ''
};
*/
export const initialState: Properties = {
	ble: [
		{
			address: "5D:21:5B:63:2D:34",
			name: "",
			status: false,
			date: "",
		},
		{
			address: "7C:A8:E9:44:DA:B2",
			name: "",
			status: false,
			date: "",
		},
	],
	bt: [
		{
			address: "",
			name: "",
			status: false,
			date: "",
		},
	],
	network: [
		{
			address: "172.31.103.17",
			date: "Fecha:2022-05-23, Hora:10:10:46",
			hostname: [],
			macaddress: {
				addr: "40:A8:F0:5A:AC:F2",
				addrtype: "mac",
				vendor: "Hewlett Packard",
			},
			osmatch: {
				accuracy: "100",
				cpe: "cpe:/o:linux:linux_kernel:4",
				line: "63230",
				name: "Linux 3.10 - 4.11",
				osclass: {
					accuracy: "100",
					osfamily: "Linux",
					osgen: "4.X",
					type: "general purpose",
					vendor: "Linux",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.19",
			date: "Fecha:2022-05-23, Hora:10:11:09",
			hostname: [],
			macaddress: {
				addr: "40:A8:F0:5A:AC:59",
				addrtype: "mac",
				vendor: "Hewlett Packard",
			},
			osmatch: {},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.38",
			date: "Fecha:2022-05-23, Hora:10:11:18",
			hostname: [],
			macaddress: {
				addr: "40:A8:F0:3F:79:06",
				addrtype: "mac",
				vendor: "Hewlett Packard",
			},
			osmatch: {
				accuracy: "94",
				cpe: "cpe:/o:linux:linux_kernel:2.6.32",
				line: "55173",
				name: "Linux 2.6.32",
				osclass: {
					accuracy: "94",
					osfamily: "Linux",
					osgen: "2.6.X",
					type: "general purpose",
					vendor: "Linux",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.45",
			date: "Fecha:2022-05-23, Hora:10:11:29",
			hostname: [],
			macaddress: {
				addr: "08:00:27:C2:85:DD",
				addrtype: "mac",
				vendor: "Oracle VirtualBox virtual NIC",
			},
			osmatch: {
				accuracy: "100",
				cpe: "cpe:/o:microsoft:windows_server_2008",
				line: "74063",
				name: "Microsoft Windows Server 2008 or 2008 Beta 3",
				osclass: {
					accuracy: "100",
					osfamily: "Windows",
					osgen: "2008",
					type: "general purpose",
					vendor: "Microsoft",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.57",
			date: "Fecha:2022-05-23, Hora:10:11:42",
			hostname: [],
			macaddress: {
				addr: "6C:4B:90:BE:F9:AF",
				addrtype: "mac",
				vendor: "LiteON",
			},
			osmatch: {
				accuracy: "93",
				cpe: "cpe:/o:microsoft:windows_10:1703",
				line: "69466",
				name: "Microsoft Windows 10 1703",
				osclass: {
					accuracy: "93",
					osfamily: "Windows",
					osgen: "10",
					type: "general purpose",
					vendor: "Microsoft",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.61",
			date: "Fecha:2022-05-23, Hora:10:11:57",
			hostname: [],
			macaddress: {
				addr: "EC:B1:D7:6F:DD:00",
				addrtype: "mac",
				vendor: "Hewlett Packard",
			},
			osmatch: {
				accuracy: "93",
				cpe: "cpe:/o:microsoft:windows_10:1703",
				line: "69466",
				name: "Microsoft Windows 10 1703",
				osclass: {
					accuracy: "93",
					osfamily: "Windows",
					osgen: "10",
					type: "general purpose",
					vendor: "Microsoft",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.82",
			date: "Fecha:2022-05-23, Hora:10:11:59",
			hostname: [],
			macaddress: {
				addr: "00:21:B7:C9:20:79",
				addrtype: "mac",
				vendor: "Lexmark International",
			},
			osmatch: {
				accuracy: "100",
				cpe: "cpe:/h:lexmark:x656de",
				line: "43173",
				name: "Lexmark T654 or X656de printer",
				osclass: {
					accuracy: "100",
					osfamily: "embedded",
					type: "printer",
					vendor: "Lexmark",
				},
			},
			ports: [
				{
					portid: "21",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ftp",
					},
					state: "open|filtered",
				},
				{
					portid: "79",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "finger",
					},
					state: "open|filtered",
				},
				{
					portid: "80",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "http",
					},
					state: "open|filtered",
				},
				{
					portid: "443",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "https",
					},
					state: "open|filtered",
				},
				{
					portid: "515",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "printer",
					},
					state: "open|filtered",
				},
				{
					portid: "631",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ipp",
					},
					state: "open|filtered",
				},
				{
					portid: "4000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "remoteanything",
					},
					state: "open|filtered",
				},
				{
					portid: "5000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "upnp",
					},
					state: "open|filtered",
				},
				{
					portid: "5001",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "commplex-link",
					},
					state: "open|filtered",
				},
				{
					portid: "6100",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "synchronet-db",
					},
					state: "open|filtered",
				},
				{
					portid: "8000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "http-alt",
					},
					state: "open|filtered",
				},
				{
					portid: "9000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "cslistener",
					},
					state: "open|filtered",
				},
				{
					portid: "9100",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "jetdirect",
					},
					state: "open|filtered",
				},
				{
					portid: "9200",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "wap-wsp",
					},
					state: "open|filtered",
				},
				{
					portid: "9500",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ismserver",
					},
					state: "open|filtered",
				},
				{
					portid: "10000",
					protocol: "tcp",
					reason: "port-unreach",
					reason_ttl: "254",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "snet-sensor-mgmt",
					},
					state: "filtered",
				},
			],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.92",
			date: "Fecha:2022-05-23, Hora:10:12:12",
			hostname: [],
			macaddress: {
				addr: "6C:4B:90:C4:CC:2D",
				addrtype: "mac",
				vendor: "LiteON",
			},
			osmatch: {
				accuracy: "93",
				cpe: "cpe:/o:microsoft:windows_10:1703",
				line: "69466",
				name: "Microsoft Windows 10 1703",
				osclass: {
					accuracy: "93",
					osfamily: "Windows",
					osgen: "10",
					type: "general purpose",
					vendor: "Microsoft",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.100",
			date: "Fecha:2022-05-23, Hora:10:12:13",
			hostname: [],
			macaddress: {
				addr: "00:D0:B8:24:AE:D3",
				addrtype: "mac",
				vendor: "Iomega",
			},
			osmatch: {
				accuracy: "100",
				cpe: "cpe:/o:linux:linux_kernel:3",
				line: "56585",
				name: "Linux 2.6.32 - 3.5",
				osclass: {
					accuracy: "100",
					osfamily: "Linux",
					osgen: "3.X",
					type: "general purpose",
					vendor: "Linux",
				},
			},
			ports: [
				{
					portid: "80",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "http",
					},
					state: "open|filtered",
				},
				{
					portid: "111",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "rpcbind",
					},
					state: "open|filtered",
				},
				{
					portid: "139",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "netbios-ssn",
					},
					state: "open|filtered",
				},
				{
					portid: "443",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "https",
					},
					state: "open|filtered",
				},
				{
					portid: "445",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "microsoft-ds",
					},
					state: "open|filtered",
				},
				{
					portid: "548",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "afp",
					},
					state: "open|filtered",
				},
				{
					portid: "873",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "rsync",
					},
					state: "open|filtered",
				},
				{
					portid: "2049",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "nfs",
					},
					state: "open|filtered",
				},
			],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.164",
			date: "Fecha:2022-05-23, Hora:10:12:26",
			hostname: [],
			macaddress: {
				addr: "40:A8:F0:51:3D:C2",
				addrtype: "mac",
				vendor: "Hewlett Packard",
			},
			osmatch: {
				accuracy: "93",
				cpe: "cpe:/o:microsoft:windows_10:1703",
				line: "69466",
				name: "Microsoft Windows 10 1703",
				osclass: {
					accuracy: "93",
					osfamily: "Windows",
					osgen: "10",
					type: "general purpose",
					vendor: "Microsoft",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.200",
			date: "Fecha:2022-05-23, Hora:10:12:38",
			hostname: [],
			macaddress: {
				addr: "00:21:B7:C9:20:A4",
				addrtype: "mac",
				vendor: "Lexmark International",
			},
			osmatch: {
				accuracy: "96",
				cpe: "cpe:/h:lexmark:x656de",
				line: "43173",
				name: "Lexmark T654 or X656de printer",
				osclass: {
					accuracy: "96",
					osfamily: "embedded",
					type: "printer",
					vendor: "Lexmark",
				},
			},
			ports: [
				{
					portid: "21",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ftp",
					},
					state: "open|filtered",
				},
				{
					portid: "79",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "finger",
					},
					state: "open|filtered",
				},
				{
					portid: "80",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "http",
					},
					state: "open|filtered",
				},
				{
					portid: "443",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "https",
					},
					state: "open|filtered",
				},
				{
					portid: "515",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "printer",
					},
					state: "open|filtered",
				},
				{
					portid: "631",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ipp",
					},
					state: "open|filtered",
				},
				{
					portid: "4000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "remoteanything",
					},
					state: "open|filtered",
				},
				{
					portid: "5000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "upnp",
					},
					state: "open|filtered",
				},
				{
					portid: "5001",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "commplex-link",
					},
					state: "open|filtered",
				},
				{
					portid: "6100",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "synchronet-db",
					},
					state: "open|filtered",
				},
				{
					portid: "8000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "http-alt",
					},
					state: "open|filtered",
				},
				{
					portid: "9000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "cslistener",
					},
					state: "open|filtered",
				},
				{
					portid: "9100",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "jetdirect",
					},
					state: "open|filtered",
				},
				{
					portid: "9200",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "wap-wsp",
					},
					state: "open|filtered",
				},
				{
					portid: "9500",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ismserver",
					},
					state: "open|filtered",
				},
				{
					portid: "10000",
					protocol: "tcp",
					reason: "port-unreach",
					reason_ttl: "254",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "snet-sensor-mgmt",
					},
					state: "filtered",
				},
			],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.219",
			date: "Fecha:2022-05-23, Hora:10:12:47",
			hostname: [],
			macaddress: {
				addr: "6C:4B:90:CB:9A:7F",
				addrtype: "mac",
				vendor: "LiteON",
			},
			osmatch: {
				accuracy: "87",
				line: "9077",
				name: "AVtech Room Alert 26W environmental monitor",
				osclass: {
					accuracy: "87",
					osfamily: "embedded",
					type: "specialized",
					vendor: "AVtech",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.240",
			date: "Fecha:2022-05-23, Hora:10:12:59",
			hostname: [],
			macaddress: {
				addr: "00:04:00:CE:81:7A",
				addrtype: "mac",
				vendor: "Lexmark International",
			},
			osmatch: {
				accuracy: "97",
				cpe: "cpe:/h:lexmark:t644",
				line: "21705",
				name: "Dell 5210n or Lexmark C530-series or T640-series printer",
				osclass: {
					accuracy: "97",
					osfamily: "embedded",
					type: "printer",
					vendor: "Lexmark",
				},
			},
			ports: [
				{
					portid: "21",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ftp",
					},
					state: "open|filtered",
				},
				{
					portid: "79",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "finger",
					},
					state: "open|filtered",
				},
				{
					portid: "80",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "http",
					},
					state: "open|filtered",
				},
				{
					portid: "443",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "https",
					},
					state: "open|filtered",
				},
				{
					portid: "515",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "printer",
					},
					state: "open|filtered",
				},
				{
					portid: "631",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ipp",
					},
					state: "open|filtered",
				},
				{
					portid: "5000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "upnp",
					},
					state: "open|filtered",
				},
				{
					portid: "5001",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "commplex-link",
					},
					state: "open|filtered",
				},
				{
					portid: "6100",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "synchronet-db",
					},
					state: "open|filtered",
				},
				{
					portid: "8000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "http-alt",
					},
					state: "open|filtered",
				},
				{
					portid: "9000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "cslistener",
					},
					state: "open|filtered",
				},
				{
					portid: "9100",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "jetdirect",
					},
					state: "open|filtered",
				},
				{
					portid: "9200",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "wap-wsp",
					},
					state: "open|filtered",
				},
				{
					portid: "9500",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ismserver",
					},
					state: "open|filtered",
				},
				{
					portid: "10000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "snet-sensor-mgmt",
					},
					state: "open|filtered",
				},
			],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.254",
			date: "Fecha:2022-05-23, Hora:10:13:02",
			hostname: [
				{
					name: "_gateway",
					type: "PTR",
				},
			],
			macaddress: {
				addr: "00:25:B4:CF:A3:00",
				addrtype: "mac",
				vendor: "Cisco Systems",
			},
			osmatch: {
				accuracy: "100",
				cpe: "cpe:/a:cisco:adaptive_security_appliance_software:9",
				line: "16974",
				name: "Cisco 2950, 2960, 3550, 3560, 3750, or 4500 switch or 6500 router (IOS 12.1 - 15.0); or Adaptive Security Appliance firewall",
				osclass: {
					accuracy: "100",
					osfamily: "ASA",
					osgen: "9.X",
					type: "firewall",
					vendor: "Cisco",
				},
			},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
		{
			address: "172.31.103.25",
			date: "Fecha:2022-05-23, Hora:10:13:05",
			hostname: [
				{
					name: "info-cat6",
					type: "PTR",
				},
			],
			macaddress: null,
			osmatch: {
				accuracy: "100",
				cpe: "cpe:/o:linux:linux_kernel:2.6.32",
				line: "55543",
				name: "Linux 2.6.32",
				osclass: {
					accuracy: "100",
					osfamily: "Linux",
					osgen: "2.6.X",
					type: "general purpose",
					vendor: "Linux",
				},
			},
			ports: [
				{
					portid: "80",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "http",
					},
					state: "open|filtered",
				},
				{
					portid: "139",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "netbios-ssn",
					},
					state: "open|filtered",
				},
				{
					portid: "445",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "microsoft-ds",
					},
					state: "open|filtered",
				},
				{
					portid: "3000",
					protocol: "tcp",
					reason: "no-response",
					reason_ttl: "0",
					scripts: [],
					service: {
						conf: "3",
						method: "table",
						name: "ppp",
					},
					state: "open|filtered",
				},
			],
			state: {
				reason: "localhost-response",
				reason_ttl: "0",
				state: "up",
			},
			status: false,
		},
	] /*[
		{
			address: "10.20.20.1",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "timestamp-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.17",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "timestamp-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.33",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [
				{
					"protocol":"tcp",
					"portid":"21",
					"state":"open|filtered",
					"reason":"no-response",
					"reason_ttl":"0",
					"service":{
					   "name":"ftp",
					   "method":"table",
					   "conf":"3"
					},
					"scripts":[
					   
					]
				 },
				 {
					"protocol":"tcp",
					"portid":"79",
					"state":"open|filtered",
					"reason":"no-response",
					"reason_ttl":"0",
					"service":{
					   "name":"finger",
					   "method":"table",
					   "conf":"3"
					},
					"scripts":[
					   
					]
				 },
			],
			state: {
				reason: "timestamp-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.49",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "timestamp-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.81",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "echo-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.97",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "echo-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.113",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "echo-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.129",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "echo-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.145",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "timestamp-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.161",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "echo-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.177",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "timestamp-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.193",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "timestamp-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.209",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "echo-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.225",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "timestamp-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.241",
			status: false,
			hostname: [],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "echo-reply",
				reason_ttl: "64",
				state: "up",
			},
		},
		{
			address: "10.20.20.65",
			status: false,
			hostname: [
				{
					name: "_gateway",
					type: "PTR",
				},
			],
			macaddress: {
				addr: "00:23:FA:30:08:C1",
				addrtype: "mac",
				vendor: "RG Nets",
			},
			osmatch: {},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
		},
		{
			address: "10.20.20.72",
			status: false,
			hostname: [],
			macaddress: {
				addr: "28:33:34:B1:60:CE",
				addrtype: "mac",
			},
			osmatch: {},
			ports: [],
			state: {
				reason: "arp-response",
				reason_ttl: "0",
				state: "up",
			},
		},
		{
			address: "10.20.20.67",
			status: false,
			hostname: [
				{
					name: "master-desktop",
					type: "PTR",
				},
			],
			macaddress: null,
			osmatch: {},
			ports: [],
			state: {
				reason: "localhost-response",
				reason_ttl: "0",
				state: "up",
			},
		},
	]*/,
	status: "unset",
	message: "",
};
