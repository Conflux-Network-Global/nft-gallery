/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, ReactElement, useCallback } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

import useEagerConnect from 'hooks/use-eager-connect';
import useInactiveListener from 'hooks/use-inactive-listener';

import { Wallet, WalletNames } from 'types/wallet';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { network } from '../../connectors';
import { Web3ReactManagerProvider } from './context';
import { getErrorMessage } from './utils';
import { useWallet } from './hooks';

export type Web3ReactManagerProps = {
  children: ReactElement;
};

const Web3ReactManager: React.FC<Web3ReactManagerProps> = ({ children }) => {
  const {
    account,
    active,
    error,
    connector,
    library,
    setError,
    activate,
    deactivate,
  } = useWeb3React();

  const { wallet, setWallet } = useWallet();
  const isMetamask = wallet?.key === WalletNames.METAMASK;

  // try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEager = useEagerConnect(wallet);

  // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
  useInactiveListener(!triedEager && !isMetamask);

  // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate it
  useEffect(() => {
    if (triedEager && !active && !error) {
      activate(network);
    }
  }, [activate, active, error, triedEager]);

  useEffect(() => {
    if (!connector && triedEager && wallet) {
      setWallet(null);
    }
  }, [connector, setWallet, triedEager, wallet]);

  const handleConnect = useCallback(
    async (newWallet: Wallet) => {
      try {
        await activate(newWallet.connector, undefined, true);
        setWallet(newWallet);
      } catch (connectionError) {
        if (connectionError instanceof UnsupportedChainIdError) {
          activate(newWallet.connector); // a little janky...can't use setError because the connector isn't set
        } else {
          setWallet(null);
          setError(new Error(getErrorMessage(connectionError as Error)));
        }
      }
    },
    [activate, setError, setWallet],
  );

  const handleDisconnect = useCallback(
    (disconnectedWallet: Wallet) => {
      if (disconnectedWallet.connector instanceof WalletConnectConnector) {
        disconnectedWallet.connector.close();
      }

      deactivate();
      setWallet(null);
    },
    [deactivate, setWallet],
  );

  return (
    <Web3ReactManagerProvider
      value={{
        wallet,
        account,
        active,
        error,
        connector,
        library,
        setError,
        connect: handleConnect,
        disconnect: handleDisconnect,
      }}
    >
      {children}
    </Web3ReactManagerProvider>
  );
};

export default Web3ReactManager;
