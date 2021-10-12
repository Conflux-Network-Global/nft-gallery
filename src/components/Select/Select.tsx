import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import SvgIcon from 'components/SvgIcon';

import styles from './Select.module.scss';

export type SelectItem = {
  name: string;
  value: string;
  type?: string;
};

export type SelectProps = {
  className?: string;
  label: string;
  value: SelectItem | null;
  options: SelectItem[];
  disabled?: boolean;
  withSearch?: boolean;
  searchPlaceholder?: string;
  onChange: (item: SelectItem) => void;
};

const Select: React.FC<SelectProps> = ({
  className,
  options,
  label,
  value,
  disabled,
  withSearch,
  searchPlaceholder,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    const filterBySearch = (phrase: string) => {
      if (phrase) {
        return options.filter((el) =>
          el.name.toLowerCase().includes(phrase.trim().toLowerCase()),
        );
      }

      return options;
    };

    if (!isOpen) setSearchPhrase('');

    if (searchPhrase) {
      setFilteredOptions(filterBySearch(searchPhrase));
    } else setFilteredOptions(options);
  }, [options, searchPhrase, isOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isOpen && e.target && !ddRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <div className={cn(styles.root, className)}>
      <button
        type="button"
        disabled={disabled}
        className={cn(styles.header, {
          [styles.open]: isOpen,
          [styles.disabled]: disabled,
        })}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          setIsOpen(!isOpen);
        }}
      >
        {value && <p className={styles.value}>{value?.name}</p>}
        <p
          className={cn(styles.label, {
            [styles.top]: value !== null || isOpen,
          })}
        >
          {label}
        </p>
        <div className={styles.arrowWrap}>
          <SvgIcon
            icon="dd_arrow"
            size={24}
            className={cn(styles.arrowIcon, {
              [styles.open]: isOpen,
            })}
          />
        </div>
        <fieldset
          className={cn(styles.border, {
            [styles.focus]: isOpen,
          })}
          aria-hidden="true"
        >
          <legend
            className={cn(styles.legend, {
              [styles.visible]: (value !== null || isOpen) && label,
            })}
          >
            <span>{label}</span>
          </legend>
        </fieldset>
      </button>
      {isOpen && (
        <div className={styles.dropdownWrapper} ref={ddRef}>
          {withSearch && (
            <div className={styles.searchWrapper}>
              <SvgIcon icon="search" className={styles.searchIcon} />
              <input
                value={searchPhrase}
                onChange={(e) => setSearchPhrase(e.target.value)}
                className={styles.searchInput}
                placeholder={searchPlaceholder}
              />
            </div>
          )}
          {filteredOptions.map((item) => (
            <button
              type="button"
              className={styles.item}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                setIsOpen(false);
                onChange(item);
              }}
            >
              {item.type && (
                <span className={styles.type}>{item.type}&nbsp;</span>
              )}
              <span
                className={cn({ [styles.active]: value?.value === item.value })}
              >
                {item.name}
              </span>
            </button>
          ))}
          {filteredOptions.length === 0 && (
            <span className={styles.notFound}>Oops, nothing is found...</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
