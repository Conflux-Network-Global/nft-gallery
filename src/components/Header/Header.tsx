/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { useModal } from 'components/Modal/useModal';

import ConnectWallet from 'components/ConnectWallet';
import ConnectWalletModal from 'components/ConnectWalletModal';
import DisconnectWalletModal from 'components/DisconnectWalletModal';

import { SUPPORTED_WALLETS_ARRAY } from 'constants/wallet';

import styles from './Header.module.scss';

export type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [showConnectWallet, hideConnectWallet] = useModal(() => (
    <ConnectWalletModal
      wallets={SUPPORTED_WALLETS_ARRAY}
      onConnected={hideConnectWallet}
      onClose={hideConnectWallet}
    />
  ));

  const [showDisconnectWallet, hideDisconnectWallet] = useModal(() => (
    <DisconnectWalletModal
      onDisconnected={hideDisconnectWallet}
      onCancel={hideDisconnectWallet}
    />
  ));

  return (
    <div className={cn(styles.root, className)}>
      <div className={cn('container', styles.container)}>
        <a href="/" className={styles.logo}>
          <span>NFT&nbsp;</span>
          <span>ART LAB</span>
        </a>
        <a href="/" className={styles.logoMobile}>
          <span>NFT</span>
          <span>ART LAB</span>
        </a>
        <nav className={styles.navWrapper}>
          <NavLink
            to="/about"
            className={styles.link}
            activeClassName={styles.active}
          >
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className={styles.link}
            activeClassName={styles.active}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/profile/purchased"
            className={styles.link}
            activeClassName={styles.active}
          >
            My Cards
          </NavLink>
        </nav>
        <ConnectWallet
          onConnect={showConnectWallet}
          onDisconnect={showDisconnectWallet}
          className={styles.wallet}
        />
      </div>
    </div>
  );
};

export default Header;
