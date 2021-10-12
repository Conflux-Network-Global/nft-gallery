import React, { ReactNode, useState } from 'react';
import cn from 'classnames';
import styles from './Tooltip.module.scss';

export type TooltipProps = {
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  showArrow?: boolean;
  triggerElem?: JSX.Element;
};

const Tooltip: React.FC<TooltipProps> = ({
  className,
  containerClassName,
  children,
  position = 'top',
  showArrow = true,
  triggerElem,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={cn(styles.root, className)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {triggerElem}
      {showTooltip && (
        <div
          className={cn(
            styles.content,
            styles[position],
            {
              [styles.showArrow]: showArrow,
            },
            containerClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
