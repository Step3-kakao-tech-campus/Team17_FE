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
  isOwner: boolean;
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
function DogModal({
  onClickToggleModal,
  selectedId,
  isOwner,
}: ModalDefaultType) {
  const [edit, setEdit] = useState<boolean>(false);
  const [dogProfile, setDogProfile] = useState<dogProp>();
  const [selectSex, setSelectSex] = useState<any>();
  const [selectBreed, setSelectBreed] = useState<any>();
  const [selectSize, setSelectSize] = useState<any>();
  const [selectedImage, setSelectedImage] = useState<any>(dogProfile?.image);
  const [updateImage, setUpdateImage] = useState(selectedImage);
  const formData = new FormData();
  const [isReadOnly, setReadOnly] = useState(true);
  const [isDataUpdated, setDataUpdated] = useState(false);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  function fetchDogProfile() {
    getDogProfile(selectedId)
      .then((res) => {
        const dogInfo = res.data.response;
        setDogProfile(dogInfo);
        setSelectSex({
          value: dogInfo.sex,
          label: dogInfo.sex,
        });
        setSelectBreed({ value: dogInfo.breed, label: dogInfo.breed });
        setSelectSize({ value: dogInfo.size, label: dogInfo.size });
        setUpdateImage(dogInfo.image);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          getDogProfile(selectedId)
            .then((res) => {
              const dogInfo = res.data.response;
              setDogProfile(dogInfo);
              setSelectSex({
                value: dogInfo.sex,
                label: dogInfo.sex,
              });
              setSelectBreed({ value: dogInfo.breed, label: dogInfo.breed });
              setSelectSize({ value: dogInfo.size, label: dogInfo.size });
              setUpdateImage(dogInfo.image);
            })
            .catch((error) => {
              if (error.status) {
                switch (error.status) {
                  case 400:
                    alert('등록된 강아지가 아닙니다.');
                    break;
                  default:
                    alert('강아지를 불러오는데 실패했습니다.');
                    break;
                }
              }
            });
        } else if (error.status) {
          switch (error.status) {
            case 400:
              alert('등록된 강아지가 아닙니다.');
              break;
            default:
              alert('강아지를 불러오는데 실패했습니다.');
              break;
          }
        }
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
    },
    [formData],
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImageClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);
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
      const name = value.name ? value.name : dogProfile?.name;
      const image = selectedImage ? selectedImage : dogProfile?.image;
      const sex = selectSex.value;
      const breed = selectBreed.value;
      const specificity = value.specificity
        ? value.specificity
        : dogProfile?.specificity;
      const age = value?.age ? value.age : dogProfile?.age.toString();
      const size = selectSize.value;
      // 필드가 비어 있는지 확인
      if (!name || !image || !sex || !breed || !specificity || !age || !size) {
        alert('필수 항목을 모두 입력하세요.');
        return;
      }
      // 데이터가 비어 있지 않으면 요청을 보냄
      if (selectedImage) {
        formData.append('image', image);
      }
      formData.append('size', size);
      formData.append('sex', sex);
      formData.append('breed', breed);
      formData.append('specificity', specificity);
      formData.append('age', age);
      formData.append('size', size);
      formData.append('name', name);
      // formData.forEach((value, key) => {
      //   console.log(key + ': ' + value);
      // });

      updateDogProfile(selectedId, formData)
        .then((_res) => {
          fetchDogProfile();
          setDataUpdated(true); // 데이터 업데이트 완료 후 상태 변경
          setEdit(false); // 편집 모드 종료
          setIsChanged(true);
        })
        .catch((err) => {
          if (err.message === 'refresh') {
            updateDogProfile(selectedId, formData)
              .then((_res) => {
                fetchDogProfile();
                setEdit(false);
                setIsChanged(true);
              })
              .catch((err) => {
                if (err.status) {
                  switch (err.status) {
                    case 400:
                      alert('이미지가 존재하지 않습니다.');
                      location.reload();
                      break;
                    default:
                      alert('파일은 2MB이하입니다.');
                      location.reload();
                      break;
                  }
                }
              });
          } else if (err.status) {
            switch (err.status) {
              case 400:
                alert('이미지가 존재하지 않습니다.');
                location.reload();
                break;
              default:
                alert('파일은 2MB이하입니다.');
                location.reload();
                break;
            }
          }
        });
    }
    setReadOnly(!isReadOnly);
    // setSelectedImage(null); // 이미지 썸네일 초기화
  };

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
                    <label className="image-input-label" htmlFor="input-file">
                      <Image
                        src={updateImage || dogProfile.image}
                        alt="강아지세부프로필"
                        size="5"
                      ></Image>
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
                      value={!value.name ? dogProfile.name : value.name}
                      onChange={handleOnChange}
                      name="name"
                      defaultValue={dogProfile.name}
                      placeholder={'이름을 입력해 주세요'}
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
                    <S.Input
                      type="text"
                      value={dogProfile.age + '살'}
                      readOnly
                    />
                  ) : (
                    <S.Input
                      type="text"
                      value={!value.age ? dogProfile.age : value.age}
                      onChange={handleOnChange}
                      placeholder="숫자만 입력해 주세요"
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
                      defaultValue="강아지 소개글을 입력해주세요!"
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
                      value={
                        !value.specificity
                          ? dogProfile.specificity
                          : value.specificity
                      }
                      onChange={handleOnSpecChange}
                      name="specificity"
                      placeholder={'강아지의 특이사항을 입력해 주세요'}
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
                  )}
                </div>
                {isOwner ? (
                  <S.Button onClick={() => handleEditClick()}>
                    {isReadOnly ? '수정하기' : '수정 완료'}{' '}
                  </S.Button>
                ) : (
                  ''
                )}
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
