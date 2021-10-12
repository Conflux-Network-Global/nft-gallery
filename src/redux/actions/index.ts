import { OpenSeaAsset, OpenSeaCollection, Order } from 'opensea-js/lib/types';
import { WalletNames } from 'types/wallet';
import actionCreatorFactory from 'typescript-fsa';

const assetsActionCreator = actionCreatorFactory('assets');

export const setAssets = assetsActionCreator<OpenSeaAsset[]>('SET_ASSETS');
export const setOrders =
  assetsActionCreator<{ [key: string]: Order[] }>('SET_ORDERS');
export const setPurchasedAssets = assetsActionCreator<OpenSeaAsset[]>(
  'SET_PURCHASED_ASSETS',
);
export const setSentAssets =
  assetsActionCreator<OpenSeaAsset[]>('SET_SENT_ASSETS');

const collectionsActionCreator = actionCreatorFactory('assets');

export const setCollection =
  collectionsActionCreator<OpenSeaCollection[]>('SET_COLLECTIONS');

const walletActionCreator = actionCreatorFactory('wallet');

export const updateWallet = walletActionCreator<WalletNames | null>(
  'UPDATE_WALLET',
);
