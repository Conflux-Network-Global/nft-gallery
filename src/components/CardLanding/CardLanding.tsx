import React from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import Button from 'components/Button';
import styles from './CardLanding.module.scss';

export type CardLandingProps = {
  className?: string;
  ethPrice?: string;
  usdPrice?: string;
  link: string;
};

const BackButton: React.FC<CardLandingProps> = ({
  className,
  ethPrice = '0.5',
  usdPrice = '885.72',
  link = '/',
}) => {
  const history = useHistory();

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.border} />
      <div className={styles.priceContainer}>
        <span className={styles.ethPrice}>{ethPrice}ETH</span>
        <span className={styles.usdPrice}>${usdPrice}</span>
      </div>
      <Button
        label="Buy"
        onClick={() => history.push(link)}
        className={styles.button}
        variant="secondary"
      />
    </div>
  );
};

export default BackButton;
