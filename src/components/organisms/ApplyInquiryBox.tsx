import { GetApply } from '../../apis/apply';
import * as S from '../../styles/molecules/ApplyInquiryBox';
import ApplyItem from '../molecules/ApplyItem';
import { useEffect, useState } from 'react';

interface ApplyData {
  aboutMe: string;
  certification: string | null;
  experience: string;
  memberId: number;
  memberImage: string | null;
  memberNickname: string;
  notificationId: number;
  title: string;
}

const ApplyInquiryBox = () => {
  const [ApplyInquiry, setApplyInquiry] = useState();

  useEffect(() => {
    GetApply(2)
      .then((apply) => {
        console.log('apply', apply);
        setApplyInquiry(apply.data.response);
      })
      .catch((error) => {
        console.log('에러', error);
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
