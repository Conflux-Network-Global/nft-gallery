import React from 'react';
import cn from 'classnames';

import styles from './Loader.module.scss';

export type LoaderProps = {
  className?: string;
  overlay?: boolean;
  fullScreen?: boolean;
};

const Loader: React.FC<LoaderProps> = ({
  className,
  overlay = false,
  fullScreen,
}) => {
  return (
    <>
      <div
        className={cn(styles.root, className, {
          [styles.fullScreen]: fullScreen,
        })}
      >
        <div className={styles.loader} />
        {overlay && <div className={styles.overlay} />}
      </div>
    </>
  );
};

export default Loader;
