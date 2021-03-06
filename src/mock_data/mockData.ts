import {
  AssetContractType,
  OpenSeaAsset,
  OpenSeaAssetContract,
  WyvernSchemaName,
} from 'opensea-js/lib/types';
import card1 from 'images/card1.png';
import card2 from 'images/card2.png';
import card3 from 'images/card3.png';
import card4 from 'images/card4.png';
import card5 from 'images/card5.png';
import card6 from 'images/card6.png';
import card7 from 'images/card7.png';
import card8 from 'images/card8.png';
import card9 from 'images/card9.png';
import card10 from 'images/card10.png';
import card11 from 'images/card11.png';
import card12 from 'images/card12.png';
import card13 from 'images/card13.png';
import card14 from 'images/card14.png';
import { SelectItem } from '../components/Select/Select';
import { ChipData } from '../components/Chip/Chip';
import { CardItem } from '../types/card';

export const progressPhasesMock = [
  {
    cardsToSell: 1000,
    cardsSold: 1000,
    priceETH: '0.1',
    endTimestamp: 1633705130573,
  },
  {
    cardsToSell: 2000,
    cardsSold: 2000,
    priceETH: '0.3',
    endTimestamp: 1633705130573,
  },
  {
    cardsToSell: 3000,
    cardsSold: 1987,
    priceETH: '0.5',
    endTimestamp: 1634397863000,
  },
  { cardsToSell: 0, cardsSold: 0, priceETH: '0', endTimestamp: 0 },
  { cardsToSell: 0, cardsSold: 0, priceETH: '0', endTimestamp: 0 },
  { cardsToSell: 0, cardsSold: 0, priceETH: '0', endTimestamp: 0 },
];

export const collectionsList: SelectItem[] = [
  {
    name: 'All',
    value: '1',
  },
  {
    name: 'Washington',
    value: '2',
  },
  {
    name: 'Hawaii',
    value: '3',
  },
];
export const sortingList: SelectItem[] = [
  {
    name: 'Recently Sold',
    value: '1',
  },
  {
    name: 'Recently Created',
    value: '2',
  },
  {
    name: 'Low to High',
    value: '3',
    type: 'Price:',
  },
];

export const serverChipsArray: ChipData[] = [
  {
    text: 'Fire',
    active: false,
  },
  {
    text: 'Water',
    active: false,
  },
  {
    text: 'Ice',
    active: false,
  },
  {
    text: 'Earth',
    active: false,
  },
];

export const serverGalleryCards: CardItem[] = [
  {
    id: '1',
    image:
      'https://avatanplus.com/files/resources/original/56b34b8a4bb07152ac5f1446.png',
    title: 'Moonbeam',
    collection: 'Collection Name',
    priceETH: '0.5',
    priceUSD: '885.72',
    cardLink: '/buy-card/1',
    actionName: 'Buy',
    quantity: 10,
  },
];

export const serverPurchasedCards: CardItem[] = [
  {
    id: '1',
    image:
      'https://avatanplus.com/files/resources/original/56b34b8a4bb07152ac5f1446.png',
    title: 'Moonbeam',
    collection: 'Collection Name',
    priceETH: '0.5',
    priceUSD: '885.72',
    cardLink: '/send-card/1',
    actionName: 'Send',
    quantity: 10,
  },
];

export const serverSentCards: CardItem[] = [
  {
    id: '1',
    image:
      'https://avatanplus.com/files/resources/original/56b34b8a4bb07152ac5f1446.png',
    title: 'Moonbeam',
    collection: 'Collection Name',
    priceETH: '0.5',
    priceUSD: '885.72',
    quantity: 10,
  },
];

