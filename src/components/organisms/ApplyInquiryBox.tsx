import { GetApply } from '../../apis/apply';
import * as S from '../../styles/molecules/ApplyInquiryBox';
import ApplyItem from '../molecules/ApplyItem';
import { useEffect, useState } from 'react';

const ApplyInquiryBox = () => {
  const [ApplyInquirylist, setApplyInquirylist] = useState([]);

  useEffect(() => {
    GetApply(1)
      .then((apply) => {
        setApplyInquirylist(apply.data.response.matchList);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

  console.log(ApplyInquirylist);

  return (
    <S.Container>
      {ApplyInquirylist.map((apply, index) => (
        <ApplyItem key={index} apply={apply} />
      ))}
    </S.Container>
  );
};

export default ApplyInquiryBox;
