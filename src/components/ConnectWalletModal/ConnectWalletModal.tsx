import React from 'react';
import cn from 'classnames';

import Button from 'components/Button';
import SvgIcon from 'components/SvgIcon';

import Modal from 'components/Modal';
import { Wallet } from 'types/wallet';
import { useWeb3ReactManager } from 'components/Web3ReactManager';
import styles from './ConnectWalletModal.module.scss';

export type ConnectWalletModalProps = {
  className?: string;
  wallets: Wallet[];
  onClose: () => void;
  onConnected?: () => void;
};

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({
  className,
  wallets,
  onClose,
  onConnected,
}) => {
  const { error, connect } = useWeb3ReactManager();

  const handleConnect = async (wallet: Wallet) => {
    await connect(wallet);

    onConnected?.();
  };

  return (
    <Modal closeable onClose={onClose}>
      <div className={cn(styles.root, className)}>
        <p className={styles.title}>Connect wallet</p>
        <p className={styles.description}>
          Connect a wallet using one of the one below
        </p>

        {error && error.toString()}

        {wallets.map((wallet) => {
          return (
            <Button
              key={wallet.name}
              label={wallet.name}
              variant="secondary"
              leftElement={
                <SvgIcon icon={wallet.icon} className={styles.icon} />
              }
              className={styles.button}
              size="large"
              onClick={() => handleConnect(wallet)}
            />
          );
        })}
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
