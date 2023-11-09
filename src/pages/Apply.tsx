// import DescriptionBox from '../components/atoms/DescriptionBox';
// import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import ApplyBox from '../components/organisms/ApplyBox';
import Container from '../components/atoms/Container';
import { useLocation } from 'react-router-dom';

const Apply = () => {
  const { state } = useLocation();
  return (
    <Container>
      <ApplyBox notificationId={state} />
    </Container>
  );
};

export default Apply;
