import { styled } from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import Perform from '../../types/Perform';
import useLoadingStore from '../../hooks/useLoadingStore';
import SkeletonLineUp from '../Loading/Skeleton';

const Container = styled.div`
height: 21rem;
position: relative;
padding-inline: 1.6rem;
margin-bottom: 20px;

img {
  width: 220px;
  height: 21rem;
  border-radius: 0.9rem;
  box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
}
`;

type LineUpProps = {
  perView: number;
  spaceBetween: number;
  lineups: Perform[];
  }

export default function LineUp({
  perView,
  spaceBetween,
  lineups,
}: LineUpProps) {
  const [, store] = useLoadingStore();
  const { loading } = store;

  const { SkeletonImg } = SkeletonLineUp;

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={perView}
      speed={300}
      pagination={{ clickable: true }}
      allowTouchMove
    >
      {lineups.map((lineup, index) => {
        const key = `${index}-${lineup.id}`;
        return (
          <SwiperSlide key={key}>
            <Container data-hash={key}>
              {loading
                ? <SkeletonImg $width={200} $height={210} />
                : <img src="BOL.jpeg" alt={lineup.img} />}
            </Container>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
