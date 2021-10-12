import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import cn from 'classnames';

import SvgIcon from 'components/SvgIcon';
import styles from './Footer.module.scss';

export type FooterProps = {
  className?: string;
};

const links = [
  { href: '//www.github.com', icon: 'github' },
  { href: '//www.discord.com', icon: 'discord' },
  { href: '//www.reddit.com', icon: 'reddit' },
  { href: '//www.telegram.com', icon: 'telegram' },
  { href: '//www.twitter.com', icon: 'twitter' },
  { href: '//www.discourse.com', icon: 'discourse' },
  { href: '//www.medium.com', icon: 'medium' },
  { href: '//www.weibo.com', icon: 'weibo' },
  { href: '//www.kakaocorp.com', icon: 'talk' },
  { href: '//www.wechat.com', icon: 'wechat' },
  { href: '//www.nave.com', icon: 'nave' },
  { href: '//www.youtube.com', icon: 'youtube' },
];

const Footer: React.FC<FooterProps> = ({ className }) => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <div className={cn(styles.root, className)}>
      <a href="/" className={styles.logo}>
        <span>NFT</span>
        <span>ART LAB</span>
      </a>
      <div className={styles.platformWrapper}>
        <h3 className={styles.subtitle}>NFT PLATFORM NETWORK</h3>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/gallery" className={styles.link}>
          Gallery
        </Link>
        <Link to="/profile" className={styles.link}>
          My cards
        </Link>
      </div>
      <div className={styles.joinWrapper}>
        <h3 className={styles.subtitle}>Join Us</h3>
        <div className={styles.socialWrapper}>
          {links.map((el) => (
            <a href={el.href} target="_blank" rel="noreferrer" key={el.icon}>
              <SvgIcon icon={el.icon} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.bottomSection}>
        <span className={styles.legalElement}>
          Copyright © 2021 NFT Platform. All Rights Reserved
        </span>
        <div className={styles.legalContainer}>
          <a href="/" className={cn(styles.legalElement, styles.interactive)}>
            Privacy Policy
          </a>
          <a href="/" className={cn(styles.legalElement, styles.interactive)}>
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
