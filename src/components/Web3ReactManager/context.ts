import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { createContext } from 'react';
import invariant from 'tiny-invariant';
import { Wallet } from 'types/wallet';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Web3ReactManagerContextInterface<T extends any> = Omit<
  Web3ReactContextInterface<T>,
  'activate' | 'deactivate'
> & {
  wallet: Wallet | null;
  connect: (wallet: Wallet) => void;
  disconnect: (wallet: Wallet) => void;
};

export const Web3ReactManagerContext = createContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Web3ReactManagerContextInterface<any>
>({
  connect: async () => {
    invariant(false, 'No <Web3ReactManagerProvider ... /> found.');
  },
  disconnect: () => {
    invariant(false, 'No <Web3ReactManagerProvider ... /> found.');
  },
  setError: () => {
    invariant(false, 'No <Web3ReactManagerProvider ... /> found.');
  },
  wallet: null,
  active: false,
});

export const Web3ReactManagerProvider = Web3ReactManagerContext.Provider;
