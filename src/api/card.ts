import { Card } from 'types/card';
import { serverPurchasedCards } from 'mock_data/mockData';

// eslint-disable-next-line import/prefer-default-export
export function getCardDetail(): Promise<Card> {
  return Promise.resolve(serverPurchasedCards[0]);
}
