import { useState, PropsWithChildren, useCallback, useRef } from 'react';
import * as S from '../../styles/molecules/DogEditModal';
import Image from '../atoms/Image';
// import { postDog } from '../../apis/dog';
import { Pen, X } from '@phosphor-icons/react';
import useDogInput from '../../hooks/useDogInput';
import Select from 'react-select';
import { dogBreed, dogSex, dogSize } from '../../utils/DropDown';
import { postDogProfile } from '../../apis/dog';

type ModalDefaultType = {
  onClickToggleModal: () => void;
};

// type dogProp = {
//   image: string;
//   name: string;
//   sex: string;
//   breed: string;
//   size: string;
//   specificity: string;
//   age: number;
// };
// type dataProp = {
//   success: boolean;
//   response: dogProp;
//   error: null;
// };
export default function AddDogModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
  const [edit, setEdit] = useState<boolean>(false);
  const { value, handleOnChange, handleOnSpecChange } = useDogInput({
    name: '',
    specificity: '',
    age: '',
  });
  const formData = new FormData();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0].name);
    },
    [formData],
  );

  const onUploadImageClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  // DropDown Style
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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectSex, setSelectSex] = useState(dogSex[0]);
  const [selectBreed, setSelectBreed] = useState(dogBreed[0]);
  const [selectSize, setSelectSize] = useState(dogSize[0]);

  // test
  // console.log('sex', selectSex);
  // console.log('breed', selectBreed);
  // console.log('size', selectSize);
  // console.log('photo', selectedImage);
  // console.log('name', value.name);
  // console.log('age', value.age);

  const handleEnrollClick = () => {
    // 필드의 데이터 가져오기
    const name = value.name;
    const image = selectedImage;
    const sex = selectSex.value;
    const breed = selectBreed.value;
    const specificity = value.specificity;
    const age = value.age;
    const size = selectSize.value;
    // 필드가 비어 있는지 확인
    if (!name || !image || !sex || !breed || !specificity || !age || !size) {
      alert('필수 항목을 모두 입력하세요.');
      return;
    }
    // 데이터가 비어 있지 않으면 요청을 보냄
    formData.append('name', name);
    formData.append('image', image);
    formData.append('sex', sex);
    formData.append('breed', breed);
    formData.append('specificity', specificity);
    formData.append('age', age);
    formData.append('size', size);
    postDogProfile(formData)
      .then(() => {
        alert('강아지 프로필이 등록되었습니다.');
        location.reload();
        onClickToggleModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.CancelButton>
          <X size="24" onClick={onClickToggleModal} color="black" />
        </S.CancelButton>
        <S.MainContainer>
          <>
            <S.ImageContainer>
              {edit ? (
                <>
                  {selectedImage ? (
                    //썸네일 표시
                    <Image
                      alt="not Found"
                      src={URL.createObjectURL(selectedImage)}
                      className="profile__image"
                    ></Image>
                  ) : (
                    <>
                      <label className="input-file-button" htmlFor="input-file">
                        업로드
                      </label>
                      <input
                        id="input-file"
                        type="file"
                        accept="image/*"
                        name="myImage"
                        ref={inputRef}
                        onChange={onUploadImage}
                        onClick={onUploadImageClick}
                        style={{ display: 'none' }}
                      ></input>
                    </>
                  )}
                </>
              ) : (
                <Image
                  src="./images/dog_profile.png"
                  alt="강아지추가"
                  onClick={() => setEdit(!edit)}
                ></Image>
              )}
            </S.ImageContainer>
          </>
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
                    setSelectBreed(selectedOption);
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
                    setSelectSize(selectedOption);
                  }
                }}
              />
            </div>
          </S.DogInfo>
        </S.MainContainer>
        <S.UniqueInfo>
          <div>특이사항</div>
          <textarea
            placeholder="강아지의 특이사항을 입력해주세요."
            name="specificity"
            value={value.specificity}
            onChange={handleOnSpecChange}
            style={{
              backgroundColor: '#f7f7f7',
              border: 'none',
              width: '100%',
              height: '7rem',
              borderRadius: '0.5rem',
              outline: 'none',
            }}
          ></textarea>
        </S.UniqueInfo>
        <S.Button onClick={() => handleEnrollClick()}> 등록하기 </S.Button>
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
