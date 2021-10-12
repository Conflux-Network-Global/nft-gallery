import React from 'react';
import cn from 'classnames';

import Button from 'components/Button';
import CardLanding from 'components/CardLanding';
import styles from './AboutScreen.module.scss';

export type AboutScreenProps = {
  className?: string;
};

const AboutScreen: React.FC<AboutScreenProps> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={cn(styles.effect, styles.orange)} />
      <div className={cn(styles.effect, styles.amberTop)} />
      <div className={cn(styles.effect, styles.amberBottom)} />
      <div className={cn(styles.effect, styles.tealTop)} />
      <div className={cn(styles.effect, styles.tealBottom)} />
      <div className={cn(styles.effect, styles.landingCircleTop)} />
      <div className={cn(styles.effect, styles.landingCircleBottom)} />
      <div className={styles.content}>
        <div className={styles.firstSection}>
          <div className={styles.landingImage}>
            <CardLanding link="/" className={styles.cardLanding} />
          </div>
          <div className={styles.firstSectionWrapper}>
            <h2 className={cn(styles.sectionHeader, styles.sectionHeaderOne)}>
              A digital gallery in support of artists everywhere
            </h2>
            <p className={cn(styles.paragraph, styles.paragraphOne)}>
              Blockchain should empower and protect creators, not exploit them.
              The purpose of this gallery space is to uplift, elevate, and
              provide visibility to artists from emerging markets, traditional
              artists experimenting with NFTs, and innovators disrupting the
              status quo. Because we believe in being unique, in original
              thought and original people. You do you. Because if something is
              easily definable, it’s probably also not that interesting.
            </p>
            <Button label="Start bidding" className={styles.buttonBidding} />
          </div>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.secondSectionWrapper}>
            <h2 className={cn(styles.sectionHeader, styles.sectionHeaderTwo)}>
              How it works
            </h2>
            <p className={cn(styles.paragraph, styles.paragraphTwo)}>
              NFT ART LAB will feature a curated collection from a single artist
              — a private gallery show that will run for a limited time.. Each
              pop-up gallery will be an exploration of who’s new and what’s new
              in the NFT space.
            </p>
          </div>
          <div className={styles.tilesContainer}>
            <div className={styles.tile}>
              <span className={styles.tileValue}>9213+</span>
              <span className={styles.tileTitle}>Collectibles</span>
            </div>
            <div className={styles.separator} />
            <div className={styles.tile}>
              <span className={styles.tileValue}>133ETH+</span>
              <span className={styles.tileTitle}>Auctions</span>
            </div>
            <div className={styles.separator} />
            <div className={styles.tile}>
              <span className={styles.tileValue}>12K+</span>
              <span className={styles.tileTitle}>Artists</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
