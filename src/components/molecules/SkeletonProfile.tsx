import * as S from '../../styles/molecules/SkeletonProfile';
import ProfileBanner from './ProfileBanner';
import SkeletonDog from '../atoms/SkeletonDog';
import SkeletonNoti from '../atoms/SkeletonNoti';
import SkeletonUser from '../atoms/SkeletonUser';

function SkeletonProfile() {
  return (
    <S.Container>
      <ProfileBanner isOwner={true} />
      <SkeletonUser />
      <S.Banner />
      <h1> Dogs</h1>
      <SkeletonDog />
      <SkeletonNoti />
    </S.Container>
  );
}

export default SkeletonProfile;
