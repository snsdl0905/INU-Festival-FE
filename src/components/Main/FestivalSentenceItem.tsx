import styled from 'styled-components';
import Shouts from '../../types/Shouts';

const SentenceItemBox = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100%;

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
    color: rgba(147, 147, 147, 1);
    font-family: SF Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 510;
    letter-spacing: -0.36px;
    margin-right: 10px;

  img{
    width: 34px;
    height: 30.16px;
    top: 496px;
    left: 44px;
    margin-left:16px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #0042B9;
  font-family: SF Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px; /* 131.25% */
  letter-spacing: -0.48px;
  margin-left: 6px;


  span{
    color: #939393;
    font-family: SF Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 510;
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
        <img src={sentence.emoji} alt="말풍선" />
      </BallonBox>
      <ContentBox>
        <span>{sentence.snsId}</span>
        {sentence.content}
      </ContentBox>
    </SentenceItemBox>
  );
}
