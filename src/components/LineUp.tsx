import { useState } from 'react';

import styled from 'styled-components';

import Header from './Header';
import LineUpItem from './LineupItem';

import useCheckScreenWidth from '../hooks/useCheckScreenWidth';
import useSetLineUpList from '../hooks/useSetLineUpList';

const Content = styled.div<{ demoImgList: string[] }>`
  width: 90%;
  max-width: 600px;
  height: 27rem;
  position: absolute;
  z-index: 100;

  ::before {
    background-image:${(props) => (
    props.demoImgList && props.demoImgList.length > 0
      ? `url(${props.demoImgList[0]})`
      : 'none'
  )};

    background-size: cover;
    border-radius: 0px 0px 12px 12px;
    box-shadow: -27.5px 27.5px 27.5px 0px rgba(255, 255, 255, 0.20) inset, 27.5px -27.5px 27.5px 0px rgba(99, 99, 99, 0.20) inset;
    filter: blur(48.400001525878906px);
    content: "";
    position: absolute;
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

export default function LineUp() {
  const [perView, setPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(50);
  const [demoImgList, setDemoImgList] = useState<string[]>([]);

  useCheckScreenWidth({ setPerView, setSpaceBetween });
  useSetLineUpList({ setDemoImgList });
  return (
    <>
      <Content demoImgList={demoImgList}>
        <Header />
        <p>오늘의 라인업</p>
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
