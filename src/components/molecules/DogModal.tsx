import { useState, useEffect, useCallback, useRef } from 'react';
import * as S from '../../styles/molecules/DogModal';
import Image from '../atoms/Image';
import { X } from '@phosphor-icons/react';
import useDogInput from '../../hooks/useDogInput';
// import { postDog } from '../../apis/dog';
import Select from 'react-select';
import { dogBreed, dogSex, dogSize } from '../../utils/DropDown';
import { getDogProfile, updateDogProfile } from '../../apis/dog';
import Spinner from '../atoms/Spinner';
type ModalDefaultType = {
  onClickToggleModal: () => void;
  selectedId: number;
};

type dogProp = {
  image: string;
  name: string;
  sex: string;
  breed: string;
  size: string;
  specificity: string;
  age: number;
  memberId: number;
};
function DogModal({ onClickToggleModal, selectedId }: ModalDefaultType) {
  const [edit, setEdit] = useState<boolean>(false);
  const [dogProfile, setDogProfile] = useState<dogProp>();
  const [selectSex, setSelectSex] = useState<any>();
  const [selectBreed, setSelectBreed] = useState<any>();
  const [selectSize, setSelectSize] = useState<any>();
  const [selectedImage, setSelectedImage] = useState<any>(dogProfile?.image);
  const [updateImage, setUpdateImage] = useState(selectedImage);
  const formData = new FormData();
  const [isReadOnly, setReadOnly] = useState(true);
  const [isDataUpdated, _setDataUpdated] = useState(false);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  function fetchDogProfile() {
    getDogProfile(selectedId)
      .then((res) => {
        console.log('res강아지', res?.data.response);
        const dogInfo = res.data.response;
        setDogProfile(dogInfo);
        setSelectSex({
          value: dogInfo.sex === '암컷' ? 'FEMALE' : 'MALE',
          label: dogInfo.sex,
        });
        setSelectBreed({ value: dogInfo.breed, label: dogInfo.breed });
        setSelectSize({ value: dogInfo.size, label: dogInfo.size });
        setUpdateImage(dogInfo.image);
      })
      .catch((error) => {
        console.log('err', error);
      });
  }

  useEffect(() => {
    fetchDogProfile();
  }, []);
  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }

      setSelectedImage(e.target.files[0]);
      setEdit(!edit);
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
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const data: dataProp = {
  //   success: true,
  //   response: {
  //     image: './images/dog-sample.png',
  //     name: '복슬이',
  //     sex: 'female',
  //     breed: '시바견',
  //     size: '소형견',
  //     specificity: '저희 강아지는 수줍음이 너무 많아요',
  //     age: 3,
  //   },
  //   error: null,
  // };

  const { value, handleOnChange, handleOnSpecChange } = useDogInput({
    name: '',
    specificity: '',
    age: '',
  });

  const handleEditClick = () => {
    if (!isReadOnly) {
      const name = value?.name;
      const image = selectedImage;
      const sex = selectSex.value;
      const breed = selectBreed.value;
      const specificity = value?.specificity;
      const age = value?.age;
      const size = selectSize.value;
      console.log('sex', sex);
      console.log('breed', breed);
      console.log('size', size);
      console.log('photo', image);
      console.log('name', name);
      console.log('age', age);
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

      updateDogProfile(selectedId, formData)
        .then((res) => {
          console.log('강아지 수정완료!', res);
          fetchDogProfile();
          // setDataUpdated(true); // 데이터 업데이트 완료 후 상태 변경
          setEdit(false); // 편집 모드 종료
          setIsChanged(true);
        })
        .catch((err) => {
          console.error('강아지 수정불가');
          console.log('err', err);
        });
    }
    setReadOnly(!isReadOnly);
    setSelectedImage(null); // 이미지 썸네일 초기화
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
  // console.log('selectSex :', selectSex);
  // console.log('selectBreed :', selectBreed);
  // console.log('selectSize :', selectSize);

  return (
    <S.ModalContainer>
      <>
        <S.DialogBox>
          {dogProfile && !isDataUpdated ? (
            <>
              <S.CancelButton>
                <X size="24" onClick={onClickToggleModal} color="black" />
              </S.CancelButton>
              <div className="img">
                {isReadOnly ? (
                  <Image
                    src={updateImage || dogProfile.image}
                    alt="강아지세부프로필"
                    size="5"
                  ></Image>
                ) : edit ? (
                  <Image
                    alt="not Found"
                    src={URL.createObjectURL(selectedImage)}
                    onClick={onUploadImageClick}
                    className="profile__image"
                    size="5"
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
              </div>
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
                      defaultValue={dogProfile.name}
                      placeholder={dogProfile.name}
                    />
                  )}
                </div>
                <div className="block">
                  <span className="title"> 성별 </span>
                  {isReadOnly ? (
                    <S.Input type="text" value={dogProfile.sex} readOnly />
                  ) : (
                    // { value: 'MALE', label: '암컷' }
                    <Select
                      options={dogSex}
                      defaultValue={selectSex}
                      styles={customStyles}
                      value={selectSex}
                      onChange={(selectedOption) => {
                        console.log('selectedOption', selectedOption);
                        if (selectedOption) {
                          console.log('selectedOption', selectedOption);
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
                    <S.Input
                      type="text"
                      value={dogProfile.age + '살'}
                      readOnly
                    />
                  ) : (
                    <S.Input
                      type="text"
                      value={value.age}
                      placeholder={dogProfile.age + '살'}
                      onChange={handleOnChange}
                      defaultValue={dogProfile.age}
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
                        height: '4rem',
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
                      defaultValue={dogProfile.specificity}
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
            </>
          ) : (
            <Spinner />
          )}
        </S.DialogBox>
        <S.Backdrop
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();

            if (onClickToggleModal) {
              if (isChanged) {
                location.reload();
              }
              onClickToggleModal();
            }
          }}
        />
      </>
    </S.ModalContainer>
  );
}

export default DogModal;
