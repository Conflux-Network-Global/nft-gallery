import React from 'react';
import cn from 'classnames';

import styles from './CardAbout.module.scss';

export type CardAboutProps = {
  className?: string;
  description: string;
};

const CardAbout: React.FC<CardAboutProps> = ({ className, description }) => {
  return (
    <div className={cn(styles.root, className)}>
      <p className={styles.aboutText}>About</p>
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default CardAbout;
