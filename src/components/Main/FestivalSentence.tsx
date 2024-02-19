import styled from 'styled-components';

import FestivalSentenceItem from './FestivalSentenceItem';
import useFetchSentence from '../../hooks/useFetchSentence';
import Word from './Word';

import useLoadingStore from '../../hooks/useLoadingStore';

import SkeletonFestivalSentenceItem from '../Loading/SkeletonFestivalSentenceItem';
import SkeletonLineUp from '../Loading/Skeleton';

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
  const { data: sentences, error } = useFetchSentence();

  // const [, store] = useLoadingStore();
  // const { loading } = store;

  const { SkeletonImg } = SkeletonLineUp;

  return (
    <>
      <FestivalSentenceBox>
        <SentenceBox>
          {sentences === undefined ? (
            <SkeletonImg $width={50} $height={50} />
          ) : (
            sentences.shouts.map((sentence) => (
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

// useFetch -> react query
// error 처리 -> HTTP Status Code 500같은, null <- naver
