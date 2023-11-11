import Image from './Image';
import styled from 'styled-components';

type DogInfoProp = {
  children?: string;
  size?: string;
  mark?: boolean;
};

const DogSizeImage = ({ size, children, mark }: DogInfoProp) => {
  const markColor = mark ? '#a59d52' : '#e2e2e2';
  const imagesize =
    children === '소형견'
      ? '1.7rem'
      : children === '중형견'
      ? '2.3rem'
      : children === '대형견'
      ? '3rem'
      : '';
  return (
    <DogContainer markcolor={markColor}>
      <PictureContainer imagesize={imagesize}>
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

const DogContainer = styled.div<{ markcolor: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.markcolor};
  color: #584a4aca;
`;
const PictureContainer = styled.div<{ imagesize: string }>`
  width: ${(props) => props.imagesize};
  height: ${(props) => props.imagesize};
  padding-bottom: 0.3rem;
  cursor: pointer;
`;
