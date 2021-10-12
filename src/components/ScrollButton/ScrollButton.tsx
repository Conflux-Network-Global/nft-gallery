import React, { CSSProperties } from 'react';
import cn from 'classnames';

import styles from './ScrollButton.module.scss';
import SvgIcon from '../SvgIcon';

export type ScrollButtonProps = {
  className?: string;
  direction?: 'up' | 'down';
  onClick?: () => void;
  style?: CSSProperties;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({
  className,
  direction = 'down',
  onClick,
  style,
}) => {
  return (
    <button
      style={style}
      type="button"
      className={cn(styles.root, className)}
      onClick={onClick}
    >
      <div className={styles.background}>
        <SvgIcon
          icon="arrow_bottom"
          className={cn(styles.icon, {
            [styles.up]: direction === 'up',
          })}
        />
      </div>
    </button>
  );
};

export default ScrollButton;
