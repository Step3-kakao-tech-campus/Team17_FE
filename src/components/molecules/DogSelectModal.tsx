import { useState, PropsWithChildren, useEffect } from 'react';
import * as S from '../../styles/molecules/DogSelectedModal';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';
import { getDog } from '../../apis/dog';
import Spinner from '../atoms/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';

type ModalDefaultType = {
  onClickToggleModal: () => void;
  onDogSelection: (dogId: number) => void;
};

export default function DogSelectModal({
  onClickToggleModal,
  onDogSelection,
}: PropsWithChildren<ModalDefaultType>) {
  const navigate = useNavigate();
  const [dogsInfo, setDogsInfo] = useState<any>([]);
  // const data = {
  //   success: true,
  //   response: {
  //     dogs: [
  //       {
  //         dogId: 1,
  //         dogImage: './images/dog-sample.png',
  //         dogName: '춘식이',
  //       },
  //       {
  //         dogId: 2,
  //         dogImage: './images/dog-sample.png',
  //         dogName: '밥먹자',
  //       },
  //       {
  //         dogId: 3,
  //         dogImage: './images/dog-sample.png',
  //         dogName: '야옹야옹',
  //       },
  //     ],
  //   },
  //   error: null,
  // };
  useEffect(() => {
    getDog()
      .then((res) => {
        setDogsInfo(res.data.response.dogs);
      })
      .catch((err) => {
        if (err.message === 'refresh') {
          getDog()
            .then((res) => {
              setDogsInfo(res.data.response.dogs);
            })
            .catch((err) => {
              if (err.status) {
                switch (err.status) {
                  default:
                    alert('등록된 강아지가 없습니다.');
                    navigate('/');
                    break;
                }
              }
            });
        } else if (err.status) {
          switch (err.status) {
            default:
              alert('등록된 강아지가 없습니다.');
              navigate('/');
              break;
          }
        }
      });
  }, []);

  const [selectedDog, setSelectedDog] = useState<null | number>(null);

  const handleDogSelection = (dogId: number) => {
    setSelectedDog(dogId);
  };

  // 상위props로 dogId 전달
  const handleConfirmation = (dogId: any) => {
    if (selectedDog !== null) {
      onDogSelection(dogId);
      onClickToggleModal();
    }
  };
  return (
    <S.ModalContainer>
      <S.DialogBox>
        <>
          <S.CancelButton>
            <div>&nbsp;</div>
            <div className="title"> 등록할 강아지를 선택해 주세요</div>
            <X size="24" onClick={onClickToggleModal} color="black" />
          </S.CancelButton>
          <S.DogContainer>
            {/* dogId : 1 dogImage : "1번 강아지 이미지" dogName : "강아지이름1" */}
            <Swiper
              freeMode={true} // 자유 모드 활성화
              grabCursor={true} // 커서를 손가락 아이콘으로 변경
              slidesPerView={'auto'}
              spaceBetween={20}
              loopPreventsSliding // 마지막 슬라이드 고정 활성화
            >
              {dogsInfo ? (
                dogsInfo.map((dog: any) => (
                  <SwiperSlide key={dog.dogId}>
                    <div className="dog" key={dog.dogId}>
                      <S.Input
                        type="radio"
                        id={`dog-${dog.dogId}`} // 라벨과 연결하기 위한 ID 설정
                        name="selectedDog"
                        value={dog.dogId}
                        checked={selectedDog === dog.dogId}
                        onChange={() => handleDogSelection(dog.dogId)}
                      />
                      <S.Label
                        htmlFor={`dog-${dog.dogId}`}
                        onClick={() => handleDogSelection(dog.dogId)}
                      ></S.Label>
                      <S.ImageWrapper>
                        <Image
                          src={dog.dogImage || '/images/default_profile.png'}
                          alt="강아지사진"
                          size="4"
                        />
                      </S.ImageWrapper>

                      <span className="dog__name">{dog.dogName}</span>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <Spinner />
              )}
            </Swiper>
          </S.DogContainer>
          {/* 강아지 선택이 안되어 있으면 클릭이 안됌 */}
          <S.Button
            onClick={() => handleConfirmation(selectedDog)}
            disabled={selectedDog === null}
          >
            선택완료
          </S.Button>
        </>
      </S.DialogBox>

      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
}
