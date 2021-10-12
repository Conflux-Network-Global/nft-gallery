import React from 'react';
import cn from 'classnames';

import SvgIcon from 'components/SvgIcon';
import styles from './ComingSoonScreen.module.scss';

export type ComingSoonScreenProps = {
  className?: string;
};

const ComingSoonScreen: React.FC<ComingSoonScreenProps> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.centerWrapper}>
        <p className={styles.comingSoonText}>coming soon</p>
        <div className={styles.logo} />
        <p className={styles.description}>
          Welcome to&nbsp;the World of&nbsp;PolkaPets! The World
          of&nbsp;PolkaPets goes beyond just collectible NFTs. Within the
          PolkaPets Universe, each PolkaPet is&nbsp;embodied
          as&nbsp;an&nbsp;artistic creature that represents a&nbsp;specific
          project within the PolkaDot ecosystem. Stay tuned for more soon!
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            Copyright © 2020 Polka Pets World. All Rights Reserved
          </p>
          <div className={styles.socialWrapper}>
            <a
              href="https://twitter.com/polkapets?s=21"
              target="_blank"
              rel="noreferrer"
              className={styles.socialButton}
            >
              <SvgIcon icon="twiter" />
            </a>
            <a
              href="https://polkapetworld.medium.com"
              target="_blank"
              rel="noreferrer"
              className={styles.socialButton}
            >
              <SvgIcon icon="union" />
            </a>
          </div>
          <div className={styles.rulesWrapper}>
            {/* <a href="/" className={styles.ruleLink}>Privacy Policy</a>
          <a href="/" className={styles.ruleLink}>Terms of Use</a> */}
          </div>
        </div>
      </div>
      <div className={styles.bgLeft} />
      <div className={styles.bgRight} />
    </div>
  );
};

export default ComingSoonScreen;
