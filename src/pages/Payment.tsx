import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import PayBox from '../components/organisms/PayBox';
import * as S from '../styles/pages/DescriptiontBoxContainer';

const Payment = () => {
  return (
    <S.Container>
      <DescriptionBoxTitle title="결제하기" />
      <DescriptionBox>
        <PayBox />
      </DescriptionBox>
    </S.Container>
  );
};

export default Payment;
