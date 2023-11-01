import * as S from '../../styles/molecules/ApplyInquiryBox';
import ApplyItem from '../molecules/ApplyItem';
// import { useMutation } from 'react-query';
// import { PostReview } from '../../apis/review';

const ApplyInquiryBox = () => {
  const data = [
    {
      apply: {
        name: '댕댕죠아',
        image: '/images/dog-sample.png',
        intro: '안녕하세요 저는 댕댕죠아라고 합니다. ',
        certification: '애견 미용 자격증 보유하고 있습니다.',
        experience: '애견 미용원에 2년간 재직하였습니다.',
      },
      id: 1,
    },
  ];

  return (
    <S.Container>
      {data.map((item) => (
        <ApplyItem
          key={item.id} // user id
          apply={item.apply}
        />
      ))}
    </S.Container>
  );
};

export default ApplyInquiryBox;
