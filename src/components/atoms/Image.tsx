import * as S from '../../styles/atoms/Image';

type ImageInput = {
  size?: string;
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Image = ({ size, src, alt, className, onClick, style }: ImageInput) => {
  return (
    <span>
      <S.Img
        src={src}
        alt={alt}
        width={size}
        className={className}
        onClick={onClick}
        style={style}
      />
    </span>
  );
};

export default Image;
