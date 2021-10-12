/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { OpenSeaAsset, OpenSeaCollection } from 'opensea-js/lib/types';

import CardsGrid from 'components/CardsGrid';
import { SelectItem } from 'components/Select/Select';

import { sortItems, sortOptions } from 'constants/index';

import { getAssets, GetAssetsQuery, getCollections } from 'api';
import { assetsItemsSelector, collectionsItemsSelector } from 'redux/selectors';
import { formatPrice } from 'utils';
import { OpenSeaPort } from 'opensea-js';
import { OpenSeaContext } from 'components/OpenSeaProvider';
import Card from 'components/Card';
import styles from './GalleryScreen.module.scss';
import { setAssets, setPurchasedAssets } from '../../redux/actions';

export type GalleryScreenProps = {
  className?: string;
};

const GalleryScreen: React.FC<GalleryScreenProps> = ({ className }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentCollection, setCurrentCollection] =
    useState<OpenSeaCollection | null>(null);
  const assets = useSelector(assetsItemsSelector);
  const collections = useSelector(collectionsItemsSelector);
  const [loading, setLoading] = useState(false);
  const seaport = useContext(OpenSeaContext);

  const [sortOption, setSortOption] = useState<SelectItem>(sortOptions[0]);

  const handleBuy = (asset: OpenSeaAsset) => {
    // window.open(asset.openseaLink, '_blank');
    history.push(`/buy-card/${asset.tokenId}/${asset.tokenAddress}`);
  };

  useEffect(() => {
    if (seaport) {
      setLoading(true);

      const query: GetAssetsQuery = {
        limit: 50,
        offset: 0,
        ...sortItems[Number(sortOption.value)],
      };

      if (currentCollection) {
        query.collection_slug = currentCollection.slug;
      }

      getAssets(seaport, query)
        .then((responseAssets) => {
          dispatch(setAssets(responseAssets));
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentCollection, dispatch, seaport, sortOption]);

  const filterAssetByCollection = () => {
    if (currentCollection !== null)
      return assets.filter((el) => el.collection === currentCollection);

    return assets;
  };

  return (
    <div className={cn(styles.root, className)}>
      <div className={cn('container', styles.container)}>
        <CardsGrid
          withProgressBar
          collection={currentCollection}
          onChangeCollection={setCurrentCollection}
          loading={loading}
          items={filterAssetByCollection()}
          sortOption={sortOption}
          onChangeSort={setSortOption}
          renderItem={(asset) => {
            return (
              <Card
                key={`${asset.tokenId}/${asset.tokenAddress}`}
                link={`/buy-card/${asset.tokenId}/${asset.tokenAddress}`}
                openseaLink="www.test.com"
                title={asset.name}
                image={asset.imageUrl}
                collection={asset.collection.name}
                available={asset.orders ? asset.orders.length : 0}
                actionName="Buy"
                onAction={() => handleBuy(asset)}
                toolTipText={asset.description}
                priceETH={asset.collection.paymentTokens[0].ethPrice}
                priceUSD={asset.collection.paymentTokens[0].usdPrice}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default GalleryScreen;
