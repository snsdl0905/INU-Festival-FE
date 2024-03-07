import styled from 'styled-components';

import FestivalSentenceItem from './FestivalSentenceItem';
import useFetchSentence from '../../hooks/useFetchSentence';
import Word from './Word';

import SkeletonFestivalSentence from '../Loading/SkeletonFestivalSentenceItem';

const FestivalSentenceBox = styled.div``;

const SentenceBox = styled.ul`
  margin-top: 6rem;
  background-color: #f8f8fa;
  width: 100%;
  height: 61px;
  border-radius: 12px;
  align-items: center;
  overflow: hidden;
`;

export default function FestivalSentence() {
  const { data } = useFetchSentence();
  return (
    <>
      <FestivalSentenceBox>
        <SentenceBox>
          {data === undefined ? (
            <SkeletonFestivalSentence />
          ) : (
            data.shouts.map((sentence) => (
              <FestivalSentenceItem
                key={sentence.id}
                sentence={sentence}
              />
            ))
          )}
        </SentenceBox>
      </FestivalSentenceBox>
      <Word />
    </>
  );
}
