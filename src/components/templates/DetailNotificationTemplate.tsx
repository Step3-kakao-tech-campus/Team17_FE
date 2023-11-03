import { useLocation } from 'react-router-dom';
import * as S from '../../styles/templates/DetailNotificationTemplate';
import DetailNotification from '../organisms/DetailNotification';

const WriteNotificationTemplate = () => {
  const { state } = useLocation();
  return (
    <S.Container>
      <DetailNotification />
    </S.Container>
  );
};

export default WriteNotificationTemplate;
