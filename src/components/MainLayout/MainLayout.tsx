import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollButton from 'components/ScrollButton';

import useMedia from 'hooks/use-media';

import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ className, children }) => {
  const [isShowScrollButton, setISsShowScrollButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [scrollButtonTranslate, setScrollButtonTranslate] = useState([0, 0]);

  const media = useMedia();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (lastScrollY > currentScrollY) {
        setISsShowScrollButton(false);
      } else {
        setISsShowScrollButton(currentScrollY > window.innerHeight);
      }

      setLastScrollY(currentScrollY);

      // const delta =
      //   document.body.scrollHeight - currentScrollY - window.innerHeight;

      // if (media.desktop) {
      //   if (delta <= 200 && delta >= 100) {
      //     const translate = (delta - 200) * -1;

      //     setScrollButtonTranslate([0, translate]);
      //   } else if (delta > 200) {
      //     setScrollButtonTranslate([0, 0]);
      //   } else if (delta < 100) {
      //     setScrollButtonTranslate([0, 60]);
      //   }
      // }

      // if (!media.desktop) {
      //   if (delta <= 200 && delta >= 100) {
      //     const translate = (delta - 200) * -1;

      //     setScrollButtonTranslate([0, translate]);
      //   } else if (delta > 200) {
      //     setScrollButtonTranslate([0, 0]);
      //   } else if (delta < 100) {
      //     setScrollButtonTranslate([0, -30]);
      //   }
      // }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [media, lastScrollY, setLastScrollY]);

  return (
    <div className={cn(styles.root, className)}>
      <Header
        className={cn({
          [styles.landingHeader]: location.pathname === '/about',
        })}
      />
      <div className={styles.content}>{children}</div>
      <div className={styles.scrollWrapper}>
        <ScrollButton
          direction="up"
          // style={{
          //   transform: `translateY(${scrollButtonTranslate[1]}px) rotate(45deg)`,
          // }}
          className={cn(styles.scrollButton, {
            [styles.show]: isShowScrollButton,
          })}
          onClick={handleScrollTop}
        />
      </div>

      <Footer className={styles.footer} />
    </div>
  );
};

export default MainLayout;
