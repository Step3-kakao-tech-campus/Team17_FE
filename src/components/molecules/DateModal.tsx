import { useState, PropsWithChildren, useEffect } from 'react';
import * as S from '../../styles/molecules/DateModal';
import Image from '../atoms/Image';
import { CaretLeft } from '@phosphor-icons/react';

type ModalDefaultType = {
  onClickToggleModal: () => void;
};

export default function DateModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.MainContainer>
          <S.TopBanner>
            <CaretLeft />
            <div>&nbsp;</div>
            <span>일정 추가</span>
          </S.TopBanner>
          <S.DateContainer>
            <span className="title">희망 날짜</span>
          </S.DateContainer>
          <S.TimeContainer>
            <span className="title">시간 선택</span>
          </S.TimeContainer>
          <S.Button />
        </S.MainContainer>
      </S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
}
