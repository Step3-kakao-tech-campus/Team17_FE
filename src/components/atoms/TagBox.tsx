import * as S from '../../styles/atoms/TagBox';

type TagBoxProps = {
  innerText: string;
  borderColor?: string;
  color?: string;
  size?: string;
  width?: string;
  backColor?: string;
  className?: string;
  onClick?: () => void;
};

const TagBox = ({
  innerText,
  borderColor,
  color,
  size,
  className,
  onClick,
  backColor,
}: TagBoxProps) => {
  return (
    <S.Tag
      style={{
        border: `1px solid ${borderColor}`,
        color: color,
        fontSize: `${size}rem`,
        backgroundColor: backColor,
      }}
      className={className}
      onClick={onClick}
    >
      {innerText}
    </S.Tag>
  );
};

export default TagBox;
