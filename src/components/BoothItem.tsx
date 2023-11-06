import { useState, useEffect } from 'react';

import useFetchBooths from '../hooks/useFetchBooths';

import styled from 'styled-components';

const Booth = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 3rem;
`;

const BoothDetail = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const BoothRank = styled.img`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`;

const BoothImg = styled.img`
  width: 48px;
  height: 48px;
  left: 45px;
  border-radius: 50%;
  margin-left: 1.3rem;
`;

const BoothTitle = styled.div`
  margin-left: 1.3rem;
  div{
    &:first-child{
      color: #B6BBC4;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.26px;
    }
    &:last-child{
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.32px;
    }
  }
`;

const BoothHeart = styled.div`
  width: 64px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 21px;
  background: #EBF2FF;
  display:flex;
  align-items:center;
  gap:2.62px;
  padding-left: 0.95rem;

  img{
    width: 12px;
    height: 10px;
    flex-shrink: 0;
  }
  div
  {
    font-family: SF Pro;
    font-size: 14px;
    font-weight: 590;
    line-height: 17px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(0, 71, 201, 1);
    width:19px;
  }
`;

const BoothList = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  gap:36px;
`;

export default function BoothItem() {
  const booths = useFetchBooths();
  booths.sort((a, b) => b.liked - a.liked);
  const [sortedBooths, setSortedBooths] = useState(booths);
    
  const formatter = new Intl.NumberFormat('en', { notation: 'compact' });
    
  const handleLikeClicked = (index: number) => {
    const updatedBooths = [...sortedBooths];
    updatedBooths[index].liked += 1;
    updatedBooths.sort((a, b) => b.liked - a.liked);
    setSortedBooths(updatedBooths);
  };

  return (
    <BoothList>
      {sortedBooths.map((booth, index) => (
        <Booth key={index}>
          <BoothDetail>
            <BoothRank src={`Rank${index + 1}.png`} alt="순위" />
            <BoothImg src="BoothDefault.png" alt="부스이미지" />
            <BoothTitle>
              <div>{booth.category}</div>
              <div>{booth.name}</div>
            </BoothTitle>
          </BoothDetail>
          <BoothHeart onClick={() => handleLikeClicked(index)}>
            <img src="heart.png" />
            <div>{formatter.format(booth.liked)}</div>
          </BoothHeart>
        </Booth>
      ))}
    </BoothList>
  );
}
