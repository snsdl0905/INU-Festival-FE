import { styled } from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Perform from '../../types/Perform';

const Container = styled.div`
height: 21rem;
position: relative;
margin-bottom: 20px;

img {
width: 220px;
height: 21rem;
border-radius: 0.9rem;
box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
}
`;

type LineUpItemProps = {
  perView: number;
  spaceBetween: number;
  lineups: Perform[];
  }

export default function LineUpItem({ perView, spaceBetween, lineups }: LineUpItemProps) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={perView}
      speed={300}
      pagination={{ clickable: true }}
      loop
      allowTouchMove
    >
      {lineups.map((lineup, index) => {
        const key = `${index}-${lineup.id}`;
        return (
          <SwiperSlide key={key}>
            <Container data-hash={key}>
              <img src="BOL.jpeg" alt={lineup.img} />
            </Container>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
