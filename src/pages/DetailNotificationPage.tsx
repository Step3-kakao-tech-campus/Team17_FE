import DescriptionBoxNoti from '../components/atoms/DescriptionBoxNoti';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import BottomNavBar from '../components/molecules/BottomNavBar';
import DetailNotificationTemplate from '../components/templates/DetailNotificationTemplate';
import * as S from '../styles/pages/DescriptiontBoxContainer';

const DetailNotification = () => {
  return (
    <S.Container>
      <DescriptionBoxTitle title="공고글 제목" />
      <DescriptionBoxNoti>
        <DetailNotificationTemplate />
      </DescriptionBoxNoti>
      <BottomNavBar />
    </S.Container>
  );
};

export default DetailNotification;
