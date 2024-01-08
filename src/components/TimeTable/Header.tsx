import { css, styled } from 'styled-components';

import { useState } from 'react';
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

  h1, ul, p {
    padding-block: 1rem;
  }
  h1 {
    height: 40px;
    text-align: center;
    font-weight: 510;
    line-height: 21px;
    margin-top: 1rem;
    
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
  }
  button {
    width: 104px;
    height: 37px;;
    border-radius: 20px;
    border: 0;
    background: transparent;
    color: #FFFFFF;
    cursor: pointer;

    ${(props) => props.active && css`
      background: #FFFFFF;
      color: #000;
      transition: .3s;
    `};
`;

export default function Header() {
  const [selectedDate, setDate] = useState('1');

  const handleSetFilterDate = (category: string) => {
    setDate(category);
  };

  return (
    <TimeTableBlurContainer LineUpList={['BOL.jpeg']}>
      <Content>
        <h1>타임테이블</h1>
        <ul>
          <li>
            <p>9</p>
            <Button
              type="button"
              active={selectedDate === '1'}
              onClick={() => handleSetFilterDate('1')}
            >
              Day 1
            </Button>
          </li>
          <li>
            <p>10</p>
            <Button
              type="button"
              active={selectedDate === '2'}
              onClick={() => handleSetFilterDate('2')}
            >
              Day 1
            </Button>
          </li>
          <li>
            <p>11</p>
            <Button
              type="button"
              active={selectedDate === '3'}
              onClick={() => handleSetFilterDate('3')}
            >
              Day 1
            </Button>
          </li>
        </ul>
      </Content>
    </TimeTableBlurContainer>
  );
}
