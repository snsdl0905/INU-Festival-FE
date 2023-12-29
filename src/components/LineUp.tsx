import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Header from './Header';
import LineUpItem from './LineUpItem';

import useCheckScreenWidth from '../hooks/useCheckScreenWidth';
import useFetchLineUp from '../hooks/useFetchLineUp';

const Content = styled.div<{ demoImgList: string[] }>`
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
    background-image:${(props) => (
    props.demoImgList && props.demoImgList.length > 0
      ? `url(${props.demoImgList[0]})`
      : 'none'
  )};
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

export default function LineUp() {
  const [perView, setPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(50);
  const [demoImgList, setDemoImgList] = useState<string[]>([]);
  const lineUpList = useFetchLineUp();

  useCheckScreenWidth({ setPerView, setSpaceBetween });
  useEffect(() => {
    const imgList = lineUpList.map((lineup) => lineup.img);
    setDemoImgList(imgList);
  }, [lineUpList]);

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
