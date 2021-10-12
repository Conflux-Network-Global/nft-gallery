import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import { BrowserQRCodeSvgWriter } from '@zxing/library';
import styles from './QRCode.module.scss';
import Modal from '../Modal';

export type QRCodeProps = {
  className?: string;
  address?: string;
  onClose: () => void;
};

const QRCode: React.FC<QRCodeProps> = ({ className, address, onClose }) => {
  const svgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const codeWriter = new BrowserQRCodeSvgWriter();

    if (svgRef.current && address) {
      codeWriter.writeToDom(svgRef?.current, address, 200, 200);
    }
  }, [address]);

  return (
    <Modal closeable onClose={onClose} className={styles.modal}>
      <div className={cn(styles.root, className)}>
        <p className={styles.title}>Scan wallet QR code</p>
        <div ref={svgRef} className={styles.codWrapper} />
      </div>
    </Modal>
  );
};

export default QRCode;
