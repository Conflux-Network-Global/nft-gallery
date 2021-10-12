/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { assetMock, collectionsMock } from 'mock_data/mockData';
import { OpenSeaPort } from 'opensea-js';
import {
  OpenSeaAsset,
  OpenSeaCollection,
  Order,
  OrderSide,
} from 'opensea-js/lib/types';
import { collectionFromJSON, orderFromJSON } from 'opensea-js/lib/utils/utils';
import { isNotEmpty } from 'utils';
import Cache from './Cache';

const cache = new Cache(30000);

type GetOrdersByTokenIdsQuery = {
  ids: string[];
  limit: 50;
};

type MapOrders = { [key: string]: Order[] };

export const getOrdersByTokenIds = async (
  seaport: OpenSeaPort,
  { ids }: GetOrdersByTokenIdsQuery,
): Promise<MapOrders> => {
  const cacheKey = `/wyvern/v1/orders/${JSON.stringify(ids)}`;
  const items = cache.get<MapOrders>(cacheKey);

  if (isNotEmpty(items)) {
    return items;
  }

  const promises = ids.map((id) => {
    return seaport.api
      .get('/wyvern/v1/orders', {
        side: OrderSide.Sell,
        token_id: id,
        owner: process.env.REACT_APP_OPENSEA_OWNER,
        limit: 50,
        offset: 0,
        sale_kind: 0,
        taker: '0x0000000000000000000000000000000000000000',
        order_by: 'eth_price',
        order_direction: 'asc',
      })
      .then(({ orders = [] }) => {
        const newOrders = orders.map((i: any) => orderFromJSON(i)) as Order[];

        return newOrders;
      })
      .catch(() => {
        return [];
      });
  });

  return Promise.all(promises).then((arrayOrders) => {
    const mapOrders = arrayOrders.reduce((result: MapOrders, orders) => {
      const firstOrder = orders[0];

      if (firstOrder && firstOrder.asset && firstOrder.asset?.tokenId) {
        // eslint-disable-next-line no-param-reassign
        result[firstOrder.asset.tokenId] = orders;
      }

      return result;
    }, {});

    return mapOrders;
  });
};

export enum OrderOptions {
  tokenId = 'pk', // TODO 'token_id' replaced by 'pk' as server do not support 'token_id'
  saleDate = 'sale_date',
  salePrice = 'sale_price',
}

export type GetAssetsQuery = {
  owner?: string;
  offset: number;
  limit: number;
  token_ids?: number[];
  // eslint-disable-next-line camelcase
  order_by?: OrderOptions;
  collection_slug?: string;
};

export const getAssets = async (
  seaport: OpenSeaPort,
  query: GetAssetsQuery = {
    offset: 0,
    limit: 50,
    // order_by: OrderOptions.saleDate, // TODO not exist in events api call (error)
  },
): Promise<OpenSeaAsset[]> => {
  const cacheKey = `/assets/${JSON.stringify(query)}`;
  const items = cache.get<OpenSeaAsset[]>(cacheKey);

  if (isNotEmpty(items)) {
    return items;
  }

  return seaport.api
    .getAssets({
      owner: process.env.REACT_APP_OPENSEA_OWNER,
      asset_contract_address: process.env.REACT_APP_SMART_CONTRACT_ADDRESS,
      ...query,
    })
    .then(async ({ assets: openSeaAssets }) => {
      const tokenIds = openSeaAssets
        .map((assets) => assets.tokenId || '')
        .filter(isNotEmpty);

      const orders = await getOrdersByTokenIds(seaport, {
        ids: tokenIds,
        limit: 50,
      });

      const assettsWithOrders = assetMock.map((i) => ({
        ...i,
        orders: orders[i.tokenId || ''] || [],
      }));

      cache.put(cacheKey, assettsWithOrders);

      return assettsWithOrders.map((i) => ({
        ...i,
        imageUrl: i.imageUrl.replace('=s250', ''),
      }));
    });
};

export type GetCollectionsQuery = {
  asset_owner?: string;
  offset: number;
  limit: number;
};

export const getCollections = async (
  seaport: OpenSeaPort,
  query: GetCollectionsQuery = {
    offset: 0,
    limit: 50,
  },
): Promise<OpenSeaCollection[]> => {
  const cacheKey = `/api/v1/collections/${JSON.stringify(query)}`;
  const items = cache.get<OpenSeaCollection[]>(cacheKey);

  if (isNotEmpty(items)) {
    return items;
  }

  return seaport.api
    .get('/api/v1/collections', {
      asset_owner: process.env.REACT_APP_OPENSEA_OWNER,
      ...query,
    })
    .then((data) => {
      // const collections = (data.collections || data).map(collectionFromJSON);
      const collections = collectionsMock; // TODO uncomment above line and delete current line

      cache.put(cacheKey, collections);

      return collections;
    });
};

export type GetTransferedCardsQuery = {
  accountAddress: string;
  offset: number;
  limit: number;
  // eslint-disable-next-line camelcase
  // order_by: OrderOptions; // TODO not exist in events api call (error)
  collection_slug?: string;
};

export const getTransferedCards = async (
  seaport: OpenSeaPort,
  { accountAddress, ...restQuery }: GetTransferedCardsQuery,
): Promise<OpenSeaAsset[]> => {
  const ids = await seaport.api
    .get('/api/v1/events', {
      event_type: 'transfer',
      ...restQuery,
      asset_contract_address: process.env.REACT_APP_SMART_CONTRACT_ADDRESS,
      account_address: accountAddress,
    })
    .then(({ asset_events: assetEvents }: any) =>
      assetEvents.map((assetEvent: any) => assetEvent.asset.token_id),
    );

  return getAssets(seaport, {
    ...restQuery,
    owner: accountAddress,
    token_ids: ids,
  });
};

export type GetPurchasedCardsQuery = {
  accountAddress: string;
  offset: number;
  limit: number;
};

export type TransferTokenParams = {
  tokenId: string;
  tokenAddress: string;
  fromAddress: string;
  toAddress: string;
  quantity: number;
};

export const transferToken = async (
  seaport: OpenSeaPort,
  {
    tokenId,
    tokenAddress,
    fromAddress,
    toAddress,
    quantity,
  }: TransferTokenParams,
): Promise<string> => {
  const transactionHash = await seaport.transfer({
    asset: { tokenId, tokenAddress },
    fromAddress, // Must own the asset
    toAddress,
    quantity,
  });

  return transactionHash;
};
