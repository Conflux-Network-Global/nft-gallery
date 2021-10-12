import React, { useCallback } from 'react';

import MainNavigator from 'navigation/MainNavigator';
import { ModalProvider } from 'components/Modal';
import OpenSeaProvider from 'components/OpenSeaProvider';
import { OpenSeaPort } from 'opensea-js';
import { getAssets, getCollections } from 'api';
import { useDispatch } from 'react-redux';
import { setAssets, setCollection } from 'redux/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenSeaConnected = useCallback(
    async (seaport: OpenSeaPort) => {
      getAssets(seaport).then((assets) => {
        dispatch(setAssets(assets));
      });
      getCollections(seaport).then((collections) => {
        dispatch(setCollection(collections));
      });
    },
    [dispatch],
  );

  return (
    <OpenSeaProvider onConnected={handleOpenSeaConnected}>
      <ModalProvider>
        <MainNavigator />
      </ModalProvider>
    </OpenSeaProvider>
  );
};

export default App;
