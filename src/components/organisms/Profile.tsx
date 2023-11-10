import * as S from './../../styles/organisms/Profile';
import Image from '../atoms/Image';
import { useState, useRef, useCallback } from 'react';
import { PawPrint } from '@phosphor-icons/react';
import useProfileInput from '../../hooks/useProfileInput';
import { postProfile } from '../../apis/profile';
import { comma } from '../../utils/convert';
import ReviewModal from '../molecules/ReviewModal';
import PageLoading from '../atoms/PageLoading';

type profileProps = {
  id: number;
  nickname: string;
  profileImage: string;
  profileContent: string;
  dogBowl: number;
  coin: number;
  isOwner: boolean;
};
// /api/profile
const Profile = ({
  id,
  nickname,
  profileImage,
  profileContent,
  dogBowl,
  coin,
  isOwner,
}: profileProps) => {
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [isReadOnly, setReadOnly] = useState(true);
  const { value, handleOnChange } = useProfileInput({
    profileImage: null,
    profileContent: '',
  });
  const [updatedProfileImage, setUpdatedProfileImage] = useState(profileImage);
  const [updatedProfileContent, setUpdatedProfileContent] =
    useState(profileContent);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const formData = new FormData();
  const [isLoading, setIsLoading] = useState(false);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      setSelectedImage(e.target.files[0]);
      console.log('사진이름', e.target.files[0]);
    },
    [formData],
  );

  const onUploadImageClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);
  // API 요청
  const handleEditClick = async () => {
    // 수정 중인 경우
    if (!isReadOnly) {
      setIsLoading(true);
      if (selectedImage) {
        formData.append('profileImage', selectedImage);
      }
      if (value.profileContent) {
        formData.append('profileContent', value.profileContent);
      }

      // for (const pair of formData.entries()) {
      //   console.log('formData이야', pair[0] + ', ' + pair[1]); // 각 데이터의 이름과 값 출력
      // }
      postProfile(formData)
        .then((res) => {
          console.log('프로필 수정 성공', res);
          setUpdatedProfileImage(res.data.response.profileImage);
          setUpdatedProfileContent(res.data.response.profileContent);
          setSelectedImage(null);
          // location.reload();
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          alert('파일 크기는 2MB를 넘을 수 없습니다.');
          console.error('에러', err);
          setSelectedImage(null);
        });
    }

    setReadOnly(!isReadOnly);
  };
  console.log('프로필 이미지', profileImage);
  const onClickRevieWModal = useCallback(() => {
    setReviewModal(!reviewModal);
  }, [reviewModal]);

  const defaultProfileImage = '/images/default_profile.png';

  return (
    <>
      <S.Container>
        <S.MainProfile>
          <div className="pic">
            {isReadOnly ? (
              // TODO:: IMG 확인필요
              <Image
                src={updatedProfileImage}
                alt="사용자 프로필 이미지"
                size="4.5"
              ></Image>
            ) : (
              <>
                {selectedImage ? (
                  //썸네일 표시
                  <Image
                    alt="not Found"
                    size="4.5"
                    src={URL.createObjectURL(
                      selectedImage || defaultProfileImage,
                    )}
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
                    ></input>
                  </>
                )}
              </>
            )}
          </div>

          <S.StyleTopProfileText>
            {/* 프로필 수정눌렀을 때, 안눌렀을 때 나타나는 차이 */}
            <S.InputWrapper>
              <S.Input type="text" value={nickname || ''} readOnly />
            </S.InputWrapper>
            {isReadOnly ? (
              <S.Input
                placeholder="소개글이 없습니다."
                type="text description"
                value={updatedProfileContent || ''}
                readOnly
              />
            ) : (
              <S.Input
                type="text description"
                placeholder="소개글이 없습니다."
                value={value.profileContent || ''}
                onChange={handleOnChange}
                name="profileContent"
                // value={value.profileContent}
                color="#e2e2e2"
              />
            )}
            <S.StyleDogBab>
              <div className="paw">
                <Image
                  className="dog__bowl"
                  src="./images/paw1.png"
                  alt="개밥그릇"
                  size="1"
                />
                <span>개밥그릇 {dogBowl}%</span>
              </div>
              {/* 자기 프로필이 아니라면 사라짐 */}
              {isOwner ? (
                <S.DogCoin>
                  <PawPrint weight="fill" color="#f84514" />
                  <p> {comma(coin)} 멍</p>
                </S.DogCoin>
              ) : (
                ''
              )}
            </S.StyleDogBab>
          </S.StyleTopProfileText>
        </S.MainProfile>
        <S.ButtonWrapper>
          {isOwner ? (
            <S.Button className="review" onClick={onClickRevieWModal}>
              미작성 리뷰 보기
            </S.Button>
          ) : (
            ''
          )}
          {/* 본인의 회원정보라면 */}
          {/* TODO :: 수정완료를 누르면 post요청해야함 */}
          {isOwner ? (
            <S.Button onClick={() => handleEditClick()}>
              {' '}
              {isReadOnly ? '프로필 수정' : '수정 완료'}{' '}
            </S.Button>
          ) : (
            ''
          )}
        </S.ButtonWrapper>
        {reviewModal && (
          <ReviewModal onClickToggleModal={onClickRevieWModal}></ReviewModal>
        )}
      </S.Container>
      {isLoading ? <PageLoading /> : null}
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
