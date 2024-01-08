import { styled } from 'styled-components';

import BlurContainer from '../../styles/BlurContainer';

const TimeTableBlurContainer = styled(BlurContainer)`
  height: 16rem;
`;

const Content = styled.header`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #FFFFFF;

  h1 {
    text-align: center;
    font-weight: 510;
    line-height: 21px;
    padding-block: 1.4rem;
  }
  ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  p {
      font-weight: 510;
      line-height: 21px;
      text-align: center;
      padding-block: 1.4rem;

  }
  button {
    width: 104px;
    height: 37px;;
    border-radius: 20px;
    background-color: #FFFFFF;
    color: #000;
    border: 0;
  }
`;

export default function Header() {
  return (
    <TimeTableBlurContainer LineUpList={['BOL.jpeg']}>
      <Content>
        <h1>타임테이블</h1>
        <ul>
          <li>
            <p>9</p>
            <button type="button">Day 1</button>
          </li>
          <li>
            <p>10</p>
            <button type="button">Day 2</button>
          </li>
          <li>
            <p>11</p>
            <button type="button">Day 3</button>
          </li>
        </ul>
      </Content>
    </TimeTableBlurContainer>
  );
}
