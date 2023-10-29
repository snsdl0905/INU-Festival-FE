import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import Header from './Header';

const demoImgList = ["BOL1.jpeg", "BOL2.jpeg", "DAMONS3.png", "DAMONS4.png", "DAMONS4.png"];

const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;       
    height: 27rem;
    border-bottom-left-radius: 0.9rem;
    border-bottom-right-radius: 0.9rem;
    box-shadow: 27.5px -27.5px 27.5px 0px rgba(99, 99, 99, 0.20) inset;
    position: absolute;
    z-index: 100;

    ::before {
        background-image: url(${demoImgList[0]});
        background-size: cover;
        content: "";
        position: absolute;
        filter: blur(30px);
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: -1;
    }

    p {
        position: relative;
        color: white;
        padding-inline: ${(props) => props.theme.sizes.contentPadding};
        font-weight: bold;
        font-size: 2.2rem;
    }
`;

const BannerContainer = styled.div`
    position: relative;
    margin-left: 0.9rem;
    top: 12rem;
    z-index: 100;
`;

type ResizedComponentProps = {
  setPerView: (value: number) => void;
  setSpaceBetween: (value: number) => void;
}

const ResizedComponent = ({setPerView, setSpaceBetween}: ResizedComponentProps) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  if(windowSize.width < 376)  { setPerView(2); setSpaceBetween(100); }
  else if(windowSize.width < 580)  { setPerView(2); setSpaceBetween(50);}
  else if (windowSize.width < 850) { setPerView(3); setSpaceBetween(100); }
  else if (windowSize.width < 1200) { setPerView(4); setSpaceBetween(50);}
  else { setPerView(5); setSpaceBetween(50); }
  console.log(`${windowSize.width} ${windowSize.height}`);
  return <div>{windowSize.width} {windowSize.height}</div>
}

type LineUpItemProps = {
  perView: number;
  spaceBetween: number;
}

function LineUpItem({perView, spaceBetween}: LineUpItemProps) {
  const LineupImg = styled.div`
    width: 224px;
    height: 21rem;
    margin: 0.8rem;
    position: relative;
    margin-bottom: 20px;

  img {
    width: 100%;
    height: 21rem;
    border-radius: 0.9rem;
    box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
  }
  `;

  const check = perView > demoImgList.length ? false : true;
  return ( 
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={Math.min(perView, demoImgList.length)}
      pagination={{ clickable: true }}
      loop={check}
      hashNavigation={true}
    >
      {demoImgList.map((img, index) => {
        const key = `${index}-${img}`
        return (
          <SwiperSlide key={key}>
            <LineupImg data-hash={key}>
              <img src={img} />
            </LineupImg>
          </SwiperSlide>)
      })}
    </Swiper>
  );
}

export default function LineUp() {
  const [perView, setPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(50);

  return (
    <>
      <Content>
        <Header />
        <p>오늘의 라인업</p>
      </Content>
      <BannerContainer>
        <ResizedComponent setPerView={setPerView} setSpaceBetween={setSpaceBetween}/>
        <LineUpItem perView={perView} spaceBetween={spaceBetween} />
      </BannerContainer>
    </>
  );
}