interface hostname{
    name: string;
    type: string;
}
interface mac{
    addr: string;
    addrtype: string;
    vendor: string;
}
interface state{
    reason: string;
    reason_ttl: number;
    state: number;
}
export interface network { 
    address: string;
    hostname: Array<hostname>;
    macaddress: mac;
    osmatch: any;
    ports: any;
    state: state;
    status: boolean;
}