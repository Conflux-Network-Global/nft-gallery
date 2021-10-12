import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { injected } from '../connectors';

/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */
export default function useInactiveListener(suppress = false): void {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        activate(injected, undefined, true).catch((connectionError) => {
          // eslint-disable-next-line no-console
          console.error(
            'Failed to activate after chain changed',
            connectionError,
          );
        });
      };

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          activate(injected, undefined, true).catch((connectionError) => {
            // eslint-disable-next-line no-console
            console.error(
              'Failed to activate after accounts changed',
              connectionError,
            );
          });
        }
      };

      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }

    return undefined;
  }, [active, error, suppress, activate]);
}
