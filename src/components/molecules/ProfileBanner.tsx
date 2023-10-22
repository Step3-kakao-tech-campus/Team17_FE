import * as S from '../../styles/molecules/ProfileBanner';
import { deleteCookie } from '../../utils/cookie';
import Image from '../atoms/Image';
const ProfileBanner = () => {
  return (
    <>
      <S.Container>
        <S.TitleWrapper>
          <Image src="./images/dog.png" alt="배너이미지" size="1.5" />
          <h1>모르는 개 산책</h1>
        </S.TitleWrapper>
        {/* CHECK : 'user' 값이 맞는지 */}
        <button onClick={() => deleteCookie('user')}>로그아웃</button>
      </S.Container>
    </>
  );
};

export default ProfileBanner;
