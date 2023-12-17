import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import FestivalSentenceItem from './FestivalSentenceItem';
import useFetchKeyword from '../hooks/useFetchWords';
import useFetchSentence from '../hooks/useFetchSentence';

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

const SentenceBox = styled.ul`
  margin-top: 13rem;
  background-color: #F8F8FA;
  width: 100%;
  height: 61px;
  border-radius: 12px;
  align-items: center;
  overflow: hidden;
`;


//const wordList = ['아이브', '주점', '족발', '찜/탕', '양꼬치', '짜장면', '짬뽕', '퇴근', '교수님', '실시간'];

export default function FestivalSentence() {

  const wordList = useFetchKeyword();
  const sentences = useFetchSentence();

  return (
    <>
      <FestivalSentenceBox>
        <SentenceBox>
            { sentences.map((sentence) => (
                <FestivalSentenceItem sentence={sentence} />
            ))}
        </SentenceBox>
      </FestivalSentenceBox>
      <WordContainer>
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          allowTouchMove
          freeMode
          freeModeMinimumVelocity={0.01}
        >
          {wordList.map((word) => (
            <SwiperSlide key={word.id}>
              <Word>{word.word}</Word>
            </SwiperSlide>
          ))}
        </Swiper>
      </WordContainer>
    </>
  );
}
