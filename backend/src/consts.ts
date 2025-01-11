import { HexString } from '@gear-js/api/types';

// Const to use in the program
export const NETWORK: string = 'wss://testnet.vara.network'
export const WALLET_NAME: string = '';
export const WALLET_MNEMONIC: string = '';
export const CONTRACT_ID: HexString = '0xe394faef158f507f7a46bf98bc1461ab906db114063e28a4c0880ef102cd6c0e';
export const IDL: string = `
    type TrafficLightEvent = enum {
      Green,
      Yellow,
      Red,
    };

    type IoTrafficLightState = struct {
      current_light: str,
      all_users: vec struct { actor_id, str },
    };

    constructor {
      New : ();
    };

    service TrafficLight {
      Green : () -> TrafficLightEvent;
      Red : () -> TrafficLightEvent;
      Yellow : () -> TrafficLightEvent;
      query TrafficLight : () -> IoTrafficLightState;
    };
`;