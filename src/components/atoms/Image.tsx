import * as S from '../../styles/atoms/Image';

type ImageInput = {
  size?: string,
  src: string,
  alt: string,
  className?: string
}

const Image = ({size, src, alt, className} : ImageInput) => {
  return (
    <span>
      <S.Img src={src} alt={alt} width={size} className={className}/>
    </span>
  )
}

export default Image