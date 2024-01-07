import { useState } from 'react';

import styled from 'styled-components';

import Header from './Header';
import LineUpItem from './LineupItem';

import useCheckScreenWidth from '../hooks/useCheckScreenWidth';
import useSetLineUpList from '../hooks/useSetLineUpList';

const Content = styled.div<{ demoImgList: string[] }>`
  position: absolute;
  width: 100%;
  max-width: 600px;
  margin: -1.6rem;
  padding-inline: 1.6rem;
  height: 27rem;
  background-image:${(props) => (
    props.demoImgList && props.demoImgList.length > 0
      ? `url(${props.demoImgList[0]})`
      : 'none'
  )};
  background-size: cover;
  box-shadow: -27.5px 27.5px 27.5px 0px rgba(255, 255, 255, 0.20) inset, 27.5px -27.5px 27.5px 0px rgba(99, 99, 99, 0.20) inset;
  border-radius: 0px 0px 12px 12px;

  ::before {  
    position: absolute;
    content: "";
    filter: blur(20px);
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    /* background-color: rgba(255, 0, 0, 0.5); */
  }
`;

const Textarea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  p {
    color: white;
    font-weight: bold;
    font-size: 2.2rem;
  }
`;

const BannerContainer = styled.div`
  position: relative;
  top: 12rem;
  z-index: 100;
`;

export default function LineUp() {
  const [perView, setPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(50);
  const [demoImgList, setDemoImgList] = useState<string[]>([]);

  useCheckScreenWidth({ setPerView, setSpaceBetween });
  useSetLineUpList({ setDemoImgList });
  return (
    <>
      <Content demoImgList={demoImgList}>
        <Textarea>
          <Header />
          <p>오늘의 라인업</p>
        </Textarea>
      </Content>
      <BannerContainer>
        <LineUpItem
          perView={perView}
          spaceBetween={spaceBetween}
          demoImgList={demoImgList}
        />
      </BannerContainer>
    </>
  );
}
