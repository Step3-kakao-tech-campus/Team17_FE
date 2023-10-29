import * as S from './../../styles/organisms/Profile';
import Image from '../atoms/Image';
import { useState, useRef, useCallback } from 'react';
import { PawPrint } from '@phosphor-icons/react';
import styled from 'styled-components';
import useProfileInput from '../../hooks/useProfileInput';
// import { postProfile } from '../../apis/profile';

// TODO:: Image 업로드 기능 구현
type DetailDog = {
  breed: string;
  age: number;
  image: string;
};
type Dogs = {
  id: number;
  image: string;
};
type Post = {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: DetailDog;
};
type profileProps = {
  profile: {
    id: number;
    nickname: string;
    profile_img: string;
    profileContent: string;
    dog_bowl: number;
    dogCoin: number;
    dogs: Dogs[];
    notifications: Post[];
    application: Post[];
    review: Post[];
  };
};
// /api/profile
const Profile = ({ profile }: profileProps) => {
  const [isReadOnly, setReadOnly] = useState(true);
  const { value, handleOnChange } = useProfileInput({
    profileImage: '',
    profileContent: '',
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const formData = new FormData();

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
  // // API 요청
  const handleEditClick = () => {
    // 수정 중인 경우
    if (!isReadOnly) {
      // 프로필 내용이 변경되었을 때만 업로드
      if (value.profileContent) {
        formData.append('profileContent', value.profileContent);
      }
      // 이미지가 선택되었을 때만 업로드
      if (selectedImage) {
        formData.append('profileImage', selectedImage);
      }
      if (formData.has('profileContent') || formData.has('profileImage')) {
        // 서버로 프로필 업로드 요청
        // postProfile(formData)
        //   .then(() => {
        //     alert('프로필이 수정되었습니다.');
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //   });
      }
    }
    setReadOnly(!isReadOnly);
  };

  return (
    <>
      <S.Container>
        <S.MainProfile>
          <div className="pic">
            {isReadOnly ? (
              <Image
                src="./images/onboard_dog.png"
                alt="본인프사"
                size="6.5"
              ></Image>
            ) : (
              <>
                {selectedImage ? (
                  //썸네일 표시
                  <Image
                    alt="not Found"
                    src={URL.createObjectURL(selectedImage)}
                    style={{ width: '100%', height: '100%' }}
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
                      style={{ width: '100%', height: '100%' }}
                    ></input>
                  </>
                )}
              </>
            )}
          </div>
          <S.StyleTopProfileText>
            {/* 프로필 수정눌렀을 때, 안눌렀을 때 나타나는 차이 */}
            <S.Input
              type="text"
              value={profile.nickname}
              background-color="#000000"
              style={{ fontSize: '2rem' }}
              readOnly
            />
            <S.StyleDogBab>
              <span>개 밥그릇</span>
              <div className="paw">
                <span>{profile.dog_bowl} % </span>
                <div>
                  <Image src="./images/paw.png" alt="개밥그릇"></Image>
                </div>
              </div>
            </S.StyleDogBab>
            <S.DogCoin>
              <span> 멍코인</span>
              <PawPrint weight="fill" color="#a59d52" />
              <p> {profile.dogCoin} 멍</p>
            </S.DogCoin>
          </S.StyleTopProfileText>
        </S.MainProfile>
        {isReadOnly ? (
          <S.Input
            type="text"
            value={profile.profileContent}
            style={{ fontSize: '1rem', marginTop: '1.4rem' }}
            readOnly
          />
        ) : (
          <S.Input
            type="text"
            placeholder={profile.profileContent}
            value={value.profileContent}
            onChange={handleOnChange}
            name="profileContent"
            // value={value.profileContent}
            color="#e2e2e2"
            style={{ fontSize: '1rem', marginTop: '1rem' }}
          />
        )}

        {/* 본인의 회원정보라면 */}
        {/* TODO :: 수정완료를 누르면 post요청해야함 */}
        <S.Button onClick={() => handleEditClick()}>
          {' '}
          {isReadOnly ? '프로필 수정' : '수정 완료'}{' '}
        </S.Button>
      </S.Container>
    </>
  );
};

export default Profile;

// const SPencil = styled.div`
//   position: absolute;

//   @media screen and (max-width: 768px) {
//     top: 11rem;
//     left: 6.5rem;
//   }
//   top: 11rem;
//   left: 18.5rem;
// `;
