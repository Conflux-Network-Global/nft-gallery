import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Wallet, WalletNames } from 'types/wallet';
import { injected } from '../connectors';

export default function useEagerConnect(wallet: Wallet | null): boolean {
  const { activate, active } = useWeb3React();
  const [tried, setTried] = useState(false);

  useEffect(() => {
    if (!wallet) {
      setTried(true);

      return;
    }

    if (wallet.key !== WalletNames.METAMASK) {
      activate(wallet.connector).finally(() => {
        setTried(true);
      });

      return;
    }

    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else if (isMobile && window.ethereum) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (active) {
      setTried(true);
    }
  }, [active]);

  return tried;
}
