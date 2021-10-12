import { SelectItem } from 'components/Select/Select';
import { OrderOptions } from '../api';

export const CONNECTED_WALLET_KEY = '__PP_CONNECTED_WALLET';
export const METAMASK_DISCONECTED_KEY = '__PP_DISCONNECTED_KEY';

export const sortItems = [
  {
    order_by: OrderOptions.saleDate,
  },
  {
    order_by: OrderOptions.tokenId,
  },
  {
    order_by: OrderOptions.salePrice,
    order_direction: 'asc',
  },
];
export const sortOptions: SelectItem[] = [
  {
    name: 'Recently Sold',
    value: '0',
  },
  {
    name: 'Recently Created',
    value: '1',
  },
  {
    name: 'Low to High',
    value: '2',
    type: 'Price:',
  },
];
