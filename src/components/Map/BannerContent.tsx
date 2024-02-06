import { useState } from 'react';

import { styled } from 'styled-components';

import BoothList from './BoothList';

import { useBottomSheet } from '../../hooks/useBottomSheet';

import Booth from '../../types/Booth';

const Wrapper = styled.div`
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
    padding-top: 4px;

`;

const BottomSheetFilter = styled.div`
    overflow: scroll;
    width: 100%;
    height: 60px;
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;

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
      height: 45px;
      cursor: pointer;
    }

    button {
      background-color: #FFFFFF;
      border: 1px solid #d4d3d3;
      color: #7e7d7d;
    }
    
    .clicked {
        background-color: #EBF2FF;
        border: 1px solid #e6e5e5;
        color: #000000;
        
    }
`;

const DayFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;

  button {
    width: 45px;
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

type BottomSheetProps = {
  selectedCategories: string[];
  setSelectedCategories: (value: string[]) => void;
  booths: Booth[];
}
export default function BottomSheet({
  selectedCategories,
  setSelectedCategories,
  booths,
}: BottomSheetProps) {
  const { sheet, content } = useBottomSheet();
  const [isSwipe, setIsSwipe] = useState<boolean>(false);

  const categories = ['월', '화', '수', '주점', '비주점', '푸드트럭'];

  const handleClick = () => {
    setIsSwipe(true);
  };

  const handleSetFilterCategory = (category: string) => {
    const filteredCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((selectedCategory) => selectedCategory !== category)
      : [...selectedCategories, category];

    setSelectedCategories(filteredCategories);
  };

  return (
    <Wrapper
      ref={sheet}
      onClick={handleClick}
      className={isSwipe ? 'active' : ''}
    >
      <BottemSheetHeader />
      <BottomSheetFilter ref={content}>
        {categories.slice(0, 3).map((category) => (
          <DayFilterContainer key={category}>
            <button
              type="button"
              onClick={() => handleSetFilterCategory(category)}
              className={selectedCategories.includes(category) ? 'clicked' : ''}
            >
              {category}
            </button>
          </DayFilterContainer>
        ))}
        {categories.splice(3, 6).map((category) => (
          <CategoryFilterContanier key={category}>
            <button
              type="button"
              onClick={() => handleSetFilterCategory(category)}
              className={selectedCategories.includes(category) ? 'clicked' : ''}
            >
              {category}
            </button>
          </CategoryFilterContanier>
        ))}
      </BottomSheetFilter>
      <BoothList
        booths={booths}
      />
    </Wrapper>
  );
}
