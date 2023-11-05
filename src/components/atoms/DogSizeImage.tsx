import Image from './Image';
import styled from 'styled-components';

type DogInfoProp = {
  children?: string;
  size?: string;
  mark?: boolean;
};

const DogSizeImage = ({ size, children, mark }: DogInfoProp) => {
  const markColor = mark ? '#a59d52' : '#e2e2e2';
  const imageSize =
    children === '소형견'
      ? '1.5rem'
      : children === '중형견'
      ? '2.5rem'
      : children === '대형견'
      ? '3.5rem'
      : '';
  return (
    <DogContainer markColor={markColor}>
      <PictureContainer imageSize={imageSize}>
        {mark ? (
          <Image
            src="/images/dog-size-check.png"
            alt="강아지 사이즈"
            size={size}
          />
        ) : (
          <Image src="/images/dog-size.png" alt="강아지 사이즈" size={size} />
        )}
      </PictureContainer>
      <div>{children}</div>
    </DogContainer>
  );
};

export default DogSizeImage;

const DogContainer = styled.div<{ markColor: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.markColor};
`;
const PictureContainer = styled.div<{ imageSize: string }>`
  width: ${(props) => props.imageSize};
  height: ${(props) => props.imageSize};
`;
