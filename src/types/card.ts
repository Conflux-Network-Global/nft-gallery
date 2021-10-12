export type Card = {
  id: string;
  image: string;
  title: string;
  collection: string;
  priceETH: string;
  priceUSD: string;
  openseaLink?: string;
  quantity: number;
};

export type CardItem = Card & {
  cardLink?: string;
  actionName?: string;
};
