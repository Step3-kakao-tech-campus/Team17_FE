import { useLocation } from 'react-router-dom';
import * as S from '../../styles/templates/DetailNotificationTemplate';
import DetailNotification from '../organisms/DetailNotification';

interface NotificationProps {
  data: {
    title: string;
    isMine: boolean;
    start: string;
    end: string;
    lat: number;
    lng: number;
    notificationId: number;
    significant: string;
    coin: number;
    dog: dogProp;
  };
}

interface dogProp {
  breed: string;
  dogId: number;
  image: string;
  name: string;
  size: string;
}

const DetailNotificationTemplate = ({ data }: NotificationProps) => {
  return (
    <S.Container>
      <DetailNotification data={data} />
    </S.Container>
  );
};

export default DetailNotificationTemplate;
