import { styled } from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

type LineUpItemProps = {
  perView: number;
  spaceBetween: number;
  demoImgList: string[];
  }

export default function LineUpItem({ perView, spaceBetween, demoImgList }: LineUpItemProps) {
  const Container = styled.div`
      width: 224px;
      height: 21rem;
      position: relative;
      margin-bottom: 20px;
  
    img {
      width: 100%;
      height: 21rem;
      border-radius: 0.9rem;
      box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
    }
  `;

  const check = !(perView > demoImgList.length);
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={Math.min(perView, demoImgList.length)}
      speed={300}
      pagination={{ clickable: true }}
      loop={check}
      allowTouchMove
    >
      {demoImgList.map((img, index) => {
        const key = `${index}-${img}`;
        return (
          <SwiperSlide key={key}>
            <Container data-hash={key}>
              <img src={img} alt="" />
            </Container>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