export const collectionsMock = [
  {
    name: 'Bolivia',
    slug: 'bolivia',
    editors: ['Person One', 'Person Two'],
    hidden: false,
    featured: true,
    createdDate: new Date('2021-10-03T00:30:00'),
    description: 'Collection description',
    imageUrl: '',
    largeImageUrl: '',
    featuredImageUrl: '',
    stats: {},
    displayData: {},
    paymentTokens: [
      {
        imageUrl: '',
        ethPrice: '0.4',
        usdPrice: '884.15',
        name: 'test',
        symbol: 'test',
        decimals: 1,
        address: 'Florida, USA',
      },
    ],
    payoutAddress: 'Florida, USA',
    traitStats: { price: { min: 1, max: 100 } },
    externalLink: 'www.external-link.com',
    wikiLink: 'www.wikilink.com',
    openseaSellerFeeBasisPoints: 1,
    openseaBuyerFeeBasisPoints: 9,
    devSellerFeeBasisPoints: 5,
    devBuyerFeeBasisPoints: 3,
  },
  {
    name: 'Brazil',
    slug: 'brazil',
    editors: ['Person One', 'Person Two'],
    hidden: false,
    featured: true,
    createdDate: new Date('2021-10-03T00:30:00'),
    description: 'Collection description',
    imageUrl: '',
    largeImageUrl: '',
    featuredImageUrl: '',
    stats: {},
    displayData: {},
    paymentTokens: [
      {
        imageUrl: '',
        ethPrice: '0.55',
        usdPrice: '894.36',
        name: 'test',
        symbol: 'test',
        decimals: 1,
        address: 'Florida, USA',
      },
    ],
    payoutAddress: 'Florida, USA',
    traitStats: { price: { min: 1, max: 100 } },
    externalLink: 'www.external-link.com',
    wikiLink: 'www.wikilink.com',
    openseaSellerFeeBasisPoints: 1,
    openseaBuyerFeeBasisPoints: 9,
    devSellerFeeBasisPoints: 5,
    devBuyerFeeBasisPoints: 3,
  },
  {
    name: 'Costa Rica',
    slug: 'costa-rica',
    editors: ['Person One', 'Person Two'],
    hidden: false,
    featured: true,
    createdDate: new Date('2021-10-03T00:30:00'),
    description: 'Collection description',
    imageUrl: '',
    largeImageUrl: '',
    featuredImageUrl: '',
    stats: {},
    displayData: {},
    paymentTokens: [
      {
        imageUrl: '',
        ethPrice: '0.5',
        usdPrice: '864.45',
        name: 'test',
        symbol: 'test',
        decimals: 1,
        address: 'Florida, USA',
      },
    ],
    payoutAddress: 'Florida, USA',
    traitStats: { price: { min: 1, max: 100 } },
    externalLink: 'www.external-link.com',
    wikiLink: 'www.wikilink.com',
    openseaSellerFeeBasisPoints: 1,
    openseaBuyerFeeBasisPoints: 9,
    devSellerFeeBasisPoints: 5,
    devBuyerFeeBasisPoints: 3,
  },
  {
    name: 'Ecuador',
    slug: 'ecuador',
    editors: ['Person One', 'Person Two'],
    hidden: false,
    featured: true,
    createdDate: new Date('2021-10-03T00:30:00'),
    description: 'Collection description',
    imageUrl: '',
    largeImageUrl: '',
    featuredImageUrl: '',
    stats: {},
    displayData: {},
    paymentTokens: [
      {
        imageUrl: '',
        ethPrice: '0.3',
        usdPrice: '564.11',
        name: 'test',
        symbol: 'test',
        decimals: 1,
        address: 'Florida, USA',
      },
    ],
    payoutAddress: 'Florida, USA',
    traitStats: { price: { min: 1, max: 100 } },
    externalLink: 'www.external-link.com',
    wikiLink: 'www.wikilink.com',
    openseaSellerFeeBasisPoints: 1,
    openseaBuyerFeeBasisPoints: 9,
    devSellerFeeBasisPoints: 5,
    devBuyerFeeBasisPoints: 3,
  },
  {
    name: 'Guatemala',
    slug: 'guatemala',
    editors: ['Person One', 'Person Two'],
    hidden: false,
    featured: true,
    createdDate: new Date('2021-10-03T00:30:00'),
    description: 'Collection description',
    imageUrl: '',
    largeImageUrl: '',
    featuredImageUrl: '',
    stats: {},
    displayData: {},
    paymentTokens: [
      {
        imageUrl: '',
        ethPrice: '0.45',
        usdPrice: '786.10',
        name: 'test',
        symbol: 'test',
        decimals: 1,
        address: 'Florida, USA',
      },
    ],
    payoutAddress: 'Florida, USA',
    traitStats: { price: { min: 1, max: 100 } },
    externalLink: 'www.external-link.com',
    wikiLink: 'www.wikilink.com',
    openseaSellerFeeBasisPoints: 1,
    openseaBuyerFeeBasisPoints: 9,
    devSellerFeeBasisPoints: 5,
    devBuyerFeeBasisPoints: 3,
  },
  {
    name: 'Peru',
    slug: 'peru',
    editors: ['Person One', 'Person Two'],
    hidden: false,
    featured: true,
    createdDate: new Date('2021-10-03T00:30:00'),
    description: 'Collection description',
    imageUrl: '',
    largeImageUrl: '',
    featuredImageUrl: '',
    stats: {},
    displayData: {},
    paymentTokens: [
      {
        imageUrl: '',
        ethPrice: '0.52',
        usdPrice: '884.66',
        name: 'test',
        symbol: 'test',
        decimals: 1,
        address: 'Florida, USA',
      },
    ],
    payoutAddress: 'Florida, USA',
    traitStats: { price: { min: 1, max: 100 } },
    externalLink: 'www.external-link.com',
    wikiLink: 'www.wikilink.com',
    openseaSellerFeeBasisPoints: 1,
    openseaBuyerFeeBasisPoints: 9,
    devSellerFeeBasisPoints: 5,
    devBuyerFeeBasisPoints: 3,
  },
  {
    name: 'Belize',
    slug: 'belize',
    editors: ['Person One', 'Person Two'],
    hidden: false,
    featured: true,
    createdDate: new Date('2021-10-03T00:30:00'),
    description: 'Collection description',
    imageUrl: '',
    largeImageUrl: '',
    featuredImageUrl: '',
    stats: {},
    displayData: {},
    paymentTokens: [
      {
        imageUrl: '',
        ethPrice: '0.44',
        usdPrice: '800.00',
        name: 'test',
        symbol: 'test',
        decimals: 1,
        address: 'Florida, USA',
      },
    ],
    payoutAddress: 'Florida, USA',
    traitStats: { price: { min: 1, max: 100 } },
    externalLink: 'www.external-link.com',
    wikiLink: 'www.wikilink.com',
    openseaSellerFeeBasisPoints: 1,
    openseaBuyerFeeBasisPoints: 9,
    devSellerFeeBasisPoints: 5,
    devBuyerFeeBasisPoints: 3,
  },
];

