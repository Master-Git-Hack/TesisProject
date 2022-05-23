import { bluetooth } from './bt';
import { network } from './network';
interface Properties {
    ble: Array<bluetooth>;
    bt: Array<bluetooth>;
    network: Array<network>;
    status: string;
    message: string;
}
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