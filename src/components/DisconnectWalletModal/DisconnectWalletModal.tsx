import React from 'react';
import cn from 'classnames';

import Button from 'components/Button';
import Modal from 'components/Modal';

import { useWeb3ReactManager } from 'components/Web3ReactManager';
import styles from './DisconnectWalletModal.module.scss';

export type DisconnectWalletModalProps = {
  className?: string;
  onCancel: () => void;
  onDisconnected: () => void;
};

const DisconnectWalletModal: React.FC<DisconnectWalletModalProps> = ({
  className,
  onCancel,
  onDisconnected,
}) => {
  const { disconnect, wallet } = useWeb3ReactManager();

  const handleDisconnect = () => {
    if (wallet) {
      disconnect(wallet);
      onDisconnected();
    }
  };

  return (
    <Modal className={cn(styles.modal, className)}>
      <div className={cn(styles.root, className)}>
        <p className={styles.title}>Disconnect wallet</p>
        <p className={styles.description}>
          Are you sure you want to disconnect Metamask wallet from Conflux NFT
          platform?
        </p>
        <div className={styles.buttonsWrapper}>
          <Button
            label="Disconnect wallet"
            variant="primary"
            color="warning"
            className={styles.button}
            onClick={handleDisconnect}
          />
          <Button
            label="Cancel"
            variant="secondary"
            className={styles.button}
            onClick={onCancel}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DisconnectWalletModal;
