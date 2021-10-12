import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import ArkaneConnector from './ArkaneConnector';
import { NetworkConnector } from './NetworkConnector';

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
}

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL;

export const NETWORK_CHAIN_ID: number = parseInt(
  process.env.REACT_APP_CHAIN_ID ?? '1',
  10,
);

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(
    `REACT_APP_NETWORK_URL must be a defined environment variable`,
  );
}

export enum Connectors {
  Injected = 'Injected',
  Network = 'Network',
  WalletConnect = 'WalletConnect',
  Arkane = 'Arkane',
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL },
});

export const injected = new InjectedConnector({
  supportedChainIds: [
    ChainId.MAINNET,
    ChainId.ROPSTEN,
    ChainId.RINKEBY,
    ChainId.GÖRLI,
    ChainId.KOVAN,
  ],
});

// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: {
    [Number(process.env.REACT_APP_CHAIN_ID)]: NETWORK_URL,
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 30000,
});

export const arkane = new ArkaneConnector({
  clientId: process.env.REACT_APP_ARKANE_CLIENT_ID || 'Arketype',
  environment: 'staging',
  signMethod: 'POPUP',
  windowMode: 'POPUP',
  pollingInterval: 30000,
  skipAuthentication: false,
});
