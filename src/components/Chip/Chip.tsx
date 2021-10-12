import React from 'react';
import cn from 'classnames';

import styles from './Chip.module.scss';

export type ChipData = {
  text: string;
  active: boolean;
};

export type ChipProps = {
  className?: string;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

const Chip: React.FC<ChipProps> = ({
  className,
  text,
  active = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.root, className, {
        [styles.active]: active,
      })}
    >
      <p>{text}</p>
    </button>
  );
};

export default Chip;
