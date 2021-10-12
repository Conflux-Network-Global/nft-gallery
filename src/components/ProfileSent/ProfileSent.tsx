/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';

import CardsGrid from 'components/CardsGrid';
import { sortOptions } from 'constants/index';
import { SelectItem } from 'components/Select';
import { useDispatch, useSelector } from 'react-redux';
import { assetsSentItemsSelector } from 'redux/selectors';
import { OpenSeaCollection } from 'opensea-js/lib/types';
import Card from 'components/Card';
import { GetTransferedCardsQuery, getTransferedCards } from 'api';
import { setSentAssets } from 'redux/actions';
import { OpenSeaContext } from '../OpenSeaProvider';
import { useWeb3ReactManager } from '../Web3ReactManager';

import styles from './ProfileSent.module.scss';

export type ProfileSentProps = {
  className?: string;
};

const ProfileSent: React.FC<ProfileSentProps> = ({ className }) => {
  const seaport = useContext(OpenSeaContext);
  const dispatch = useDispatch();
  const { account } = useWeb3ReactManager();
  const cards = useSelector(assetsSentItemsSelector);
  const [sortOption, setSortOption] = useState<SelectItem>(sortOptions[0]);
  const [currentCollection, setCurrentCollection] =
    useState<OpenSeaCollection | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (seaport && account) {
      setLoading(true);

      const query: GetTransferedCardsQuery = {
        accountAddress: account,
        limit: 50,
        offset: 0,
        // ...sortItems[Number(sortOption.value)], //TODO commented as sort_by doesnt exists in even api call
      };

      if (currentCollection) {
        query.collection_slug = currentCollection.slug;
      }

      getTransferedCards(seaport, query).then((assets) => {
        dispatch(setSentAssets(assets));
        setLoading(false);
      });
    }
  }, [account, currentCollection, dispatch, seaport, sortOption]);

  const filterAssetByCollection = () => {
    if (currentCollection !== null)
      return cards.filter((el) => el.collection === currentCollection);

    return cards;
  };

  return (
    <div className={cn(styles.root, className)}>
      {cards.length > 0 && (
        <CardsGrid
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
                title={asset.name}
                image={asset.imagePreviewUrl}
                collection={asset.collection.name}
                available={asset.orders ? asset.orders.length : 0}
                priceETH={asset.collection.paymentTokens[0].ethPrice}
                priceUSD={asset.collection.paymentTokens[0].usdPrice}
                openseaLink={asset.openseaLink}
                toolTipText="Number of sent copies"
                variant="profile-initial"
              />
            );
          }}
        />
      )}
    </div>
  );
};

export default ProfileSent;
