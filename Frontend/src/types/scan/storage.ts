import { bluetooth } from './bt';
import { network } from './network';
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
export const initialState:Properties ={
    ble : [
        {
            address:"5D:21:5B:63:2D:34",
            name : "",
            status: false
        },
        {
            address:"7C:A8:E9:44:DA:B2",
            name : "",
            status:false
        }
    ],
    bt : [{
        address:"",
        name: "",
        status:false
    }],
    network : [
        {
            address:"10.20.20.1",
            status:false,
            hostname : [],
            macaddress : null,
            osmatch : {},
            ports : [],
            state : {
                reason : "timestamp-reply",
                reason_ttl : "64",
                state : "up"
            }
            
        },
        {
            address:"10.20.20.17",
            status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "timestamp-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
            address:"10.20.20.33",
            status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "timestamp-reply",
                    reason_ttl : "64",
                    state : "up"
                }
        
        },
        {
            address:"10.20.20.49",
            status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "timestamp-reply",
                    reason_ttl : "64",
                    state : "up"
                }

        },
        {
            address:"10.20.20.81",
            status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
            state: {
                reason: "echo-reply",
                reason_ttl: "64",
                state: "up"
            }
        },
        {
            address: "10.20.20.97",
            status:false,
            hostname : [],
            macaddress : null,
            osmatch : {},
            ports : [],
            state : {
                reason : "echo-reply",
                reason_ttl : "64",
                state : "up"
            }
        },
        {
          address: "10.20.20.113",
          status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "echo-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
            address: "10.20.20.129",
            status:false,
            hostname : [],
            macaddress : null,
            osmatch : {},
            ports : [],
            state : {
                reason : "echo-reply",
                reason_ttl : "64",
                state : "up"
            }
            
        },
        {
          address: "10.20.20.145",
          status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "timestamp-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
          address: "10.20.20.161",
          status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "echo-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
            address: "10.20.20.177",
            status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "timestamp-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
          address: "10.20.20.193",
          status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "timestamp-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
          address: "10.20.20.209",
          status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "echo-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
          address: "10.20.20.225",
          status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "timestamp-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
          address: "10.20.20.241",
          status:false,
                hostname : [],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "echo-reply",
                    reason_ttl : "64",
                    state : "up"
                }
            
        },
        {
          address: "10.20.20.65",
          status:false,
                hostname : [
                    {
                        name : "_gateway",
                        type : "PTR"
                    }
                ],
                macaddress : {
                    addr : "00:23:FA:30:08:C1",
                    addrtype : "mac",
                    vendor : "RG Nets"
                },
                osmatch : {},
                ports : [],
                state : {
                    reason : "arp-response",
                    reason_ttl : "0",
                    state : "up"
                }
            
        },
        {
          address: "10.20.20.72",
          status:false,
                hostname : [],
                macaddress : {
                    addr : "28:33:34:B1:60:CE",
                    addrtype : "mac"
                },
                osmatch : {},
                ports : [],
                state : {
                    reason : "arp-response",
                    reason_ttl : "0",
                    state : "up"
                }
            
        },
        {
          address: "10.20.20.67",
          status:false,
                hostname : [
                    {
                        name : "master-desktop",
                        type : "PTR"
                    }
                ],
                macaddress : null,
                osmatch : {},
                ports : [],
                state : {
                    reason : "localhost-response",
                    reason_ttl : "0",
                    state : "up"
                }
            
        }
    ],
    status: 'unset',
    message: ''
}
