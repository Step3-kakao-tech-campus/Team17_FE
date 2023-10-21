import styled from 'styled-components';
import DogProfile from '../organisms/DogProfile';
import TimeLocation from '../organisms/TimeLocation';
import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import DogSelectModal from '../molecules/DogSelectModal';
import { getDogProfile } from '../../apis/dog';

const DetailNotificationTemplate = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(true);
  const [selectedDog, setSelectedDog] = useState<number | null>(null);
  const onClickToggleModal = useCallback(() => {
    setSelectedDog(null);
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
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
  return (
    <>
      <DogProfile profile={dogProfile} />
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
      {isOpenModal && (
        <DogSelectModal
          onClickToggleModal={onClickToggleModal}
          onDogSelection={handleDogSelection}
        ></DogSelectModal>
      )}
    </>
  );
};

export default DetailNotificationTemplate;

const Container = styled.div`
  height: 25%;
  background-color: blue;
`;
