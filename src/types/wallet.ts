import { AbstractConnector } from '@web3-react/abstract-connector';

export enum WalletNames {
  METAMASK = 'METAMASK',
  WALLET_CONNECT = 'WALLET_CONNECT',
  ARKANE = 'ARKANE',
}

export interface Wallet {
  key: WalletNames;
  connector: AbstractConnector;
  name: string;
  icon: string;
  disabled?: boolean;
}
