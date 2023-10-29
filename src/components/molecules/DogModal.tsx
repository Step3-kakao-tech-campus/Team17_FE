import { useState, PropsWithChildren } from 'react';
import * as S from '../../styles/molecules/DogModal';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';
import useDogInput from '../../hooks/useDogInput';
// import { postDog } from '../../apis/dog';
import Select from 'react-select';
import { dogBreed, dogSex, dogSize } from '../../utils/DropDown';

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
    sex: '', // Add sex property to InputState type
    breed: '',
    specificity: '',
    size: '',
    age: '0',
  });

  const handleEditClick = () => {
    setReadOnly(!isReadOnly);
  };
  // const plusDog = () => {
  //   postDog({
  //     // FIXME :: Image 전달방식 재정의 필요
  //     image: dogProfile.image,
  //     name: dogProfile.name,
  //     sex: selectSex[0],
  //     breed: selectBreed[0],
  //     specificity: dogProfile.specificity,
  //     age: dogProfile.age,
  //     size: selectSex[0],
  //   })
  //     .then(() => {
  //       alert('반려견 등록이 완료되었습니다!');
  //     })
  //     .catch((err: { request: { response: string } }) => {
  //       console.log(err.request.response);
  //     });
  // };
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none', // 테두리 없애기
      boxShadow: 'none', // 그림자 효과 없애기
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none', // 구분자 없애기
    }),
  };
  const [selectSex, setSelectSex] = useState(dogProfile.sex);
  const [selectBreed, setSelectBreed] = useState(dogProfile.breed);
  const [selectSize, setSelectSize] = useState(dogProfile.size);
  console.log('selectSex :', selectSex);
  console.log('selectBreed :', selectBreed);
  console.log('selectSize :', selectSize);

  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.CancelButton>
          <X size="24" onClick={onClickToggleModal} color="black" />
        </S.CancelButton>
        <Image src={dogProfile.image} alt="강아지세부프로필" size="5.5"></Image>
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
              <Select
                options={dogSex}
                defaultValue={dogProfile.sex}
                styles={customStyles}
                value={selectSex}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setSelectSex(selectedOption);
                  }
                }}
              />
            )}
          </div>
          <div className="block">
            <span className="title"> 견종 </span>
            {isReadOnly ? (
              <S.Input type="text" value={dogProfile.breed} readOnly />
            ) : (
              <Select
                options={dogBreed}
                defaultValue={selectBreed}
                styles={customStyles}
                value={selectBreed}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setSelectBreed(selectedOption);
                  }
                }}
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
              <Select
                options={dogSize}
                defaultValue={selectSize}
                styles={customStyles}
                value={selectSize}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setSelectSize(selectedOption);
                  }
                }}
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
                  backgroundColor: '#f7f7f7',
                  border: 'none',
                  width: '100%',
                  height: '5.5rem',
                  borderRadius: '0.5rem',
                  padding: '0.4rem',
                  marginTop: '0.4rem',
                  marginBottom: '1rem',
                  outline: 'none',
                  resize: 'none',
                }}
              ></textarea>
            ) : (
              <textarea
                value={value.specificity}
                onChange={handleOnSpecChange}
                name="specificity"
                placeholder={dogProfile.specificity}
                style={{
                  backgroundColor: '#f7f7f7',
                  border: 'none',
                  width: '100%',
                  height: '5.5rem',
                  borderRadius: '0.5rem',
                  padding: '0.4rem',
                  marginTop: '0.4rem',
                  marginBottom: '1rem',
                  outline: 'none',
                  resize: 'none',
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
