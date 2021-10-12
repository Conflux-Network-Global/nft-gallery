import React from 'react';
import cn from 'classnames';
import Chip from 'components/Chip';
import { ChipData } from 'components/Chip/Chip';

import styles from './Chips.module.scss';

export type ChipsProps = {
  className?: string;
  chipsArray: ChipData[];
  onChange: (data: ChipData[]) => void;
};

const Chips: React.FC<ChipsProps> = ({ className, chipsArray, onChange }) => {
  const handleClick = (item: ChipData) => {
    const newArray = chipsArray.map((chip) => {
      const newChip = chip;

      if (chip.text === item.text) {
        newChip.active = !chip.active;
      }

      return newChip;
    });

    onChange(newArray);
  };

  const handleReset = () => {
    const newArray = chipsArray.map((chip) => {
      const newChip = chip;

      newChip.active = false;

      return newChip;
    });

    onChange(newArray);
  };

  return (
    <div className={cn(styles.root, className)}>
      <Chip
        text="All types"
        active={!chipsArray.some((item) => item.active)}
        className={styles.chip}
        onClick={handleReset}
      />
      {chipsArray.map((item) => (
        <Chip
          key={`chip-${item.text}`}
          text={item.text}
          active={item.active}
          className={styles.chip}
          onClick={() => {
            handleClick(item);
          }}
        />
      ))}
    </div>
  );
};

export default Chips;
