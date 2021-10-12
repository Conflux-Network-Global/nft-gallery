import { OpenSeaAsset, OpenSeaCollection, Order } from 'opensea-js/lib/types';
import { WalletNames } from './wallet';

export interface WalletState {
  key: WalletNames | null;
  isConnected: boolean;
}

export interface AssetsState {
  items: OpenSeaAsset[];
  orders: { [key: string]: Order[] };
  purchasedItems: OpenSeaAsset[];
  sentItems: OpenSeaAsset[];
}

export interface CollectionsState {
  items: OpenSeaCollection[];
}

export interface StoreState {
  assets: AssetsState;
  collections: CollectionsState;
  wallet: WalletState;
}
