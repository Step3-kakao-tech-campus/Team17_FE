import { useNavigate } from 'react-router-dom';
import { CaretLeft } from '@phosphor-icons/react';

interface AppBarProps {
  // 이전 페이지 링크
  to?: string;
  // 커스텀 이벤트
  customEvent?: () => void;
}

const BackBar = ({ to, customEvent }: AppBarProps) => {
  const navigate = useNavigate();
  const onClickAppBar = () => {
    if (customEvent) {
      customEvent();
    } else {
      to
        ? navigate(to, {
            state: { direction: 'navigate-pop' },
          })
        : navigate(-1);
    }
  };

  return (
    <div onClick={onClickAppBar}>
      <CaretLeft size={25} />
    </div>
  );
};

export default BackBar;
