import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { StoreState } from 'types/store';

import { assets, wallet, collections } from './reducers';

const rootReducer = combineReducers<StoreState>({
  assets,
  wallet,
  collections,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools());
const persist = persistStore(store);

export { store, persist };
