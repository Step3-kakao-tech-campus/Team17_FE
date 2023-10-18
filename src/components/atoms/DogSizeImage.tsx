import Image from './Image';

type DogInfoProp = {
  children?: string;
  size?: string;
};

const DogSizeImage = ({ size, children }: DogInfoProp) => {
  return (
    <>
      <Image src="./images/dog-size.png" alt="강아지 사이즈" size={size} />
      <div>{children}</div>
    </>
  );
};

export default DogSizeImage;
