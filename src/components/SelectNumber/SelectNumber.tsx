import React from 'react';
import cn from 'classnames';

import SvgIcon from 'components/SvgIcon';
import styles from './SelectNumber.module.scss';

export type SelectNumberProps = {
  className?: string;
  value: number;
  minValue: number;
  maxValue: number;
  dark?: boolean;
  changeValue: (value: number) => void;
};

const SelectNumber: React.FC<SelectNumberProps> = ({
  className,
  value,
  minValue,
  maxValue,
  dark,
  changeValue,
}) => {
  return (
    <div className={cn(styles.root, { [styles.dark]: dark }, className)}>
      <button
        type="button"
        className={cn(styles.countButton, {
          [styles.disabled]: value <= 1,
        })}
        disabled={value <= 1}
        onClick={() => {
          changeValue(value - 1);
        }}
      >
        <SvgIcon icon="minus" />
      </button>
      <input
        type="number"
        className={styles.input}
        value={value}
        max={maxValue}
        min={minValue}
        onChange={(e) => {
          const number = Number(e.currentTarget.value);

          if (number > maxValue) {
            changeValue(maxValue);
          } else if (number < minValue) {
            changeValue(minValue);
          } else {
            changeValue(number);
          }
        }}
      />
      <button
        type="button"
        className={cn(styles.countButton, {
          [styles.disabled]: value === maxValue,
        })}
        disabled={value === maxValue}
        onClick={() => {
          changeValue(value + 1);
        }}
      >
        <SvgIcon icon="plus" />
      </button>
    </div>
  );
};

export default SelectNumber;
