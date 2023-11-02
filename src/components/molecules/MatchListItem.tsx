import Image from '../atoms/Image';
import * as S from '../../styles/molecules/MatchListItem';
import { useState, useEffect } from 'react';
import { GetMatch } from '../../apis/apply';

interface Apply {
  name: string;
  certification: string;
  experience: string;
  image: string;
}

type ListItemProps = {
  apply: Apply;
};

const MatchListItem = ({ apply }: ListItemProps) => {
  const { image, name, certification, experience } = apply;

  const [Matchlist, setMatchlist] = useState({});

  useEffect(() => {
    GetMatch(1)
      .then((response) => {
        console.log('응답', response);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

  const handleApply = () => {
    console.log('Apply clicked');
    // 해당 지원서 페이지로 이동
  };

  const handleAccept = () => {
    console.log('Accept clicked');
    // Add logic for accepting the applicant
  };

  const handleReject = () => {
    console.log('Reject clicked');
    // Add logic for rejecting the applicant
  };

  return (
    <S.Container onClick={handleApply}>
      <S.ProfileImgWrapper>
        <Image src={image} alt="Applicant temporary image" />
      </S.ProfileImgWrapper>
      <S.TextWrapper>
        <S.InfoWrapper>
          <S.ListTitle>닉네임 : {name}</S.ListTitle>
          <S.ListTitle>자격증 : {certification}</S.ListTitle>
          <S.ListTitle>경험 : {experience}</S.ListTitle>
        </S.InfoWrapper>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <S.AcceptButton onClick={handleAccept}>수락</S.AcceptButton>
        <S.RejectButton onClick={handleReject}>거절</S.RejectButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default MatchListItem;
