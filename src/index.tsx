import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persist, store } from 'redux/root';

import Web3ReactManager from 'components/Web3ReactManager';

import getLibrary from './utils/getLibrary';
import reportWebVitals from './reportWebVitals';

import App from './App';

import './styles/index.scss';

if ('ethereum' in window) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window.ethereum as any).autoRefreshOnNetworkChange = false;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Web3ReactManager>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Web3ReactManager>
        </Web3ReactProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
