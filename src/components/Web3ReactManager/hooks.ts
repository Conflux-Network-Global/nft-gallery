/* eslint-disable import/prefer-default-export */
import { SUPPORTED_WALLETS } from 'constants/wallet';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWallet } from 'redux/actions';
import { walletKeySelector } from 'redux/selectors';
import { Wallet } from 'types/wallet';
import {
  Web3ReactManagerContext,
  Web3ReactManagerContextInterface,
} from './context';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useWeb3ReactManager = (): Web3ReactManagerContextInterface<any> =>
  useContext(Web3ReactManagerContext);

export const useWallet = (): {
  wallet: Wallet | null;
  setWallet: (wallet: Wallet | null) => void;
} => {
  const dispatch = useDispatch();
  const walletKey = useSelector(walletKeySelector);
  const [wallet, setWallet] = useState<Wallet | null>(
    walletKey && SUPPORTED_WALLETS[walletKey],
  );

  const handleSetWallet = (newWallet: Wallet | null) => {
    setWallet(newWallet);
    dispatch(updateWallet(newWallet ? newWallet.key : null));
  };

  return {
    wallet,
    setWallet: handleSetWallet,
  };
};
