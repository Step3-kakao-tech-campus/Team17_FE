import * as S from '../../styles/molecules/SkeletonProfile';
import ProfileBanner from './ProfileBanner';
import SkeletonDog from '../atoms/SkeletonDog';
import SkeletonNoti from '../atoms/SkeletonNoti';
import SkeletonUser from '../atoms/SkeletonUser';
import BottomNavBar from './BottomNavBar';

function SkeletonProfile() {
  return (
    <S.Container>
      <ProfileBanner isOwner={false} />
      <SkeletonUser />
      <SkeletonDog />
      <SkeletonNoti />
      <BottomNavBar />
    </S.Container>
  );
}

export default SkeletonProfile;
