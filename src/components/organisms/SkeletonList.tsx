import SkeletonItem from '../molecules/SkeletonItem';
import * as S from '../../styles/organisms/SkeletonList';

const SkeletonList = () => {
  return (
    <S.Container>
      {new Array(3).fill('').map((_, i) => (
        <div key={i}>
          <SkeletonItem />
        </div>
      ))}
    </S.Container>
  );
};

export default SkeletonList;
