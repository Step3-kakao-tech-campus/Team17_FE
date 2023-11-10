import * as S from '../../styles/organisms/ApplyBox';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetUserInfo, PostApply } from '../../apis/apply';
import * as T from '../../styles/organisms/WriteNotification';
import { Spinner } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import DescriptionBox from '../atoms/DescriptionBox';
import BackBar from '../molecules/BackBar';
import { useQuery } from 'react-query';
import Image from '../atoms/Image';

type NotiProps = {
  notificationId: number;
};

const ApplyBox = ({ notificationId }: NotiProps) => {
  const { state } = useLocation();
  console.log('state', state);
  const [title, settitle] = useState('');
  const [aboutMe, setaboutMe] = useState('');
  const [certificate, setCertificate] = useState('');
  const [experience, setExperience] = useState('');
  const { data: apply } = useQuery('apply', GetUserInfo);

  const navigate = useNavigate();
  const handleApplySubmit = useCallback(() => {
    PostApply(2, title, aboutMe, certificate, experience)
      .then((response) => {
        navigate('/applysubmit', { replace: true });
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

  return (
    <>
      {apply ? (
        <div>
          <T.NotiTitle>
            <div className="title">
              <BackBar />
              <T.TitleInput
                value={title}
                onChange={(e) => settitle(e.target.value)}
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
                      src={apply.data.response.memberImage}
                      alt="지원자 프로필"
                      size="4"
                      className="apply__profile"
                    />
                  </S.ProfileImage>
                  <span className="apply__name">
                    {apply.data.response.memberNickname}
                  </span>
                </S.ProfileWrapper>

                <S.IntroWrapper>
                  <S.ApplyTitle>자기소개</S.ApplyTitle>
                  <S.ApplyContent
                    placeholder="ex : 안녕하세요 저는 애견 미용사로 2년간 재직중인 댕댕죠아라고 합니다!"
                    name="intro"
                    id="intro"
                    value={aboutMe}
                    onChange={(e) => setaboutMe(e.target.value)}
                  ></S.ApplyContent>
                </S.IntroWrapper>

                <S.border></S.border>

                <S.ApplyWrapper>
                  <S.ApplyTitle>자격증</S.ApplyTitle>
                  <S.ApplyContent
                    placeholder="ex : 애견 미용 자격증 보유"
                    name="certification"
                    id="certification"
                    value={certificate}
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
        <Spinner />
      )}
    </>
  );
};

export default React.memo(ApplyBox);
