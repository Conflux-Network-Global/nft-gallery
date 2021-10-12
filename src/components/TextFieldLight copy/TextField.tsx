import React, { InputHTMLAttributes, useState } from 'react';
import cn from 'classnames';
import SvgIcon from 'components/SvgIcon';

import styles from './TextField.module.scss';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  labelClassName?: string;
  placeholder?: string;
  multiline?: boolean;
  label?: string;
  name: string;
  value: string;
  disabled?: boolean;
  helperText?: string;
  optional?: boolean;
  error?: string | JSX.Element;
  errorHighlight?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
  height?: 56 | 48 | 40 | 36;
  autoComplete?: 'off' | 'on';
  onChange: (value: string, name: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  className,
  inputContainerClassName,
  leftElement,
  rightElement,
  inputClassName,
  labelClassName,
  placeholder,
  multiline = false,
  label,
  name,
  value,
  disabled = false,
  error,
  type = 'text',
  helperText,
  optional = false,
  errorHighlight,
  height,
  autoComplete = 'on',
  onChange,
}: TextFieldProps) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className={cn(styles.root, className)}>
      <div
        className={cn(styles.container, {
          [styles.textArea]: multiline,
          [styles.withError]: error,
          [styles.errorHighlight]: errorHighlight,
          [styles.disabled]: disabled,
          [styles.focus]: focus,
          [styles.filled]: value,
        })}
      >
        <div className={cn(styles.inputContainer, inputContainerClassName)}>
          {leftElement && (
            <div className={styles.leftElement}>{leftElement}</div>
          )}
          {multiline ? (
            <textarea
              id={`input-${name}`}
              className={cn(styles.input, styles.textarea, inputClassName)}
              value={value}
              placeholder={placeholder}
              onChange={(e): void => onChange(e.currentTarget.value, name)}
              onFocus={(): void => setFocus(true)}
              onBlur={(): void => setFocus(false)}
              disabled={disabled}
            />
          ) : (
            <input
              id={`input-${name}`}
              type={type}
              className={cn(
                styles.input,
                {
                  [styles.lg]: height === 56,
                  [styles.md]: height === 48,
                  [styles.sm]: height === 40,
                  [styles.xs]: height === 36,
                },
                inputClassName,
              )}
              value={value}
              placeholder={placeholder}
              onChange={(e): void => onChange(e.currentTarget.value, name)}
              onFocus={(): void => setFocus(true)}
              onBlur={(): void => setFocus(false)}
              disabled={disabled}
              autoComplete={autoComplete}
            />
          )}
          <label
            className={cn(
              styles.label,
              styles.floatingLabel,
              {
                [styles.lg]: height === 56,
                [styles.md]: height === 48,
                [styles.sm]: height === 40,
                [styles.xs]: height === 36,
                [styles.withLeftElement]: leftElement,
              },
              labelClassName,
            )}
            htmlFor={`input-${name}`}
          >
            {label}
            {optional && !focus && (
              <span className={styles.optional}>(optional)</span>
            )}
          </label>
          <fieldset className={styles.border} aria-hidden="true">
            <legend className={styles.legend}>
              <span>{label}</span>
            </legend>
          </fieldset>
          {rightElement && (
            <div className={styles.rightElement}>{rightElement}</div>
          )}
        </div>
      </div>

      {!error && helperText && (
        <p className={styles.helperText}>{helperText}</p>
      )}
      {error && (
        <p className={styles.error}>
          <SvgIcon className={styles.errorIcon} size={18} icon="circle-close" />
          <span className={styles.errorMessage}>{error}</span>
        </p>
      )}
    </div>
  );
};

export default TextField;
