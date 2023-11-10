import { useLocation } from 'react-router-dom';
import { GetApply } from '../../apis/apply';
import * as S from '../../styles/molecules/ApplyInquiryBox';
import ApplyItem from '../molecules/ApplyItem';
import { useEffect, useState } from 'react';

const ApplyInquiryBox = () => {
  const [ApplyInquiry, setApplyInquiry] = useState();
  const { state } = useLocation();
  console.log('state', state);

  useEffect(() => {
    GetApply(state.applicationId)
      .then((apply) => {
        console.log('apply', apply);
        setApplyInquiry(apply.data.response);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          GetApply(state.applicationId)
            .then((apply) => {
              console.log('apply', apply);
              setApplyInquiry(apply.data.response);
            })
            .catch((error) => {
              console.log('에러', error);
            });
        } else {
          console.log('에러', error);
        }
      });
  }, []);

  console.log('test', ApplyInquiry);

  return (
    <S.Container>
      {ApplyInquiry ? <ApplyItem apply={ApplyInquiry} /> : ''}
    </S.Container>
  );
};

export default ApplyInquiryBox;

// response: aboutMe: '저에 관해서 소개를 하겠습니다. 2번 지원자';
// certification: null;
// experience: '강아지 유치원 2년 근무';
// memberId: 2;
// memberImage: null;
// memberNickname: 'test2';
// notificationId: 2;
// title: '지원서 제목2';
