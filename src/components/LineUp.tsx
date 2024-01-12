import { useState } from 'react';

import styled from 'styled-components';

import Header from './Main/Header';

import LineUpItem from './LineupItem';

import useCheckScreenWidth from '../hooks/useCheckScreenWidth';
import useSetLineUpList from '../hooks/useSetLineUpList';

import BlurContainer from '../styles/BlurContainer';

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;

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
  const [LineUpList, setLineUpList] = useState<string[]>([]);

  useCheckScreenWidth({ setPerView, setSpaceBetween });
  useSetLineUpList({ setLineUpList });
  return (
    <>
      <BlurContainer LineUpList={LineUpList}>
        <Content>
          <Header />
          <p>오늘의 라인업</p>
        </Content>
      </BlurContainer>
      <BannerContainer>
        <LineUpItem
          perView={perView}
          spaceBetween={spaceBetween}
          demoImgList={LineUpList}
        />
      </BannerContainer>
    </>
  );
}
