/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import Button from 'components/Button';
import SvgIcon from 'components/SvgIcon';
import Tooltip from 'components/Tooltip';
import Loader from 'images/card_loader.svg';

import styles from './Card.module.scss';

export type CardProps = {
  className?: string;
  title: string;
  collection: string;
  image: string;
  available: number;
  priceETH?: string | undefined;
  priceUSD?: string | undefined;
  link?: string;
  openseaLink?: string;
  actionName?: string;
  toolTipText: string;
  variant?:
    | 'gallery-initial'
    | 'gallery-secondary'
    | 'profile-initial'
    | 'profile-secondary';
  onAction?: () => void;
};

const CardGallery: React.FC<CardProps> = ({
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
  variant = 'gallery-initial',
  onAction,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleAction = () => {
    onAction?.();
  };

  const quantity = available > 99 ? '99+' : available;

  return (
    <div className={cn(styles.root, styles[variant], className)}>
      <Tooltip
        className={styles.toolTip}
        position="bottom"
        triggerElem={<div className={styles.quantity}>{quantity}</div>}
      >
        <p className={styles.tooltipText}>{toolTipText}</p>
      </Tooltip>

      <div className={styles.imageWrapper}>
        {link && <Link to={link} className={styles.link} />}
        <embed
          src={Loader}
          style={{ display: imageLoaded ? 'none' : 'block' }}
          className={styles.loader}
        />
        <img
          src={image}
          alt={title}
          style={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => {
            setImageLoaded(true);
          }}
        />
      </div>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.collectionName}>{collection}</p>
      </div>
      <div className={styles.bottom}>
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
          {(variant === 'gallery-secondary' ||
            variant === 'profile-secondary') &&
            openseaLink && (
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
      </div>
    </div>
  );
};

export default CardGallery;
