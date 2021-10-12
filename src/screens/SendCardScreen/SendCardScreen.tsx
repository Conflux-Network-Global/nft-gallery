import React from 'react';
import cn from 'classnames';
import BackButton from 'components/BackButton';
import CardImage from 'components/CardImage';
import CardInfo from 'components/CardInfo';
import CardAmountForm from 'components/CardAmountForm';
import CardAbout from 'components/CardAbout';
// import { OpenSeaContext } from 'components/OpenSeaProvider';
// import { transferToken } from 'api';
import { useSelector } from 'react-redux';
import { assetsItemSelector } from 'redux/selectors';
import { useParams } from 'react-router-dom';
import styles from './SendCardScreen.module.scss';

export type SendCardScreenProps = {
  className?: string;
};

const SendCardScreen: React.FC<SendCardScreenProps> = ({ className }) => {
  // const [cardData, setCardData] = useState<Card | null>(null);
  // const [sentCount, setSentCount] = useState(0);
  const maxCount = 105;
  // const seaport = useContext(OpenSeaContext);

  const { tokenAddress, tokenId } = useParams<{
    tokenAddress: string;
    tokenId: string;
  }>();
  const asset = useSelector(assetsItemSelector(tokenAddress, tokenId));

  const handleSend = () => {
    // if (!seaport) return;
    // transferToken();
  };

  // const [showSendCardModal, hideSendCardModal] = useModal(() => (
  //   <SendCardModal
  //     collectionName={cardData?.collection}
  //     image={cardData?.image}
  //     cardName={cardData?.title}
  //     chooseQuantity={sentCount}
  //     availableQuantity={cardData?.quantity}
  //     priceETH={cardData?.priceETH}
  //     priceUSD={cardData?.priceUSD}
  //     onClose={hideSendCardModal}
  //     onSend={handleSend}
  //   />
  // ));

  // const handleshowSendCardModal = (count: number) => {
  //   setSentCount(count);
  //   showSendCardModal();
  // };

  // useEffect(() => {
  //   getCardDetail().then(setCardData);
  // }, []);

  if (!asset) {
    return null;
  }

  return (
    <div className={cn(styles.root, className)}>
      <div className={cn('container', styles.container)}>
        <BackButton name="Back to profile" link="/profile" />
        <div className={styles.cardWrapper}>
          <CardImage image={asset.imageUrlOriginal} />
          <div className={styles.infoWrapper}>
            <CardInfo
              title={asset.name}
              collectionName={asset.collection.name}
              remainText="104" // TODO
              chips={[]} // TODO
            />
            <CardAmountForm
              maxCount={maxCount}
              buttonLabel="Send"
              onSubmit={handleSend}
              priceETH={asset.collection.paymentTokens[0].ethPrice}
              priceUSD={asset.collection.paymentTokens[0].usdPrice}
              dark
            />
            <CardAbout description={asset.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendCardScreen;
