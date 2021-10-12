import React, { useContext, useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import cn from 'classnames';

import Select, { SelectItem } from 'components/Select';
import { sortOptions } from 'constants/index';

import CollectionSideBar from 'components/CollectionSideBar';
import { OpenSeaCollection } from 'opensea-js/lib/types';
import { OpenSeaContext } from 'components/OpenSeaProvider';
import { useWeb3React } from '@web3-react/core';
import { getCollections } from 'api';
import ProgressBar from 'components/ProgressBar';
import { progressPhasesMock } from 'mock_data/mockData';
import styles from './CardsGrid.module.scss';
import Loader from '../Loader';

export type CardsGridProps<T> = {
  className?: string;
  items: T[];
  loading: boolean;
  collection: OpenSeaCollection | null;
  sortOption: SelectItem;
  onChangeSort: (sortOption: SelectItem) => void;
  onChangeCollection: (collection: OpenSeaCollection | null) => void;
  renderItem: (item: T, index: number) => React.ReactNode;
  withProgressBar?: boolean;
};

const initialFilter = {
  name: 'All',
  value: 'all',
};

const CardsGrid = <T,>({
  className,
  items,
  loading = false,
  collection,
  sortOption,
  withProgressBar = false,
  onChangeSort,
  onChangeCollection,
  renderItem,
}: CardsGridProps<T>): JSX.Element => {
  const [collections, setCollections] = useState<OpenSeaCollection[]>([]);

  const seaport = useContext(OpenSeaContext);
  const { account } = useWeb3React();

  useEffect(() => {
    if (!seaport) return;

    getCollections(seaport).then((responseCollections) => {
      setCollections(responseCollections);
    });
  }, [account, seaport]);

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.sidebar}>
        <CollectionSideBar
          currentCollection={collection}
          collections={collections}
          onChange={onChangeCollection}
        />
      </div>
      {withProgressBar && (
        <ScrollContainer className={cn(styles.progressBar, styles.mobile)}>
          <ProgressBar phases={progressPhasesMock} />
        </ScrollContainer>
      )}
      <Select
        label="Collection"
        withSearch
        searchPlaceholder="Search by collection"
        value={
          collection
            ? { name: collection?.name, value: collection?.slug }
            : initialFilter
        }
        options={[
          initialFilter,
          ...collections.map((item) => ({
            name: item.name,
            value: item.slug,
          })),
        ]}
        onChange={(item) => {
          onChangeCollection(
            collections.find((i) => i.slug === item.value) || null,
          );
        }}
        className={styles.collectionSelect}
      />
      <div className={styles.content}>
        {withProgressBar && (
          <ScrollContainer
            vertical={false}
            className={cn(styles.progressBar, styles.desktop)}
          >
            <ProgressBar phases={progressPhasesMock} />
          </ScrollContainer>
        )}
        <header className={styles.header}>
          <div className={styles.titleWrapper}>
            <h5 className={styles.title}>
              {collection ? collection?.name : 'All'}
            </h5>
            <span className={styles.cardsAmount}>
              {items.length}&nbsp;
              {items.length === 0 || items.length > 1 ? 'cards' : 'card'}
            </span>
          </div>
          <Select
            label="Sorting"
            value={sortOption}
            options={sortOptions}
            onChange={onChangeSort}
            className={styles.sorting}
          />
        </header>
        <div className={styles.items}>
          {loading && <Loader overlay fullScreen />}
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
