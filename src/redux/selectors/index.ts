import {
  AssetsState,
  CollectionsState,
  StoreState,
  WalletState,
} from 'types/store';
import { createSelector } from 'reselect';

export const assetsSelector = (state: StoreState): AssetsState => state.assets;

export const ordersSelector = createSelector(
  assetsSelector,
  (state) => state.orders,
);

export const assetsItemsSelector = createSelector(
  assetsSelector,
  ordersSelector,
  (state, orders) => {
    return state.items.map((item) => ({
      ...item,
      orders: item.tokenId ? orders[item.tokenId] : [],
    }));
  },
);

export const assetsPurchasedItemsSelector = createSelector(
  assetsSelector,
  ordersSelector,
  (state, orders) => {
    return state.purchasedItems.map((item) => ({
      ...item,
      orders: item.tokenId ? orders[item.tokenId] : [],
    }));
  },
);

export const assetsSentItemsSelector = createSelector(
  assetsSelector,
  ordersSelector,
  (state, orders) => {
    return state.sentItems.map((item) => ({
      ...item,
      orders: item.tokenId ? orders[item.tokenId] : [],
    }));
  },
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const assetsItemSelector = (tokenAddress: string, tokenId: string) =>
  createSelector(assetsItemsSelector, (items) =>
    items.find(
      (item) => item.tokenAddress === tokenAddress && item.tokenId === tokenId,
    ),
  );

export const collectionsSelector = (state: StoreState): CollectionsState =>
  state.collections;

export const collectionsItemsSelector = createSelector(
  collectionsSelector,
  (state) => state.items,
);

export const walletSelector = (state: StoreState): WalletState => state.wallet;
export const walletKeySelector = createSelector(
  walletSelector,
  (state) => state.key,
);
export const isWalletConnectedSelector = createSelector(
  walletSelector,
  (state) => state.isConnected,
);
