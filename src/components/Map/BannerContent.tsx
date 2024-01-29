import { styled } from 'styled-components';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    box-shadow: 0px 2px 15px 5px rgba(1, 60, 169, 0.15);
    position: fixed;
    bottom: 65px;
    z-index: 1;
    height: 105px;
    background-color: #FFFFFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    cursor: grab;
`;

const SlideImg = styled.div`
    border: 0px;
    background-color: #BBC7D3;
    border-radius: 12px;
    width: 44px;
    height: 5.747px;
    margin: 11px;

`;

const FilterContainer = styled.div`
    width: 100%;
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

export default function BannerContent() {
  return (
    <Container>
      <SlideImg />
      <FilterContainer>
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
      </FilterContainer>
    </Container>
  );
}
