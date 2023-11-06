import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

const FestivalSentenceBox = styled.div`
    margin-top: 13rem;
    background-color: #F8F8FA;
    width: 100%;
    height: 61px;
    border-radius: 12px;
    display:flex;
    align-items: center;
`;

const BallonBox = styled.div`
        display:flex;
        flex-direction:column;
        justify-content: center;

        div{
           color: rgba(147, 147, 147, 1);
            font-family: SF Pro;
            font-size: 12px;
            font-style: normal;
            font-weight: 510;
            line-height: 21px; /* 175% */
            letter-spacing: -0.36px;
            margin-left:12px;
            margin-right:10px;
        }

        img{
            width: 34px;
            height: 30.16px;
            top: 496px;
            left: 44px;
            margin-left:16px;
        }
`;

const SentenceBox = styled.div`
        color: #0042B9;
        font-family: SF Pro;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px; /* 131.25% */
        letter-spacing: -0.48px;
        margin-left:6px;


        span{
            color: #939393;
            font-family: SF Pro;
            font-size: 12px;
            font-style: normal;
            font-weight: 510;
            line-height: 100%; /* 12px */
            letter-spacing: -0.36px;
        }
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

const wordList = ['아이브', '주점', '족발', '찜/탕', '양꼬치', '짜장면', '짬뽕', '퇴근', '교수님', '실시간'];

export default function FestivalSentence() {
  return (
    <>
      <FestivalSentenceBox>
        <BallonBox>
          <img src="ballon.png" alt="말풍선" />
          {' '}
          {/* 데이터 들어오면 바뀜 */}
        </BallonBox>
        <SentenceBox>
          <span>201902929</span>
          <br />
          퇴근길에 이런 글을 보니 기분이 좋네요.
          {' '}
          {/* 데이터 들어오면 바뀜 */}
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
            <SwiperSlide key={word}>
              <Word>{word}</Word>
            </SwiperSlide>
          ))}
        </Swiper>
      </WordContainer>
    </>
  );
}