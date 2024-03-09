import styled from 'styled-components';

import Shouts from '../../types/Shouts';

const SentenceItemBox = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100%;
  padding-left: 16px;

  /* animation: slideUp 12s linear infinite; */

  @keyframes slideUp {
    0%, 10% {
      top: -5px;
    }
    20%, 30% {
      top: -82px;
    }
    40%, 50%{
      top: -159px;
    }
    60%, 70% {
      top: -236px;
    }
    80%, 99% {
      top: -313px;
    }
    100%{
      top: -5px;
    }
  }
`;

const BallonBox = styled.div`
  width: 45px;
  img{
    height: 30.16px;
    top: 496px;
    left: 44px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #0042B9;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: 21px;
  letter-spacing: -0.45px;

  span{
    color: #939393;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 12px */
    letter-spacing: -0.36px;
  }
`;

type SententenceItemProps = {
  sentence: Shouts;
}

export default function FestivalSentenceItem({ sentence }: SententenceItemProps) {
  return (
    <SentenceItemBox key={sentence.id}>
      <BallonBox>
        <img src={`${sentence.emoji}.svg`} alt="말풍선" />
      </BallonBox>
      <ContentBox>
        <span>{sentence.snsId}</span>
        {sentence.content}
      </ContentBox>
    </SentenceItemBox>
  );
}
