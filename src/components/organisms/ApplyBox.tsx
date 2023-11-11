import * as S from '../../styles/organisms/ApplyBox';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetApplyUser, PostApply } from '../../apis/apply';
import * as T from '../../styles/organisms/WriteNotification';

import { useLocation } from 'react-router-dom';
import DescriptionBox from '../atoms/DescriptionBox';
import BackBar from '../molecules/BackBar';
import Image from '../atoms/Image';

import PageLoading from '../atoms/PageLoading';

// type ApplyUserInfo = {
//   memberImage: string;
//   memberNickname: string;
// };

const ApplyBox = () => {
  const { state } = useLocation();
  const [title, setTitle] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [certification, setCertificate] = useState('');
  const [experience, setExperience] = useState('');

  // 지원자의 프로필(이미지, 이름)을 가져온다.
  const [ApplyUserInfo, setApplyUserInfo] = useState<any>();
  // const { memberImage, memberNickname } = ApplyUserInfo;
  useEffect(() => {
    GetApplyUser()
      .then((applyUserInfo) => {
        setApplyUserInfo(applyUserInfo.data.response);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          GetApplyUser()
            .then((applyUserInfo) => {
              setApplyUserInfo(applyUserInfo.data.response);
            })
            .catch((_error) => {
              alert('지원자 정보를 불러오는데 실패했습니다.');
              navigate(-1);
            });
        } else {
          alert('지원자 정보를 불러오는데 실패했습니다.');
          navigate(-1);
        }
      });
  }, []);

  const navigate = useNavigate();
  const handleApplySubmit = () => {
    if (!title || !aboutMe || !certification || !experience) {
      alert('항목을 모두 입력해주세요!');
      return;
    }
    PostApply(state.notificationId, title, aboutMe, certification, experience)
      .then(() => {
        navigate('/applysubmit', { replace: true });
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          PostApply(
            state.notificationId,
            title,
            aboutMe,
            certification,
            experience,
          )
            .then(() => {
              navigate('/applysubmit', { replace: true });
            })
            .catch((_error) => {
              alert('지원서 작성에 실패했습니다.');
              navigate(-1);
            });
        } else {
          alert('지원서 작성에 실패했습니다.');
          navigate(-1);
        }
      });
  };

  return (
    <>
      {ApplyUserInfo ? (
        <div>
          <T.NotiTitle>
            <div className="title">
              <BackBar />
              <T.TitleInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력해 주세요"
              />
              <div className="blank">&nbsp;</div>
            </div>
          </T.NotiTitle>
          <DescriptionBox>
            <S.Container>
              <div>
                <S.Title>&nbsp;지원서를 작성해주세요.</S.Title>
                <S.ProfileWrapper>
                  <S.ProfileImage>
                    <Image
                      src={
                        ApplyUserInfo?.memberImage ||
                        '/images/default_profile.png'
                      }
                      alt="지원자 프로필"
                      size="4"
                      className="apply__profile"
                    />
                  </S.ProfileImage>
                  <span className="apply__name">
                    {ApplyUserInfo?.memberNickname}
                  </span>
                </S.ProfileWrapper>

                <S.IntroWrapper>
                  <S.ApplyTitle>자기소개</S.ApplyTitle>
                  <S.ApplyContent
                    placeholder="ex : 안녕하세요 저는 애견 미용사로 2년간 재직중인 댕댕죠아라고 합니다!"
                    name="intro"
                    id="intro"
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                  ></S.ApplyContent>
                </S.IntroWrapper>

                <S.border></S.border>

                <S.ApplyWrapper>
                  <S.ApplyTitle>자격증</S.ApplyTitle>
                  <S.ApplyContent
                    placeholder="ex : 애견 미용 자격증 보유"
                    name="certification"
                    id="certification"
                    value={certification}
                    onChange={(e) => setCertificate(e.target.value)}
                  ></S.ApplyContent>
                </S.ApplyWrapper>

                <S.border></S.border>

                <S.ApplyWrapper>
                  <S.ApplyTitle>관련 경험</S.ApplyTitle>
                  <S.ApplyContent
                    placeholder="ex : 애견 미용원에 2년간 재직하였습니다"
                    name="experience"
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  ></S.ApplyContent>
                </S.ApplyWrapper>
              </div>
              <S.ButtonWrapper onClick={handleApplySubmit}>
                <S.Button>지원 완료하기</S.Button>
              </S.ButtonWrapper>
            </S.Container>
          </DescriptionBox>
        </div>
      ) : (
        <PageLoading />
      )}
    </>
  );
};

export default React.memo(ApplyBox);
