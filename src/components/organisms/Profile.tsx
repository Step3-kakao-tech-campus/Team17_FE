import * as S from './../../styles/organisms/Profile';
import Image from '../atoms/Image';
import { useState, useRef, useCallback } from 'react';
import { Pencil } from '@phosphor-icons/react';
import styled from 'styled-components';
import useProfileInput from '../../hooks/useProfileInput';
import { postProfile } from '../../apis/profile';

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

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0].name);
    },
    [],
  );

  const onUploadImageClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  // const uploadProfile = () => {
  //   postProfile({
  //     profileConent: value.profileContent,
  //     profileImage: value.profileImage,
  //   })
  //     .then(() => {
  //       alert(' 프로필이 수정되었습니다.');
  //     })
  //     .catch((err: { request: { response: string } }) => {
  //       console.log(err.request.response);
  //     });
  // };

  const handleEditClick = () => {
    setReadOnly(!isReadOnly);
  };
  console.log('profileContent', value.profileContent);
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
                  <Image
                    alt="not Found"
                    src={URL.createObjectURL(selectedImage)}
                  ></Image>
                ) : (
                  ''
                )}
                <input
                  type="file"
                  accept="image/*"
                  name="myImage"
                  ref={inputRef}
                  onChange={onUploadImage}
                  onClick={onUploadImageClick}
                ></input>
              </>
            )}

            {isReadOnly ? (
              ''
            ) : (
              <SPencil>
                <Pencil></Pencil>
              </SPencil>
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
              <div>
                <span>{profile.dog_bowl} % </span>
                <Image src="./images/paw.png" alt="개밥그릇"></Image>
              </div>
            </S.StyleDogBab>
            <S.DogCoin>
              <span> 멍코인</span>
              <Image src="./images/paw1.png" alt="멍코인" size="1.5"></Image>
              <p> &nbsp;</p>
              <p> &nbsp;</p>
              <p> {profile.dogCoin} 멍</p>
            </S.DogCoin>
          </S.StyleTopProfileText>
        </S.MainProfile>
        {isReadOnly ? (
          <S.Input
            type="text"
            value={profile.profileContent}
            style={{ fontSize: '1.2rem', marginTop: '1rem' }}
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
            style={{ fontSize: '1.2rem', marginTop: '1rem' }}
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

const SPencil = styled.div`
  position: absolute;

  @media screen and (max-width: 768px) {
    top: 11rem;
    left: 6.5rem;
  }
  top: 11rem;
  left: 18.5rem;
`;
