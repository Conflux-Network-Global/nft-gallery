import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import useMedia from 'hooks/use-media';
import Modal from 'components/Modal';
import SelectNumber from 'components/SelectNumber';
import TextField from 'components/TextField';
import QRCodeScanner from 'services/QRCodeScaner';
import Button from 'components/Button';
import SvgIcon from 'components/SvgIcon';
import styles from './SendCardModal.module.scss';

export type SendCardModalProps = {
  image?: string;
  cardName?: string;
  collectionName?: string;
  chooseQuantity?: number;
  availableQuantity?: number;
  priceUSD?: string;
  priceETH?: string;
  onClose: () => void;
  onSend?: (address: string, quantity: number) => void;
};

const SendCardModal: React.FC<SendCardModalProps> = ({
  image = '',
  cardName = '',
  collectionName = '',
  chooseQuantity = 1,
  availableQuantity = 0,
  priceUSD = 0,
  priceETH = 0,
  onClose,
  onSend,
}) => {
  const media = useMedia();
  const [count, setCount] = useState(chooseQuantity);
  const [address, setAddress] = useState('');
  // TODO show video?
  // const [showVideo, setShowVideo] = useState(false);

  // const handleCloseVideo = () => {
  //   QRCodeScanner.reset();
  //   setShowVideo(false);
  // };

  // const handleScan = () => {
  //   setShowVideo(true);
  //   QRCodeScanner.scan((result) => {
  //     if (result) {
  //       setAddress(result.getText());
  //       handleCloseVideo();
  //     }
  //   });
  // };

  const handleSend = () => {
    // eslint-disable-next-line no-console
    console.log(onSend);

    // TODO uncomment'
    // if (onSend) {
    //   onSend(address, count);
    // }
  };

  useEffect(() => {
    QRCodeScanner.getDevice();
  }, []);

  const ethCost = (count * +priceETH).toFixed(2);
  const usdCost = (count * +priceUSD).toFixed(2);

  return (
    <Modal closeable onClose={onClose} fullScreen={media.mobile}>
      <div className={cn(styles.container)}>
        <p className={styles.title}>Send card</p>
        <div className={styles.topWrapper}>
          <img src={image} alt="card" className={styles.image} />
          <div className={styles.namesWrapper}>
            <div className={styles.nameWrapper}>
              <p className={styles.cardName}>{cardName}</p>
              <p className={styles.quantity}>{availableQuantity} cards</p>
            </div>
            <p className={styles.collectionName}>{collectionName}</p>
          </div>
        </div>
        <div className={styles.selectQuantityWrapper}>
          <SelectNumber
            value={count}
            minValue={0}
            maxValue={availableQuantity}
            changeValue={setCount}
          />
          <p className={styles.subtotal}>Subtotal</p>
          <div className={styles.priceWrapper}>
            <p className={styles.eth}>{ethCost} ETH</p>
            <p className={styles.usd}>${usdCost}</p>
          </div>
        </div>
        <TextField
          name="address"
          value={address}
          onChange={setAddress}
          label="Crypto wallet address "
          className={styles.address}
          rightElement={
            <SvgIcon
              icon="scan_qr"
              size={24}
              className={styles.scanButton}
              // onClick={handleScan}
            />
          }
        />
        <Button
          label="Send"
          className={styles.sendButton}
          disabled={!address}
          size="large"
          onClick={handleSend}
        />
        {/* {showVideo && (
          <>
            <video
              id="video"
              width={window.innerWidth}
              height={window.innerHeight}
              className={cn(styles.video)}
            />
            <IconButton
              icon="close"
              size={48}
              className={styles.closeVideo}
              onClick={handleCloseVideo}
            />
          </>
        )} */}
      </div>
    </Modal>
  );
};

export default SendCardModal;
