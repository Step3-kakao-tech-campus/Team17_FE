import * as S from '../../styles/atoms/Image';

type ImageInput = {
  size?: string;
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
};

const Image = ({ size, src, alt, className, onClick }: ImageInput) => {
  return (
    <span>
      <S.Img
        src={src}
        alt={alt}
        width={size}
        className={className}
        onClick={onClick}
      />
    </span>
  );
};

export default Image;
