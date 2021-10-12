/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import BackButton from 'components/BackButton';
import CardImage from 'components/CardImage';
import CardInfo from 'components/CardInfo';
import CardAmountForm from 'components/CardAmountForm';
import CardAbout from 'components/CardAbout';
import { useParams } from 'react-router-dom';
import { assetsItemSelector } from 'redux/selectors';
import styles from './BuyCardScreen.module.scss';

export type BuyCardScreenProps = {
  className?: string;
};

const BuyCardScreen: React.FC<BuyCardScreenProps> = ({ className }) => {
  const { tokenAddress, tokenId } = useParams<{
    tokenAddress: string;
    tokenId: string;
  }>();
  const asset = useSelector(assetsItemSelector(tokenAddress, tokenId));
  const maxCount = 204;

  const handleBuy = (count: number) => {
    if (asset) {
      // window.open(asset.openseaLink, '_blank');
    }
  };

  if (!asset) {
    return null;
  }

  return (
    <div className={cn(styles.root, className)}>
      <div className={cn('container', styles.container)}>
        <BackButton name="Back to gallery" link="/gallery" />
        <div className={styles.cardWrapper}>
          <CardImage image={asset.imageUrlOriginal} />
          <div className={styles.infoWrapper}>
            <CardInfo
              title={asset.name}
              collectionName={asset.collection.name}
              remainText="104" // TODO
              chips={[]} // TODO
            />
            <CardAmountForm
              maxCount={maxCount}
              buttonLabel="Buy"
              onSubmit={handleBuy}
              priceETH={asset.collection.paymentTokens[0].ethPrice}
              priceUSD={asset.collection.paymentTokens[0].usdPrice}
              dark
            />
            <CardAbout description={asset.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCardScreen;
