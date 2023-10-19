import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import * as S from '../styles/pages/DescriptiontBoxContainer';
import ReviewBox from '../components/organisms/ReviewBox';

const Review = () => {
  // 결제 페이지 이동시 매칭 아이디 전달해줘야 함.
  // const {data: payment, isLoading} = useQuery("payment", () => getPayment(1));

  return (
    <S.Container>
      <DescriptionBoxTitle title="리뷰 작성하기" />
      <DescriptionBox>
        <ReviewBox />
      </DescriptionBox>
    </S.Container>
  );
};

export default Review;
