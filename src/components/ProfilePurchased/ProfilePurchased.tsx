/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import CardsGrid from 'components/CardsGrid';

import { OpenSeaAsset, OpenSeaCollection } from 'opensea-js/lib/types';

import { sortOptions, sortItems } from 'constants/index';
import { SelectItem } from 'components/Select';
import { formatPrice } from 'utils';
import { useModal } from 'components/Modal/useModal';
import SendCardModal from 'components/SendCardModal';
import { useDispatch, useSelector } from 'react-redux';
import { assetsPurchasedItemsSelector } from 'redux/selectors';
import { useWeb3ReactManager } from 'components/Web3ReactManager';
import CardGetCard from 'components/CardGetCard';
import Card from 'components/Card';
import styles from './ProfilePurchased.module.scss';
import { getAssets, GetAssetsQuery, transferToken } from '../../api';
import { setPurchasedAssets } from '../../redux/actions';
import { OpenSeaContext } from '../OpenSeaProvider';

export type ProfilePurchasedProps = {
  className?: string;
};

const ProfilePurchased: React.FC<ProfilePurchasedProps> = ({ className }) => {
  const seaport = useContext(OpenSeaContext);
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState<SelectItem>(sortOptions[0]);
  const cards = useSelector(assetsPurchasedItemsSelector);
  const [sendCardData, setSendCardData] = useState<OpenSeaAsset | null>(null);
  const { account } = useWeb3ReactManager();
  const [currentCollection, setCurrentCollection] =
    useState<OpenSeaCollection | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTransfer = (address: string, quantity: number) => {
    if (!seaport || !sendCardData || !account) return;

    transferToken(seaport, {
      tokenId: sendCardData.tokenId || '',
      tokenAddress: sendCardData.tokenAddress,
      fromAddress: account,
      toAddress: address,
      quantity,
    });
  };

  const [showSendCardModal, hideSendCardModal] = useModal(() => {
    const order = sendCardData?.orders && sendCardData?.orders[0];

    return (
      <SendCardModal
        collectionName={sendCardData?.collection.name}
        image={sendCardData?.imagePreviewUrl}
        cardName={sendCardData?.name}
        availableQuantity={
          sendCardData?.orders ? sendCardData.orders.length : 0
        }
        priceETH={sendCardData?.collection.paymentTokens[0].ethPrice}
        priceUSD={sendCardData?.collection.paymentTokens[0].usdPrice}
        onClose={hideSendCardModal}
        onSend={handleTransfer}
      />
    );
  });

  const handleSendCard = (item: OpenSeaAsset) => {
    setSendCardData(item);
    showSendCardModal();
  };

  useEffect(() => {
    if (seaport && account) {
      setLoading(true);

      const query: GetAssetsQuery = {
        owner: account,
        limit: 50,
        offset: 0,
        ...sortItems[Number(sortOption.value)],
      };

      if (currentCollection) {
        query.collection_slug = currentCollection.slug;
      }

      getAssets(seaport, query).then((responseAssets) => {
        dispatch(setPurchasedAssets(responseAssets));
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
      {cards.length === 0 && (
        <Link to="/gallery" className={styles.galleryLink}>
          <CardGetCard />
        </Link>
      )}
      {cards.length > 0 && (
        <CardsGrid
          collection={currentCollection}
          onChangeCollection={setCurrentCollection}
          loading={loading}
          sortOption={sortOption}
          items={filterAssetByCollection()}
          onChangeSort={setSortOption}
          renderItem={(asset) => {
            return (
              <Card
                key={`${asset.tokenId}/${asset.tokenAddress}`}
                link={`/send-card/${asset.tokenId}/${asset.tokenAddress}`}
                title={asset.name}
                image={asset.imagePreviewUrl}
                collection={asset.collection.name}
                available={asset.orders ? asset.orders.length : 0}
                priceETH={asset.collection.paymentTokens[0].ethPrice}
                priceUSD={asset.collection.paymentTokens[0].usdPrice}
                openseaLink={asset.openseaLink}
                actionName="Send"
                toolTipText="Number of purchased copies"
                onAction={() => handleSendCard(asset)}
                variant="profile-initial"
              />
            );
          }}
        />
      )}
    </div>
  );
};

export default ProfilePurchased;
