/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import cn from 'classnames';

import SvgIcon from 'components/SvgIcon';
import styles from './CardGetCard.module.scss';

export type CardGetCardProps = {
  className?: string;
  onClick?: () => void;
};

const CardGetCard: React.FC<CardGetCardProps> = ({ className, onClick }) => {
  return (
    <button
      type="button"
      className={cn(styles.root, className)}
      onClick={onClick}
    >
      <SvgIcon icon="plus" className={styles.icon} />
      <span className={styles.title}>Get your first card</span>
    </button>
  );
};

export default CardGetCard;
