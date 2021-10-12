import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import SvgIcon from 'components/SvgIcon';
import Button from 'components/Button';
import { shortenAddress } from 'utils';
import { useWeb3ReactManager } from 'components/Web3ReactManager';
import styles from './ConnectWallet.module.scss';

export type ConnectWalletProps = {
  className?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
};

const ConnectWallet: React.FC<ConnectWalletProps> = ({
  className,
  onConnect,
  onDisconnect,
}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const { account, wallet } = useWeb3ReactManager();
  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    if (!wallet && onConnect) {
      onConnect();
    } else {
      setIsShowMenu(!isShowMenu);
    }
  };

  const handleDisconnect = () => {
    setIsShowMenu(false);

    if (onDisconnect) {
      onDisconnect();
    }
  };

  const handleMyCards = () => {
    setIsShowMenu(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        isShowMenu &&
        e.target &&
        !ddRef.current?.contains(e.target as Node)
      ) {
        setIsShowMenu(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isShowMenu]);

  return (
    <div className={cn(styles.root, className)}>
      <button
        type="button"
        className={cn(styles.mobileButton, {
          [styles.connected]: !!wallet,
        })}
        onClick={handleButtonClick}
      >
        {wallet ? <SvgIcon icon={wallet.icon} /> : <SvgIcon icon="wallet" />}
      </button>
      <Button
        label={wallet && account ? shortenAddress(account) : 'Connect wallet'}
        leftElement={wallet ? <SvgIcon icon={wallet.icon} /> : undefined}
        variant={wallet ? 'secondary' : 'primary'}
        size="medium"
        className={styles.desktopButton}
        onClick={handleButtonClick}
      />
      {isShowMenu && (
        <div className={styles.ddWrapper} ref={ddRef}>
          <Link to="/profile" className={styles.ddLink} onClick={handleMyCards}>
            My cards
          </Link>
          <div className={styles.ddBorder} />
          <button
            type="button"
            className={styles.ddButton}
            onClick={handleDisconnect}
          >
            Disconnect wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
