import * as S from './../../styles/organisms/Profile';
import Image from '../atoms/Image';
import { useState, useRef, useCallback } from 'react';
import { PawPrint } from '@phosphor-icons/react';
import useProfileInput from '../../hooks/useProfileInput';
import { postProfile } from '../../apis/profile';
import { comma } from '../../utils/convert';
import ReviewModal from '../molecules/ReviewModal';

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
    if (!isReadOnly && selectedImage) {
      formData.append('profileContent', value.profileContent);
      formData.append('profileImage', selectedImage);
      // for (const pair of formData.entries()) {
      //   console.log('formData이야', pair[0] + ', ' + pair[1]); // 각 데이터의 이름과 값 출력
      // }
      postProfile(formData)
        .then((res) => {
          alert('프로필이 수정되었습니다.');
          setUpdatedProfileImage(res.data.response.profileImage);
          setUpdatedProfileContent(res.data.response.profileContent);
          setSelectedImage(null);
          // location.reload();
        })
        .catch((err) => {
          alert('파일 크기는 2MB를 넘을 수 없습니다.');
          console.error('에러', err);
        });
    }

    setReadOnly(!isReadOnly);
  };
  console.log('프로필 이미지', profileImage);
  const onClickRevieWModal = useCallback(() => {
    setReviewModal(!reviewModal);
  }, [reviewModal]);

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
                size="6.5"
              ></Image>
            ) : (
              <>
                {selectedImage ? (
                  //썸네일 표시
                  <Image
                    alt="not Found"
                    size="6.5"
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
              value={nickname || ''}
              background-color="#000000"
              style={{ fontSize: '1.3rem' }}
              readOnly
            />
            <div>
              <S.StyleDogBab>
                <span>개 밥그릇</span>
                <div className="paw">
                  <span>{dogBowl} % </span>
                  <div>
                    <Image src="./images/paw.png" alt="개밥그릇"></Image>
                  </div>
                </div>
              </S.StyleDogBab>
              {/* 자기 프로필이 아니라면 사라짐 */}
              {isOwner ? (
                <S.DogCoin>
                  <span> 멍코인</span>
                  <PawPrint weight="fill" color="#a59d52" />
                  <p> {comma(coin)} 멍</p>
                </S.DogCoin>
              ) : (
                ''
              )}
            </div>
          </S.StyleTopProfileText>
        </S.MainProfile>
        {isOwner ? (
          <span className="review" onClick={onClickRevieWModal}>
            미 작성 리뷰 보기
          </span>
        ) : (
          ''
        )}
        {isReadOnly ? (
          <S.Input
            type="text"
            value={updatedProfileContent || ''}
            style={{ fontSize: '1rem', marginTop: '1.4rem' }}
            readOnly
          />
        ) : (
          <S.Input
            type="text"
            placeholder={profileContent}
            value={value.profileContent || ''}
            onChange={handleOnChange}
            name="profileContent"
            // value={value.profileContent}
            color="#e2e2e2"
            style={{ fontSize: '1rem', marginTop: '1rem' }}
          />
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
        {reviewModal && (
          <ReviewModal onClickToggleModal={onClickRevieWModal}></ReviewModal>
        )}
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
