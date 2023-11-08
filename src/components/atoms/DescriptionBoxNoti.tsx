import * as S from '../../styles/atoms/NotificationInfo';

type DescriptionBoxProps = {
  children: React.ReactNode;
};

const DescriptionBoxNoti = ({ children }: DescriptionBoxProps) => {
  return <S.Container>{children}</S.Container>;
};

export default DescriptionBoxNoti;
