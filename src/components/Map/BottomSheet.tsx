import { useState } from 'react';

import { styled } from 'styled-components';

import { useBottomSheet } from '../../hooks/useBottomSheet';

const Wrapper = styled.div`
    /* 추가  */
    transition: transform 150ms ease-out;
    
    max-width: 600px;
    width: 100%;
    box-shadow: 0px 2px 15px 5px rgba(1, 60, 169, 0.15);
    position: fixed;
    bottom: -600px;
    z-index: 1;
    height: 780px;
    background-color: #FFFFFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const BottemSheetHeader = styled.div`
    border: 0px;
    background-color: #BBC7D3;
    border-radius: 12px;
    width: 44px;
    height: 5.747px;
    margin: 11px;

`;

const BottomSheetContent = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 5px;

    button {
      height: 43px;
      border: 0px;
      border-radius: 30px;
      font-size: 13px;
      font-style: normal;
      font-weight: 510;
      line-height: normal;
      letter-spacing: -0.2px;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
      height: 55px;
      cursor: pointer;
    }
`;

const DayFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;

  button {
    width: 50px;

  }
`;

const CategoryFilterContanier = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;

  button {
    width: 90px;
  }
`;

export default function BottomSheet() {
  const { sheet, content } = useBottomSheet();

  const [isSwipe, setIsSwipe] = useState(false);

  const handleClick = () => {
    setIsSwipe(true);
  };

  return (
    <Wrapper
      ref={sheet}
      onClick={handleClick}
      className={isSwipe ? 'active' : ''}
    >
      <BottemSheetHeader />
      <BottomSheetContent ref={content}>
        <DayFilterContainer>
          <button type="button">월</button>
          <button type="button">화</button>
          <button type="button">수</button>
        </DayFilterContainer>
        <CategoryFilterContanier>
          <button type="button">🍺 주점</button>
          <button type="button">🎡 비주점</button>
          <button type="button">🍕 푸드트럭</button>
        </CategoryFilterContanier>
      </BottomSheetContent>
    </Wrapper>
  );
}
