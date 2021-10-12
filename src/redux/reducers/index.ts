/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
  setAssets,
  setCollection,
  setOrders,
  setPurchasedAssets,
  setSentAssets,
  updateWallet,
} from 'redux/actions';
import { AssetsState, CollectionsState, WalletState } from 'types/store';
import { Order } from 'opensea-js/lib/types';

export const assets = reducerWithInitialState<AssetsState>({
  items: [],
  purchasedItems: [],
  sentItems: [],
  orders: {},
})
  .case(setAssets, (state, payload) => ({
    ...state,
    items: payload.map((i) => ({ ...i, orders: [] })),
  }))
  .case(setPurchasedAssets, (state, payload) => ({
    ...state,
    purchasedItems: payload.map((i) => ({ ...i, orders: [] })),
  }))
  .case(setSentAssets, (state, payload) => ({
    ...state,
    sentItems: payload.map((i) => ({ ...i, orders: [] })),
  }))
  .case(setOrders, (state, payload) => ({
    ...state,
    orders: payload,
  }))
  .build();

export const collections = reducerWithInitialState<CollectionsState>({
  items: [],
})
  .case(setCollection, (state, payload) => ({ ...state, items: payload }))
  .build();

export const wallet = reducerWithInitialState<WalletState>({
  key: null,
  isConnected: false,
})
  .case(updateWallet, (state, payload) => ({ ...state, key: payload }))
  .build();
