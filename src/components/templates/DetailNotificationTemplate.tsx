import styled from 'styled-components';
import DogProfile from '../organisms/DogProfile';
import TimeLocation from '../organisms/TimeLocation';

const DetailNotificationTemplate = () => {
  return (
    <>
      <DogProfile />
      <TimeLocation />
      <Container>
        <div className="specificity">
          <div> 특이사항 </div>
          <span> ex: 저희 강아지는 수줍음 이빠이</span>
        </div>
        <div className="amount">
          <span> 지불금액</span>
          <span> 9000멍</span>
        </div>
      </Container>
      <button>작성완료</button>
    </>
  );
};

export default DetailNotificationTemplate;

const Container = styled.div`
  height: 25%;
  background-color: blue;
`;
