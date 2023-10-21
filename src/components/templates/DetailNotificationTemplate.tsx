import styled from 'styled-components';
import DogProfile from '../organisms/DogProfile';
// import TimeLocation from '../organisms/TimeLocation';
import { MapPin, CaretCircleRight, Plus } from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import DogSelectModal from '../molecules/DogSelectModal';
import DateModal from '../molecules/DateModal';
import { getDogProfile } from '../../apis/dog';

const DetailNotificationTemplate = () => {
  const [isDogModal, setDogModal] = useState<boolean>(true);
  const [selectedDog, setSelectedDog] = useState<number | null>(null);
  const [isDateModal, setDateModal] = useState<boolean>(false);

  // 강아지 선택 모달
  const onClickDogModal = useCallback(() => {
    setSelectedDog(null);
    setDogModal(!isDogModal);
  }, [isDogModal]);
  const handleDogSelection = (dogId: number | null) => {
    if (dogId !== null) {
      setSelectedDog(dogId);
      console.log('전달받은 id', dogId);
      const { data, isLoading, isError } = useQuery(['dogProfile'], () =>
        getDogProfile(selectedDog),
      );
      if (isLoading) {
        return <div> 로딩중 ...</div>;
      }
      if (isError) {
        return <div> 에러..</div>;
      }
      if (data) {
      }
    }
  };
  const dogProfile = {
    dogId: 1,
    image: 'img',
    name: '복슬',
    sex: 'MALE',
    breed: '요크',
    size: '중형견',
    specificity: '안물어요',
    age: 2,
    memberId: 1,
  };
  // data가 있다면 DogProfile loading 할 수 있도록! props인자로 내려줘서!

  // 시간 선택 Modal
  const onClickDateModal = useCallback(() => {
    setDateModal(!isDateModal);
  }, [isDateModal]);
  return (
    <MainContainer>
      <DogProfile profile={dogProfile} />
      {/* 시간위치 컴포넌트 */}
      <TimeLocationContainer>
        <LocationContainer>
          <MapPin fill="red" weight="fill" size={28} />
          <span className="title"> 산책 위치</span>
          <div className="map"> 전남 여수시 용천동</div>
        </LocationContainer>
        <TimeContainer>
          <div className="title"> 희망 시간 </div>
          <div className="time">
            <CaretCircleRight weight="fill" color="#D6CFA5" />
            <span>2023.09.09 토 16:00 ~ 20:00</span>
            <Plus onClick={onClickDateModal} size={16} />
          </div>
        </TimeContainer>
      </TimeLocationContainer>
      <Container>
        <div className="specificity">
          <div className="title"> 특이사항 </div>
          <textarea
            className="post"
            placeholder="ex) 강아지 똥은 꼭 잘 치워주세요!"
          ></textarea>
        </div>
        <div className="amount">
          <span className="title"> 지불금액</span>
          <span> 9000멍</span>
        </div>
      </Container>
      <button>작성완료</button>
      {isDogModal && (
        <DogSelectModal
          onClickToggleModal={onClickDogModal}
          onDogSelection={handleDogSelection}
        ></DogSelectModal>
      )}
      {isDateModal && (
        <DateModal onClickToggleModal={onClickDateModal}></DateModal>
      )}
    </MainContainer>
  );
};

export default DetailNotificationTemplate;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TimeLocationContainer = styled.div`
  & > div {
    height: 100%;
  }
`;

const LocationContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  & > .title {
    font-size: 1.1rem;
    color: black;
    margin: 0 0.5rem;
  }

  & > .map {
    background-color: #e2e2e2;
    padding: 0.2rem;
    font-size: 1rem;
  }
`;

const TimeContainer = styled.div`
  padding-bottom: 0.3rem;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #e2e2e2;
  color: black;
  & > .title {
    color: #d6cfa5;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const Container = styled.div`
  width: 80%;
  color: black;
  & > .specificity > .title {
    font-size: 1.2rem;
  }

  & > .amount {
    display: flex;
    justify-content: space-between;
  }

  & > .amount > .title {
    font-size: 1.2rem;
  }
`;

const Input = styled.input``;
