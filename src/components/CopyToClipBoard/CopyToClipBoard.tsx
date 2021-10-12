import React, { useState } from 'react';
import cn from 'classnames';

import styles from './CopyToClipBoard.module.scss';

export type CopyToClipBoardProps = {
  className?: string;
  text: string;
  target: JSX.Element;
};

const CopyToClipBoard: React.FC<CopyToClipBoardProps> = ({
  className,
  text,
  target,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <div className={cn(styles.root, className)}>
      <button type="button" className={styles.button} onClick={handleClick}>
        {target}
      </button>
      {show && <div className={styles.message}>Copied to clipboard</div>}
    </div>
  );
};

export default CopyToClipBoard;
