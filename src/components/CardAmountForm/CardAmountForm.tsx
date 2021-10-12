import React, { FormEvent, useState } from 'react';
import cn from 'classnames';

import Button from 'components/Button';
import styles from './CardAmountForm.module.scss';
import SelectNumber from '../SelectNumber';

export type CardAmountFormProps = {
  className?: string;
  maxCount: number;
  priceETH?: string;
  priceUSD?: string;
  buttonLabel: string;
  dark?: boolean;
  onSubmit: (count: number) => void;
};

const CardAmountForm: React.FC<CardAmountFormProps> = ({
  className,
  buttonLabel,
  maxCount,
  priceETH,
  priceUSD,
  onSubmit,
  dark = false,
}) => {
  const [count, setCount] = useState(1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(count);
  };

  // const ethCost = priceETH ? Math.round(count * priceETH * 10000) / 10000 : 0;
  // const usdCost = priceUSD ? Math.round(count * priceUSD * 100) / 100 : 0;

  return (
    <form className={cn(styles.root, className)} onSubmit={handleSubmit}>
      {priceETH && priceUSD && (
        <div className={styles.wrapper}>
          <div className={styles.priceWrapper}>
            <p className={styles.eth}>{(+priceETH * count).toFixed(2)} ETH</p>
            <p className={styles.usd}>${(+priceUSD * count).toFixed(2)}</p>
          </div>
          <div className={styles.countSettings}>
            <SelectNumber
              value={count}
              changeValue={setCount}
              maxValue={maxCount}
              minValue={0}
              dark={dark}
            />
          </div>
        </div>
      )}
      <Button
        type="submit"
        label={buttonLabel}
        className={styles.sendButton}
        variant="primary"
        size="large"
      />
    </form>
  );
};

export default CardAmountForm;
