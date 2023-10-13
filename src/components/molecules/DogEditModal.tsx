import { useState, PropsWithChildren } from 'react';
import * as S from '../../styles/molecules/DogEditModal';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';

type ModalDefaultType = {
  onClickToggleModal: () => void;
};

type dogProp = {
  image: string;
  name: string;
  sex: string;
  breed: string;
  size: string;
  specificity: string;
  age: number;
};
type dataProp = {
  success: boolean;
  response: dogProp;
  error: null;
};
function DogEditModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
  const data: dataProp = {
    success: true,
    response: {
      image: './images/dog-sample.png',
      name: '복슬이',
      sex: 'female',
      breed: '시바견',
      size: '소형견',
      specificity: '저희 강아지는 수줍음이 너무 많아요',
      age: 3,
    },
    error: null,
  };
  const dogProfile: dogProp = data.response;

  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.CancelButton>
          <X size="24" onClick={onClickToggleModal} color="black" />
        </S.CancelButton>
        <S.MainContainer>
          <Image
            src="./images/dog-sample.png"
            alt="강아지세부프로필"
            size="6"
          ></Image>
          <S.DogInfo>
            <div className="block">
              <span className="title"> 이름 </span>
              <S.Input type="text" placeholder={dogProfile.name} />
            </div>
            <div className="block">
              <span className="title"> 성별 </span>
              <S.Input type="text" placeholder={dogProfile.sex} />
            </div>
            <div className="block">
              <span className="title"> 견종 </span>
              <S.Input type="text" placeholder={dogProfile.breed} />
            </div>
            <div className="block">
              <span className="title"> 나이 </span>
              <S.Input type="text" placeholder={dogProfile.age + '살'} />
            </div>
            <div className="block">
              <span className="title">분류 </span>
              <S.Input type="text" placeholder={dogProfile.size} />
            </div>
          </S.DogInfo>
        </S.MainContainer>
        <S.UniqueInfo>
          <div>특이사항</div>
          <textarea
            placeholder="ex) 저희 강아지는 수줍음이 많아서 낮을 많이 가립니다. 그래서 천천히 다가가주시길 바랍니다."
            style={{
              backgroundColor: '#e2e2e2',
              border: 'none',
              width: '100%',
              height: '100%',
              borderRadius: '0.5rem',
            }}
          ></textarea>
        </S.UniqueInfo>
        <S.Button> 등록하기 </S.Button>
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

export default DogEditModal;
