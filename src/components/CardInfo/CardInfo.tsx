import React from 'react';
import cn from 'classnames';

import styles from './CardInfo.module.scss';
import Chip from '../Chip';

export type CardInfoProps = {
  className?: string;
  title: string;
  collectionName: string;
  remainText?: string;
  chips: string[];
};

const CardInfo: React.FC<CardInfoProps> = ({
  className,
  title,
  remainText,
  collectionName,
  chips,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.titleWrapper}>
        <div className={styles.cardNameWrapper}>
          <p className={styles.name}>{title}</p>
          {remainText && (
            <span className={styles.remainCount}>{remainText} available</span>
          )}
        </div>
        <p className={styles.collectionName}>{collectionName}</p>
      </div>
      {chips.length > 0 && (
        <div className={styles.chipsWrapper}>
          {chips.map((item) => (
            <Chip key={`chip-${item}`} text={item} className={styles.chips} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardInfo;
