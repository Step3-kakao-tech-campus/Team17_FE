import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ApplyuserItem';

type ListItemProps = {
  applyUserInfo: {
    memberNickname: string;
    memberImage: string;
  };
};

const ApplyUserItem = ({ applyUserInfo }: ListItemProps) => {
  const { memberNickname, memberImage } = applyUserInfo;

  return (
    <S.Container>
      <div>
        <S.ProfileWrapper>
          <S.ProfileImgWrapper>
            <Image src={memberImage} alt="지원자 임시 이미지" />
          </S.ProfileImgWrapper>
          <span className="apply__name">{memberNickname}</span>
        </S.ProfileWrapper>
      </div>
    </S.Container>
  );
};

export default ApplyUserItem;
