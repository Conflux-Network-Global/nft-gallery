import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { OpenSeaCollection } from 'opensea-js/lib/types';

import TextField from 'components/TextField';
import SvgIcon from 'components/SvgIcon';
import styles from './CollectionSideBar.module.scss';

export type CollectionSideBarProps = {
  className?: string;
  collections: OpenSeaCollection[];
  currentCollection: OpenSeaCollection | null;
  onChange: (collection: OpenSeaCollection | null) => void;
};

const CollectionSideBar: React.FC<CollectionSideBarProps> = ({
  className,
  collections,
  currentCollection,
  onChange,
}) => {
  const [currentMarket, setCurrentMarket] = useState('Initial Market');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filteredCollection, setFilteredCollection] = useState(collections);

  useEffect(() => {
    const filterBySearch = (phrase: string) => {
      if (phrase) {
        return collections.filter((el) =>
          el.name.toLowerCase().includes(phrase.trim().toLowerCase()),
        );
      }

      return collections;
    };

    if (searchPhrase) {
      setFilteredCollection(filterBySearch(searchPhrase));
    } else setFilteredCollection(collections);
  }, [collections, searchPhrase]);

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.markets}>
        <h3 className={styles.sectionHeader}>MARKETS</h3>
        <div className={styles.marketsWrapper}>
          <button
            type="button"
            onClick={() => setCurrentMarket('Initial Market')}
            className={cn(styles.marketButton, {
              [styles.active]: currentMarket === 'Initial Market',
            })}
          >
            Initial&nbsp;market
          </button>
          <button
            type="button"
            onClick={() => setCurrentMarket('Secondary Market')}
            className={cn(styles.marketButton, {
              [styles.active]: currentMarket === 'Secondary Market',
            })}
          >
            Secondary&nbsp;market
          </button>
        </div>
      </div>

      <div className={styles.collections}>
        <h3 className={cn(styles.sectionHeader, styles.collectionHeader)}>
          COLLECTIONS
          <span className={styles.currentMarket}>/&nbsp;{currentMarket}</span>
        </h3>
        <TextField
          label="Search by collection"
          name="search"
          autoComplete="off"
          value={searchPhrase}
          onChange={setSearchPhrase}
          className={styles.search}
          height={48}
          leftElement={<SvgIcon icon="search" className={styles.searchIcon} />}
          dark
        />

        <div className={styles.collectionControls}>
          <button
            type="button"
            className={cn(styles.navItem, {
              [styles.navItemActive]: currentCollection === null,
            })}
            onClick={() => {
              onChange(null);
            }}
          >
            All
          </button>
          {filteredCollection.map((collection) => (
            <button
              key={collection.slug}
              type="button"
              className={cn(styles.navItem, {
                [styles.navItemActive]:
                  currentCollection?.slug === collection.slug,
              })}
              onClick={() => {
                onChange(collection);
              }}
            >
              {collection.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionSideBar;
