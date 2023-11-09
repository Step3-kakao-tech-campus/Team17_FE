import { useState, PropsWithChildren, useEffect } from 'react';
import * as S from '../../styles/molecules/DogSelectedModal';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';
import { getDog } from '../../apis/dog';
import Spinner from '../atoms/Spinner';

type ModalDefaultType = {
  onClickToggleModal: () => void;
  onDogSelection: (dogId: number) => void;
};

export default function DogSelectModal({
  onClickToggleModal,
  onDogSelection,
}: PropsWithChildren<ModalDefaultType>) {
  const [dogsInfo, setDogsInfo] = useState<any>([]);

  useEffect(() => {
    getDog()
      .then((res) => {
        setDogsInfo(res.data.response.dogs);
        console.log('res', res.data.response.dogs);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);
  // if (data) {
  //   console.log('dogdata:', data);
  // }
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
            {dogsInfo ? (
              dogsInfo.map((dog: any) => {
                console.log('dog양호', dog);
                return (
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
                    <Image src={dog.dogImage} alt="강아지사진" />

                    <span>{dog.dogName}</span>
                  </div>
                );
              })
            ) : (
              <Spinner />
            )}
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
