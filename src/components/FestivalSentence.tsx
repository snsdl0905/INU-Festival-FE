import styled from 'styled-components';

import MainSentence from './MainSentence';

const FestivalSentenceBox = styled.div`
`;

const WordContainer = styled.div`
        display:flex;
        margin-top:12px;
`;

const Word = styled.div`
    width: 64px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 33px;
    background: #F7F7F7;
    text-align:center;
    color: #4F4F4F;
    font-family: SF Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.24px;
    margin-right:8px;
`;



export default function FestivalSentence() {
    
  return (
    <>
      <FestivalSentenceBox>
        <MainSentence/>
        <WordContainer>
          {' '}
          {/* 데이터 들어오면 바뀜 */}
          <Word>아이브</Word>
          <Word>주점</Word>
          <Word>양꼬치</Word>
          <Word>족발</Word>
          <Word>찜/탕</Word>
        </WordContainer>
      </FestivalSentenceBox>
    </>
  );
}
