/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { OpenSeaPort, Network } from 'opensea-js';
import { useWeb3ReactManager } from 'components/Web3ReactManager';

export const OpenSeaContext = createContext<OpenSeaPort | null>(null);

type OpenSeaProviderProps = {
  onConnected: (seaport: OpenSeaPort) => void;
};

const OpenSeaProvider: React.FC<OpenSeaProviderProps> = ({
  children,
  onConnected,
}) => {
  const { library, account } = useWeb3ReactManager();
  const [seaport, setSeaport] = useState<OpenSeaPort | null>(null);

  useEffect(() => {
    if (!library || !library?.provider) return;

    const newSeaport = new OpenSeaPort(library.provider, {
      apiKey: '8a8c9bf885f547958e6121c486143df3',
      networkName: Network.Main,
      // apiBaseUrl: 'https://rinkeby-api.opensea.io/api/v1/',
    });

    setSeaport(newSeaport);
    onConnected(newSeaport);
  }, [library, account, onConnected]);

  return (
    <OpenSeaContext.Provider value={seaport}>
      {children}
    </OpenSeaContext.Provider>
  );
};

export default OpenSeaProvider;
