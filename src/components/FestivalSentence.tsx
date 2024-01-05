import styled from 'styled-components';

import FestivalSentenceItem from './FestivalSentenceItem';
import useFetchSentence from '../hooks/useFetchSentence';
import Word from './Word';

const FestivalSentenceBox = styled.div`
`;

const SentenceBox = styled.ul`
  margin-top: 13rem;
  background-color: #F8F8FA;
  width: 100%;
  height: 61px;
  border-radius: 12px;
  align-items: center;
  overflow: hidden;
`;

// const wordList = ['아이브', '주점', '족발', '찜/탕', '양꼬치', '짜장면', '짬뽕', '퇴근', '교수님', '실시간'];

export default function FestivalSentence() {
  const sentences = useFetchSentence();

  return (
    <>
      <FestivalSentenceBox>
        <SentenceBox>
          {sentences.map((sentence) => (
            <FestivalSentenceItem sentence={sentence} />
          ))}
        </SentenceBox>
      </FestivalSentenceBox>
      <Word />
    </>
  );
}
