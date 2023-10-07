import * as S from '../../styles/atoms/TagBox'

type TagBoxProps = {
  innerText: string,
  color?: string,
}

const TagBox = ({innerText, color}: TagBoxProps) => {
  return (
    <S.Tag style={{border: `1px solid ${color}`, color: color}}>
      {innerText}
    </S.Tag>
  )
}

export default TagBox