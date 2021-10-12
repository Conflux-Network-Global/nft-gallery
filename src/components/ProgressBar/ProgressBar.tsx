import React from 'react';
import Countdown from 'react-countdown';
import cn from 'classnames';

import styles from './ProgressBar.module.scss';

export type ProgressBarPhase = {
  cardsToSell: number;
  cardsSold: number;
  priceETH: string;
  endTimestamp: number;
};

export type ProgressBarProps = {
  className?: string;
  phases: ProgressBarPhase[];
};

const ProgressBar: React.FC<ProgressBarProps> = ({ className, phases }) => {
  const filledPercent = (toSell: number, sold: number) => {
    return `${(sold / toSell) * 100}%`;
  };

  const isShowTimer = (timestamp: number) => {
    const currentTimestamp = Date.now();

    if (!timestamp && currentTimestamp > timestamp) return false;

    return true;
  };

  const addZero = (number: number) => {
    return `0${number}`.slice(-2);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return null;
    }

    const timerData = [days, hours, minutes, seconds];

    return (
      <div className={styles.timer}>
        {timerData.map((el, i) => (
          <>
            <span
              className={cn({
                [styles.notActiveTime]: el === 0 && i !== timerData.length - 1,
              })}
            >
              {addZero(el)}
            </span>
            {i !== timerData.length - 1 && (
              <span className={styles.timerSeparator}>:</span>
            )}
          </>
        ))}
      </div>
    );
  };

  return (
    <div className={cn(styles.root, className)}>
      {phases.map((phase, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.phaseWrapper} key={`progress_bar_phase_${i}`}>
          {i === 0 && (
            <div className={cn(styles.circle, styles.filledCircle)} />
          )}
          {i !== 0 && i !== phases.length && (
            <div
              className={cn(styles.circle, {
                [styles.filledCircle]:
                  (phase.cardsToSell > 0 &&
                    phase.cardsSold === phase.cardsToSell) ||
                  phase.cardsSold > 1,
              })}
            />
          )}
          {phase.cardsToSell > 0 && (
            <div>
              <div className={styles.amount}>
                <span>{phase.cardsSold}</span>
                <span className={styles.amountSeparator}>/</span>
                <span
                  className={cn(styles.toSell, {
                    [styles.disabled]: phase.cardsToSell === phase.cardsSold,
                  })}
                >
                  {phase.cardsToSell}
                </span>
              </div>
              <div className={styles.price}>{phase.priceETH} ETH</div>
              {isShowTimer(phase.endTimestamp) && (
                <Countdown date={phase.endTimestamp} renderer={renderer} />
              )}
            </div>
          )}

          <div className={styles.emptyProgress} />
          <div
            className={styles.filledProgress}
            style={{ width: filledPercent(phase.cardsToSell, phase.cardsSold) }}
          />

          {i === phases.length - 1 && (
            <div
              className={cn(styles.circle, styles.lastCircle, {
                [styles.filledCircle]:
                  phase.cardsToSell && phase.cardsToSell === phase.cardsSold,
              })}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
