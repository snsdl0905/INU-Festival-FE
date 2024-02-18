import styled from 'styled-components';
import FestivalSentenceItem from './FestivalSentenceItem';
import useFetchSentence from '../../hooks/useFetchSentence';
import Word from './Word';
import useLoadingStore from '../../hooks/useLoadingStore';
import SkeletonFestivalSentenceItem from '../Loding/SkeletonFestivalSentenceItem';

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
  const sentences = useFetchSentence();
  const [, store] = useLoadingStore();
  const { loading } = store;

  return (
    <>
      <FestivalSentenceBox>
        <SentenceBox>
          {loading ? (
            <SkeletonFestivalSentenceItem />
          ) : (
            sentences.map((sentence) => (
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
