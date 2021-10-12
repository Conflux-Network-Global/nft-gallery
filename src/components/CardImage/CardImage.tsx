import React, { useState } from 'react';
import cn from 'classnames';

import Loader from 'images/card_loader.svg';
import SvgIcon from '../SvgIcon';

import styles from './CardImage.module.scss';

export type CardImageProps = {
  className?: string;
  image: string;
  link?: string;
};

const CardImage: React.FC<CardImageProps> = ({ className, link, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.imageBorder}>
        <div className={styles.image}>
          <embed
            src={Loader}
            style={{ display: imageLoaded ? 'none' : 'block' }}
            className={styles.loader}
          />
          <img
            src={image}
            alt="card"
            style={{ opacity: imageLoaded ? 1 : 0 }}
            onLoad={() => {
              setImageLoaded(true);
            }}
          />
        </div>
      </div>
      {link && (
        <a href={link} className={styles.cardLink}>
          <SvgIcon icon="link" size={18} className={styles.linkIcon} />
          View on OpenSea
        </a>
      )}
    </div>
  );
};

export default CardImage;
