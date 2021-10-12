import React from 'react';
import cx from 'classnames';
import SvgIcon from 'components/SvgIcon';
import styles from './Modal.module.scss';

type ModalProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  closeable?: boolean;
  onClose?: () => void;
  fullScreen?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  className,
  children,
  closeable = false,
  onClose,
  fullScreen = false,
}: ModalProps) => (
  <div
    className={cx(styles.root, {
      [styles.fullScreen]: fullScreen,
    })}
  >
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={cx(styles.modal, className, {
            [styles.fullScreen]: fullScreen,
          })}
        >
          {closeable && onClose && (
            <SvgIcon
              className={styles.iconClose}
              icon="close"
              size={24}
              onClick={onClose}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
