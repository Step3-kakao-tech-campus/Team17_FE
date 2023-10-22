import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import * as S from '../styles/pages/DescriptiontBoxContainer';
import ApplyBox from '../components/organisms/ApplyBox';
import BottomNavBar from '../components/molecules/BottomNavBar';

const Apply = () => {
  return (
    <S.Container>
      <DescriptionBoxTitle title="산책 지원하기" />
      <DescriptionBox>
        <ApplyBox />
      </DescriptionBox>
      <BottomNavBar />
    </S.Container>
  );
};

export default Apply;
