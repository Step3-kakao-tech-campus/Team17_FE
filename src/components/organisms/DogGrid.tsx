import * as S from './../../styles/organisms/DogGrid';
import Image from '../atoms/Image';
import { Plus } from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import DogModal from '../molecules/DogModal';
import AddDogModal from '../molecules/AddDogModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Dog = {
  id: number;
  image: string;
};
type dogProps = {
  dogs: Dog[];
  isOwner: boolean;
};
const DogGrid = ({ dogs, isOwner }: dogProps) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [plusModal, setPlusModal] = useState<boolean>(false);
  const [selectedDog, setSelectDog] = useState<number>(-1);

  // 강아지 상세정보 모달
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const handleImageClick = (id: number): void => {
    setOpenModal(!isOpenModal);
    setSelectDog(id);
  };

  // 강아지 추가 모달
  const onPlusToggleModal = useCallback(() => {
    setPlusModal(!plusModal);
  }, [plusModal]);
  // 강아지 추가
  const handlePlusClick = () => {
    console.log('hello');
    setPlusModal(!plusModal);
  };
  // const dogdata = dogs;
  console.log('openModal', isOpenModal);
  console.log('plusModal', plusModal);
  return (
    <>
      <S.Container>
        <S.DogsContainer>
          {isOwner ? (
            <button onClick={() => handlePlusClick()} className="btn">
              <Plus size="23" color="#777782" />
            </button>
          ) : (
            ''
          )}
          <Swiper
            freeMode={true} // 자유 모드 활성화
            grabCursor={true} // 커서를 손가락 아이콘으로 변경
            slidesPerView={'auto'}
            spaceBetween={14}
            loopPreventsSliding // 마지막 슬라이드 고정 활성화
          >
            {dogs
              ? dogs.map((dog) => (
                  <SwiperSlide key={dog.id}>
                    <S.DogItem key={dog.id}>
                      <Image
                        src={dog.image || '/images/default_profile.png'}
                        alt="강아지사진"
                        size="4"
                        onClick={() => handleImageClick(dog.id)}
                      />
                    </S.DogItem>
                  </SwiperSlide>
                ))
              : // <S.Loading>
                //   <Spinner />
                // </S.Loading>
                ''}
          </Swiper>
        </S.DogsContainer>
        {isOpenModal && (
          <DogModal
            onClickToggleModal={onClickToggleModal}
            selectedId={selectedDog}
          ></DogModal>
        )}
        {plusModal && (
          <AddDogModal onClickToggleModal={onPlusToggleModal}></AddDogModal>
        )}
      </S.Container>
    </>
  );
};

export default DogGrid;
