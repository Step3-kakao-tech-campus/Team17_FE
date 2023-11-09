import * as S from '../../styles/templates/WriteNotificationTemplate';
import BottomNavBar from '../molecules/BottomNavBar';
import WriteNotification from '../organisms/WriteNotification';

const WriteNotificationTemplate = () => {
  return (
    <S.Container>
      <WriteNotification />
      <BottomNavBar />
    </S.Container>
  );
};

export default WriteNotificationTemplate;
