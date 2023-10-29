import * as S from '../../styles/templates/DetailNotificationTemplate';
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

  // 선택한 강아지Id로 DataFetching
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

  // 시간 선택 Modal
  const onClickDateModal = useCallback(() => {
    setDateModal(!isDateModal);
  }, [isDateModal]);

  return (
    <S.MainContainer>
      <DogProfile profile={dogProfile} />
      {/* 시간위치 컴포넌트 */}
      <S.TimeLocationContainer>
        <S.LocationContainer>
          <MapPin fill="red" weight="fill" size={28} />
          <span className="title"> 산책 위치</span>
          <div className="map"> 전남 여수시 용천동</div>
        </S.LocationContainer>
        <S.TimeContainer>
          <div className="title"> 희망 시간 </div>
          <div className="time">
            <CaretCircleRight weight="fill" color="#D6CFA5" />
            <span>2023.09.09 토 16:00 ~ 20:00</span>
            <Plus onClick={onClickDateModal} size={16} />
          </div>
        </S.TimeContainer>
      </S.TimeLocationContainer>
      <S.Container>
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
      </S.Container>
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
    </S.MainContainer>
  );
};

export default DetailNotificationTemplate;
