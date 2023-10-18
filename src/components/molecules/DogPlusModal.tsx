import { useState, PropsWithChildren } from 'react';
import * as S from '../../styles/molecules/DogEditModal';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';
// import { postDog } from '../../apis/dog';
import useDogInput from '../../hooks/useDogInput';
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
export default function DogEditModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
  const { value, handleOnChange, handleOnSpecChange } = useDogInput({
    image: '',
    name: '',
    sex: '',
    breed: '',
    specificity: '',
    size: '',
    age: 0,
  });
  // DropDown Style
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none', // 테두리 없애기
      boxShadow: 'none', // 그림자 효과 없애기
    }),
  };

  const [selectSex, setSelectSex] = useState(dogSex[0]);
  const [selectBreed, setSelectBreed] = useState(dogBreed[0]);
  const [selectSize, setSelectSize] = useState(dogSize[0]);

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

  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.CancelButton>
          <X size="24" onClick={onClickToggleModal} color="black" />
        </S.CancelButton>
        <S.MainContainer>
          <Image
            src="./images/exampleDog.png"
            alt="강아지추가"
            size="6"
          ></Image>
          <S.DogInfo>
            <div className="block">
              <span className="title"> 이름 </span>
              <S.Input
                type="text"
                name="name"
                value={value.name}
                onChange={handleOnChange}
              />
            </div>
            <div className="block">
              <span className="title"> 성별 </span>
              {/* <S.Input
                type="text"
                name="sex"
                value={value.sex}
                onChange={handleOnChange}
              /> */}
              <Select
                options={dogSex}
                defaultValue={dogSex[0]}
                styles={customStyles}
                value={selectSex}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setSelectSex(selectedOption);
                  }
                }}
              />
            </div>
            <div className="block">
              <span className="title"> 견종 </span>
              <Select
                options={dogBreed}
                defaultValue={dogBreed[0]}
                styles={customStyles}
                value={selectBreed}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setSelectSex(selectedOption);
                  }
                }}
              />
            </div>
            <div className="block">
              <span className="title"> 나이 </span>
              <S.Input
                type="text"
                name="age"
                value={value.age}
                onChange={handleOnChange}
              />
            </div>
            <div className="block">
              <span className="title">분류 </span>
              <Select
                options={dogSize}
                defaultValue={dogSize[0]}
                styles={customStyles}
                value={selectSize}
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    setSelectSex(selectedOption);
                  }
                }}
              />
            </div>
          </S.DogInfo>
        </S.MainContainer>
        <S.UniqueInfo>
          <div>특이사항</div>
          <textarea
            placeholder="ex) 저희 강아지는 수줍음이 많아서 낮을 많이 가립니다. 그래서 천천히 다가가주시길 바랍니다."
            name="specificity"
            value={value.specificity}
            onChange={handleOnSpecChange}
            style={{
              backgroundColor: '#e2e2e2',
              border: 'none',
              width: '100%',
              height: '100%',
              borderRadius: '0.5rem',
              outline: 'none',
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