export const assetMock: OpenSeaAsset[] = [
  {
    tokenId: 'qqw1234fef5125',
    tokenAddress: 'buy',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card1,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[0],
    name: 'Jim Beam DAO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card1,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card1,
    imagePreviewUrl: card1,
    imageUrlOriginal: card1,
    imageUrlThumbnail: card1,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '12wqewqhj34r5',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: '',
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[1],
    name: 'Darwina',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card2,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card2,
    imagePreviewUrl: card2,
    imageUrlOriginal: card2,
    imageUrlThumbnail: card2,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '12346wqwrfdrgh',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
      tokenSymbol: 'ETH',
      imageUrl: '',
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[2],
    name: 'Crab Network',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card3,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card3,
    imagePreviewUrl: card3,
    imageUrlOriginal: card3,
    imageUrlThumbnail: card3,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '1412qwef2qwgb31244',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card4,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[3],
    name: 'Moonbeam',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card5,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card5,
    imagePreviewUrl: card5,
    imageUrlOriginal: card5,
    imageUrlThumbnail: card5,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '14qwqweh000eq2f3f24',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card6,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[4],
    name: 'Plasm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card6,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card6,
    imagePreviewUrl: card6,
    imageUrlOriginal: card6,
    imageUrlThumbnail: card6,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },

  {
    tokenId: '1q24dasdaw23f24',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card7,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[5],
    name: 'Bond Protect',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card7,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card7,
    imagePreviewUrl: card7,
    imageUrlOriginal: card7,
    imageUrlThumbnail: card7,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '14qweqw444eq23f24',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card8,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[6],
    name: 'Bond Swap',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card8,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card8,
    imagePreviewUrl: card8,
    imageUrlOriginal: card8,
    imageUrlThumbnail: card8,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },

  {
    tokenId: '1411fee1g23f24',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card9,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[2],
    name: 'Evolution',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card9,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card9,
    imagePreviewUrl: card9,
    imageUrlOriginal: card9,
    imageUrlThumbnail: card9,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '552vdg241254ff24',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card10,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[4],
    name: 'Force',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card10,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card10,
    imagePreviewUrl: card10,
    imageUrlOriginal: card10,
    imageUrlThumbnail: card10,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '1qgqwfbjmm245wq4',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card11,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[0],
    name: 'Hello DAO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card11,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card11,
    imagePreviewUrl: card11,
    imageUrlOriginal: card11,
    imageUrlThumbnail: card11,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '11ccfqwe23gbq4',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card12,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[4],
    name: 'Grace DAO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card12,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card12,
    imagePreviewUrl: card12,
    imageUrlOriginal: card12,
    imageUrlThumbnail: card12,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '13wq587qwe23gbq4',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card13,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[2],
    name: 'Mantra DAO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card13,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card13,
    imagePreviewUrl: card13,
    imageUrlOriginal: card13,
    imageUrlThumbnail: card13,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
  {
    tokenId: '14zz1hqwe23gbq4',
    tokenAddress: 'token address',
    assetContract: {
      name: 'Test',
      address: 'Test address',
      type: 'fungible' as AssetContractType,
      schemaName: 'ERC20' as WyvernSchemaName,
      sellerFeeBasisPoints: 1,
      buyerFeeBasisPoints: 1,
      description: 'Contract description',
      tokenSymbol: 'ETH',
      imageUrl: card14,
      externalLink: 'www.test-external-link.com',
      wikiLink: 'www.wiki-link.com',
      openseaSellerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 2,
    } as OpenSeaAssetContract,
    collection: collectionsMock[1],
    name: 'Washington',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan risus eget arcu dolor, placerat tortor donec. Volutpat viverra nunc fringilla non lacus tellus dolor facilisis sit. Amet molestie in nullam quam quis dictum. Viverra varius vitae gravida tempus id vitae lacus, sed.',
    owner: {
      address: 'owner address',
      config: 'test',
      profileImgUrl: card14,
      user: null,
    },
    orders: null,
    buyOrders: null,
    sellOrders: null,
    isPresale: true,
    imageUrl: card14,
    imagePreviewUrl: card14,
    imageUrlOriginal: card14,
    imageUrlThumbnail: card14,
    openseaLink: 'opensea-link',
    externalLink: 'external-link',
    traits: [{ price: { min: 1, max: 100 } }],
    numSales: 5,
    lastSale: null,
    backgroundColor: 'red',
    transferFee: '5',
    transferFeePaymentToken: null,
  },
];
