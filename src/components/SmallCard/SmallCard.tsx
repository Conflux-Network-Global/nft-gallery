/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import Button from 'components/Button';
import SvgIcon from 'components/SvgIcon';
import Tooltip from 'components/Tooltip';
import styles from './SmallCard.module.scss';

export type SmallCardProps = {
  className?: string;
  title: string;
  collection: string;
  image: string;
  available: number;
  priceETH?: number;
  priceUSD?: number;
  link?: string;
  openseaLink?: string;
  actionName?: string;
  toolTipText: string;
  onAction?: () => void;
};

const SmallCard: React.FC<SmallCardProps> = ({
  className,
  title,
  collection,
  image,
  available,
  priceETH,
  priceUSD,
  actionName,
  toolTipText,
  link,
  openseaLink,
  onAction,
}) => {
  const handleAction = () => {
    onAction?.();
  };

  const quantity = available > 99 ? '99+' : available;

  return (
    <div className={cn(styles.root, className)}>
      {/* <Tooltip
        className={styles.toolTip}
        position="bottom"
        triggerElem={<div className={styles.quantity}>{quantity}</div>}
      >
        <p className={styles.tooltipText}>{toolTipText}</p>
      </Tooltip> */}

      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.collectionName}>{collection}</p>
      </div>
      <div className={styles.detailWrapper}>
        <div className={styles.actionWrapper}>
          {!!priceETH && !!priceUSD && (
            <div
              className={cn(styles.priceWrapper, {
                [styles.fullWidth]: !actionName,
              })}
            >
              <p className={styles.ethText}>{`${priceETH} ETH`}</p>
              <p className={styles.usdText}>{`$${priceUSD}`}</p>
            </div>
          )}
          {actionName && (
            <Button
              label={actionName}
              variant="secondary"
              className={styles.button}
              onClick={handleAction}
            />
          )}
        </div>
        {openseaLink && (
          <a
            className={styles.openseaLink}
            href={openseaLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SvgIcon icon="link" size={18} className={styles.linkIcon} />
            View on OpenSea
          </a>
        )}
      </div>
      {link && <Link to={link} className={styles.link} />}
    </div>
  );
};

export default SmallCard;
