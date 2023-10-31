import { CheckCircle } from '@phosphor-icons/react';
import * as S from '../../styles/organisms/ReviewBox';
import React from 'react';

type CheckboxLabelProps = {
  onClick: () => void;
  data: boolean;
  user: string;
  dogOwner: string;
  partTimeWorker: string;
};

const CheckboxLabel = ({
  onClick,
  user,
  data,
  dogOwner,
  partTimeWorker,
}: CheckboxLabelProps) => {
  return (
    <td>
      <S.CheckboxLabel onClick={onClick}>
        {data ? (
          <CheckCircle
            color="#a59d52"
            weight="fill"
            size={20}
            className="check__icon"
            style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
          />
        ) : (
          <CheckCircle
            color="#a59d52"
            size={20}
            className="check__icon"
            style={{ marginLeft: '1rem', paddingRight: '0.5rem' }}
          />
        )}
        {user === 'dogOwner' ? dogOwner : partTimeWorker}
      </S.CheckboxLabel>
    </td>
  );
};

export default React.memo(CheckboxLabel);
