import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import styles from './BackButton.module.scss';
import SvgIcon from '../SvgIcon';

export type BackButtonProps = {
  className?: string;
  link: string;
  name: string;
};

const BackButton: React.FC<BackButtonProps> = ({ className, link, name }) => {
  return (
    <div>
      <Link to={link} className={cn(styles.root, className)}>
        <SvgIcon icon="arrow_bottom" className={styles.backIcon} />
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default BackButton;
