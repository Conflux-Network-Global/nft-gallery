import React from 'react';
import cn from 'classnames';

import SvgIcon, { SvgIconProps } from 'components/SvgIcon/SvgIcon';
import styles from './IconButton.module.scss';

export interface IconButtonProps extends SvgIconProps {
  iconClassName?: string;
  variant?: 'primary' | 'secondary';
  buttonSize?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  variant = 'primary',
  buttonSize = 'medium',
  disabled = false,
  iconClassName,
  onClick,
  ...props
}: IconButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={cn(
        styles.btn,
        styles[variant],
        styles[buttonSize],
        className,
        { [styles.disabled]: disabled },
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SvgIcon className={cn(styles.icon, iconClassName)} {...props} />
    </button>
  );
};

export default IconButton;
