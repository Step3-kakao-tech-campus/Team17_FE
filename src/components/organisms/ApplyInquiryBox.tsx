import { useLocation } from 'react-router-dom';
import { GetApply } from '../../apis/apply';
import * as S from '../../styles/molecules/ApplyInquiryBox';
import ApplyItem from '../molecules/ApplyItem';
import { useEffect, useState } from 'react';
import Spinner from '../atoms/Spinner';

const ApplyInquiryBox = () => {
  const [ApplyInquiry, setApplyInquiry] = useState();
  const { state } = useLocation();

  useEffect(() => {
    GetApply(state.applicationId)
      .then((apply) => {
        setApplyInquiry(apply.data.response);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          GetApply(state.applicationId).then((apply) => {
            setApplyInquiry(apply.data.response);
          });
        } else {
          alert('지원서를 불러오는데 실패했습니다.');
        }
      });
  }, []);

  return (
    <S.Container>
      {ApplyInquiry ? <ApplyItem apply={ApplyInquiry} /> : <Spinner />}
    </S.Container>
  );
};

export default ApplyInquiryBox;
