import { useState, PropsWithChildren, useCallback } from 'react';
import * as S from '../../styles/molecules/DogModal';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';
import useDogInput from '../../hooks/useDogInput';
import { postDog } from '../../apis/dog';

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
function DogModal({ onClickToggleModal }: PropsWithChildren<ModalDefaultType>) {
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
  const [isReadOnly, setReadOnly] = useState(true);
  const { value, handleOnChange, handleOnSpecChange } = useDogInput({
    image: '',
    name: '',
    sex: '',
    breed: '',
    specificity: '',
    size: '',
    age: 0,
  });

  const handleEditClick = () => {
    setReadOnly(!isReadOnly);
  };
  // const plusDog = () => {
  //   postDog({
  //     // FIXME :: userid는 임의로 넣은 값, 수정필요
  //     userid: 1,
  //     image: dogProfile.image,
  //     name: dogProfile.name,
  //     sex: dogProfile.sex,
  //     breed: dogProfile.breed,
  //     specificity: dogProfile.specificity,
  //     age: dogProfile.age,
  //   })
  //     .then(() => {
  //       alert('반려견 등록이 완료되었습니다!');
  //     })
  //     .catch((err: { request: { response: string } }) => {
  //       console.log(err.request.response);
  //     });
  // };

  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.CancelButton>
          <X size="24" onClick={onClickToggleModal} color="black" />
        </S.CancelButton>
        <Image src={dogProfile.image} alt="강아지세부프로필" size="8"></Image>
        <S.ProfileContainer>
          <div className="block">
            <span className="title"> 이름 </span>
            {isReadOnly ? (
              <S.Input type="text" value={dogProfile.name} readOnly />
            ) : (
              <S.Input
                type="text"
                value={value.name}
                onChange={handleOnChange}
                name="name"
                placeholder={dogProfile.name}
              />
            )}
          </div>
          <div className="block">
            <span className="title"> 성별 </span>
            {isReadOnly ? (
              <S.Input type="text" value={dogProfile.sex} readOnly />
            ) : (
              <S.Input
                type="text"
                value={value.sex}
                onChange={handleOnChange}
                name="sex"
                placeholder={dogProfile.sex}
              />
            )}
          </div>
          <div className="block">
            <span className="title"> 견종 </span>
            {isReadOnly ? (
              <S.Input type="text" value={dogProfile.breed} readOnly />
            ) : (
              <S.Input
                type="text"
                value={value.breed}
                onChange={handleOnChange}
                name="breed"
                placeholder={dogProfile.breed}
              />
            )}
          </div>
          <div className="block">
            <span className="title"> 나이 </span>
            {isReadOnly ? (
              <S.Input type="text" value={dogProfile.age + '살'} readOnly />
            ) : (
              <S.Input
                type="text"
                value={value.age + '살'}
                placeholder={dogProfile.age + '살'}
                onChange={handleOnChange}
                name="age"
              />
            )}
          </div>
          <div className="block">
            <span className="title">분류 </span>
            {isReadOnly ? (
              <S.Input type="text" value={dogProfile.size} readOnly />
            ) : (
              <S.Input
                type="text"
                value={value.size}
                onChange={handleOnChange}
                name="size"
                placeholder={dogProfile.size}
              />
            )}
          </div>
          <div className="special">
            <span>특이사항</span>
            {isReadOnly ? (
              <textarea
                value={dogProfile.specificity}
                readOnly
                style={{
                  backgroundColor: '#e2e2e2',
                  border: 'none',
                  width: '100%',
                  height: '3rem',
                  borderRadius: '0.5rem',
                  padding: '0.4rem',
                  marginTop: '0.4rem',
                }}
              ></textarea>
            ) : (
              <textarea
                value={value.specificity}
                onChange={handleOnSpecChange}
                name="specificity"
                placeholder={dogProfile.specificity}
                style={{
                  backgroundColor: '#e2e2e2',
                  border: 'none',
                  width: '100%',
                  height: '3rem',
                  borderRadius: '0.5rem',
                  padding: '0.4rem',
                  marginTop: '0.4rem',
                }}
              ></textarea>
            )}
          </div>
          <S.Button onClick={() => handleEditClick()}>
            {' '}
            {isReadOnly ? '수정하기' : '수정 완료'}{' '}
          </S.Button>
        </S.ProfileContainer>
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

export default DogModal;
