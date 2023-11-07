import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import ApplyInquiryBox from '../components/organisms/ApplyInquiryBox';
import Container from '../components/atoms/Container';

const Apply = () => {
  return (
    <Container>
      <DescriptionBoxTitle title="지원서 조회하기" />
      <DescriptionBox>
        <ApplyInquiryBox />
      </DescriptionBox>
    </Container>
  );
};

export default Apply;
