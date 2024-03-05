// import { useState } from 'react';

import { styled } from 'styled-components';

// import { useBottomSheet } from '../../hooks/useBottomSheet';
import BoothList from './BoothList';
import Booth from '../../types/Booth';
import useFetchCategories from '../../hooks/useFetchCategories';

export const MIN_Y = 90; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
export const MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값
export const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y; // 바텀시트의 세로 길이

const Wrapper = styled.div`
  touch-action: none;
  transition: transform 150ms ease-out;    
  max-width: 600px;
  width: 100%;
  box-shadow: 0px 2px 15px 5px rgba(1, 60, 169, 0.15);
  bottom: 0;
  height: 55%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  cursor: grab;
  padding-top: 15px;

  /* &:active {
    cursor: grabbing;
  } */
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  width: 100%;
  height: 85%;
  position: relative;
  padding-bottom: 50px;
`;

const BottomSheetHeader = styled.div`
    border: 0px;
    background-color: #BBC7D3;
    border-radius: 12px;
    width: 60px;
    height: 6.747px;
    /* margin: 25px; */
    margin: 5px 0;


`;

const BottomSheetFilter = styled.div`
    /* overflow: scroll; */
    width: 100%;
    /* height: max-content; */
    /* display: flex; */
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px 0;
    border-bottom: 1px dashed #CEDCEA;

    button {
      height: 43px;
      border: 0px;
      border-radius: 999px;
      font-size: 13px;
      font-style: normal;
      font-weight: 800;
      line-height: 21px; /* 161.538% */
      letter-spacing: -0.52px;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      /* box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12); */
      height: 45px;
      cursor: pointer;
      background-color: #F3F3F5;
      /* border: 1px solid #d4d3d3; */
      /* color: #7e7d7d; */
      font-family: SUIT;
    }
    
    .clickedDay {
      background-color: #EBF2FF;
      /* border: 1px solid #FB7876;
      color: #FB7876; */
    }

    .clickedCategory {
      background-color: #EBF2FF;
      /* border: 1px solid #0199FF;
      color: #0199FF; */
    }

    :first-child{
    margin-bottom: 5px;
  }
`;

const DayFilterContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* width: 40%; */

  button {
    padding: 0 24px;
  }

`;

const CategoryFilterContanier = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* width: 60%; */

  button {
    padding: 0 30px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  
  p{
    color: #969FA9;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.52px;
    padding-right: 10px;
  }
`;

type BottomSheetProps = {
  setSelectedDay: (value: string) => void;
  selectedDay: string;
  setSelectedCategory: (value: string) => void;
  selectedCategory: string;
  booths: Booth[];
}

export default function BottomSheet({
  setSelectedDay,
  selectedDay,
  setSelectedCategory,
  selectedCategory,
  booths,
}: BottomSheetProps) {
  // const { sheet, content } = useBottomSheet();
  // const [isSwipe, setIsSwipe] = useState<boolean>(false);

  const categories = useFetchCategories();
  const { days, filters } = categories;

  // const handleClick = () => {
  //   setIsSwipe(true);
  // };

  const handleSetFilterDay = (category: string) => {
    setSelectedDay(category);
  };

  const handleSetFilterCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Wrapper>
      {
      // ref={sheet}
      // onClick={handleClick}
      // className={isSwipe ? 'active' : ''}
      }
      <BottomSheetHeader />
      {/* <BottomSheetContent ref={content}> */}
      <BottomSheetContent>
        <BottomSheetFilter>
          <FilterContainer>
            <p>요일</p>
            {days && days.map((category: string) => (
              <DayFilterContainer key={category}>
                <button
                  type="button"
                  onClick={() => handleSetFilterDay(category)}
                  className={selectedDay === category ? 'clickedDay' : ''}
                >
                  {category}
                </button>
              </DayFilterContainer>
            ))}
          </FilterContainer>
          <FilterContainer>
            <p>분류</p>
            {filters && filters.map((category: string) => (
              <CategoryFilterContanier key={category}>
                <button
                  type="button"
                  onClick={() => handleSetFilterCategory(category)}
                  className={selectedCategory === category ? 'clickedCategory' : ''}
                >
                  {category}
                </button>
              </CategoryFilterContanier>
            ))}
          </FilterContainer>
        </BottomSheetFilter>
        <BoothList
          booths={booths}
          selectedDay={selectedDay}
        />
      </BottomSheetContent>
    </Wrapper>
  );
}
