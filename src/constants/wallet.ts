import { Wallet, WalletNames } from 'types/wallet';
import { arkane, injected, walletconnect } from '../connectors';

export const SUPPORTED_WALLETS: { [key in WalletNames]: Wallet } = {
  [WalletNames.METAMASK]: {
    key: WalletNames.METAMASK,
    connector: injected,
    name: 'MetaMask',
    icon: 'metamask',
  },
  [WalletNames.WALLET_CONNECT]: {
    key: WalletNames.WALLET_CONNECT,
    connector: walletconnect,
    name: 'WalletConnect',
    icon: 'wallet_connect',
  },
  [WalletNames.ARKANE]: {
    key: WalletNames.ARKANE,
    connector: arkane,
    name: 'Arkane',
    icon: 'arkane',
  },
};

export const SUPPORTED_WALLETS_ARRAY = Object.keys(SUPPORTED_WALLETS).map(
  (key) => SUPPORTED_WALLETS[key as WalletNames],
);
