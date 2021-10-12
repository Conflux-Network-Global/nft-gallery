import React from 'react';
import cn from 'classnames';

import Button from 'components/Button';
import styles from './UnauthorizedDialog.module.scss';

export type UnauthorizedDialogProps = {
  className?: string;
  onConnect: () => void;
  onCancel: () => void;
};

const UnauthorizedDialog: React.FC<UnauthorizedDialogProps> = ({
  className,
  onConnect,
  onCancel,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <p className={styles.title}>Your wallet is disconnected</p>
      <p className={styles.description}>
        Connect a crypto wallet to buy cards and create your own card library.
      </p>
      <div className={styles.buttonsWrapper}>
        <Button
          label="Connect wallet"
          variant="primary"
          className={styles.button}
          onClick={onConnect}
        />
        <Button
          label="Cancel"
          variant="tertiary"
          className={styles.button}
          onClick={onCancel}
        />
      </div>
    </div>
  );
};

export default UnauthorizedDialog;
