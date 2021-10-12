import React, {
  BaseSyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import cn from 'classnames';

import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import { shortenAddress } from 'utils';
import SvgIcon from 'components/SvgIcon';
import ProfilePurchased from 'components/ProfilePurchased';
import ProfileSent from 'components/ProfileSent';
import { useModal } from 'components/Modal/useModal';
// import CollectionSideBar from 'components/CollectionSideBar';
import QRCode from 'components/QRCode';
import { useWeb3ReactManager } from 'components/Web3ReactManager';
import { useDispatch } from 'react-redux';
import styles from './ProfileScreen.module.scss';
import CopyToClipBoard from '../../components/CopyToClipBoard';
import { getAssets, getTransferedCards } from '../../api';
import { OpenSeaContext } from '../../components/OpenSeaProvider';
import { setPurchasedAssets, setSentAssets } from '../../redux/actions';

export type ProfileScreenProps = {
  className?: string;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ className }) => {
  const dispatch = useDispatch();
  const seaport = useContext(OpenSeaContext);
  const [purchasedCount, setPurchasedCount] = useState(0);
  const [sentCount, setSentCount] = useState(0);
  const [address, setAddress] = useState('');
  const { path } = useRouteMatch();
  const { account, wallet } = useWeb3ReactManager();

  const handleSentClick = (event: BaseSyntheticEvent) => {
    if (sentCount === 0) {
      event.preventDefault();
    }
  };

  const [showQRCodeModal, hideQRCodeModal] = useModal(() => (
    <QRCode address={address} onClose={hideQRCodeModal} />
  ));

  useEffect(() => {
    if (seaport && account) {
      setAddress(account);

      getAssets(seaport, {
        owner: account,
        limit: 50,
        offset: 0,
        // order_by: OrderOptions.saleDate, // TODO not exist in events api call (error)
      }).then((assets) => {
        dispatch(setPurchasedAssets(assets));
        setPurchasedCount(assets.length);
      });

      getTransferedCards(seaport, {
        accountAddress: account,
        limit: 50,
        offset: 0,
        // order_by: OrderOptions.saleDate, // TODO not exist in events api call (error)
      }).then((assets) => {
        dispatch(setSentAssets(assets));
        setSentCount(assets.length);
      });
    }
  }, [account, dispatch, seaport]);

  if (!wallet) {
    return (
      <h2 className={styles.notification}>
        Please connect your wallet to access profile.
      </h2>
    );
  }

  return (
    <div className={cn(styles.root, className)}>
      <div className="container">
        <div className={styles.walletDetailWrapper}>
          <SvgIcon icon={wallet.icon} size={70} />
          <div className={styles.walletData}>
            <p className={styles.address}>
              {address ? shortenAddress(address) : ''}
            </p>
            <div className={styles.buttonWrapper}>
              <CopyToClipBoard
                text={address}
                target={
                  <div className={styles.copyAddress}>
                    <SvgIcon
                      icon="copy"
                      size={18}
                      className={styles.buttonIcon}
                    />
                    Copy address
                  </div>
                }
              />
              <div className={styles.dot} />
              <button
                type="button"
                className={styles.walletButton}
                onClick={showQRCodeModal}
              >
                <SvgIcon icon="qr" size={18} className={styles.buttonIcon} />
                Show wallet QR code
              </button>
            </div>
          </div>
        </div>
        <h1 className={styles.title}>My cards</h1>
      </div>
      <div className={styles.navWrapper}>
        <nav className={cn('container', styles.nav)}>
          <NavLink
            to="/profile/purchased"
            className={styles.link}
            activeClassName={styles.active}
          >
            <span className={styles.linkName}>Cards purchased</span>
            {!!purchasedCount && (
              <span className={styles.count}>
                {purchasedCount < 50 ? purchasedCount : '49+'}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/profile/sent"
            className={cn(styles.link, {
              [styles.disabled]: sentCount === 0,
            })}
            activeClassName={styles.active}
            onClick={handleSentClick}
          >
            <span className={styles.linkName}>Cards sent</span>
            {sentCount > 0 && (
              <span className={styles.count}>
                {sentCount < 50 ? sentCount : '49+'}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
      <div className={cn('container', styles.cardWrapper)}>
        {/* <CollectionSideBar root="/gallery" collections={collections} /> */}
        <Switch>
          <Route path={`${path}/purchased`} component={ProfilePurchased} />
          <Route path={`${path}/sent`} component={ProfileSent} />
          <Route path={`${path}/`}>
            <Redirect to={`${path}/purchased`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ProfileScreen;
