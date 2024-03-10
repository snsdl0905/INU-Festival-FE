import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetchKeyword from '../../hooks/useFetchWords';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Skeleton from '../Loading/Skeleton';

const WordContainer = styled.div`
  display:flex;
  margin-top:12px;
`;

const WordContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 33px;
  background: #F5F5F5;
  text-align: center;

  color: #4F4F4F;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-right: 8px;
`;

export default function Word() {
  const { data } = useFetchKeyword();
  const { SkeletonBox } = Skeleton;

  return (
    <WordContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        allowTouchMove
        freeMode
        slidesOffsetAfter={50}
        freeModeMinimumVelocity={0.01}
      >
        {data === undefined ? (
          new Array(10).fill(1).map((_, i) => (
            <SwiperSlide key={i}>
              <WordContent>
                <SkeletonBox $width={40} $height={20} $radius={5} />
              </WordContent>
            </SwiperSlide>
          ))
        ) : (
          data.keywords.map((word) => (
            <SwiperSlide key={word.id}>
              <WordContent>
                <span>{word.word}</span>
              </WordContent>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </WordContainer>
  );
}
