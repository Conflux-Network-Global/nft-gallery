/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export type ButtonProps = {
  className?: string;
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  color?: 'primary' | 'warning';
  type?: 'submit' | 'reset' | 'button';
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  size = 'medium',
  variant = 'primary',
  color = 'primary',
  type = 'button',
  leftElement,
  rightElement,
  disabled = false,
  fullWidth = false,
  onClick,
}) => {
  const classNames = cn(
    styles.root,
    className,
    styles[size],
    styles[variant],
    styles[`color_${color}`],
    {
      [styles.full]: fullWidth,
      [styles.disabled]: disabled,
    },
  );

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {leftElement && <span className={styles.leftElement}>{leftElement}</span>}
      {label}
      {rightElement && (
        <span className={styles.rightElement}>{rightElement}</span>
      )}
    </button>
  );
};

export default Button;
