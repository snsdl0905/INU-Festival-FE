import styled from 'styled-components';

const sentences = [
  ['201902929', '퇴근길에 이런 글을 보니 기분이 좋네요.', 'ballon.png'],
  ['202101555', '축제 재밌어요~~', 'ballon.png'],
  ['202101556', '굿굿', 'ballon.png'],
  ['202124345', '집가고싶다~', 'ballon.png'],
];

const MainSentenceBox = styled.div`
  color: #0042B9;
  font-family: SF Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 131.25% */
  letter-spacing: -0.48px;
  margin-left:6px;


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

const BallonBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;

  div{
    color: rgba(147, 147, 147, 1);
    font-family: SF Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 510;
    line-height: 21px; /* 175% */
    letter-spacing: -0.36px;
    margin-left:12px;
    margin-right:10px;
  }

  img{
    width: 34px;
    height: 30.16px;
    top: 496px;
    left: 44px;
    margin-left:16px;
  }
`;

const SentenceBox = styled.ul`
  margin-top: 13rem;
  background-color: #F8F8FA;
  width: 100%;
  height: 61px;
  border-radius: 12px;
  align-items: center;
  overflow: hidden;


  li > div{
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  li{
    position: relative;
    overflow: hidden;
    animation: slideUp 12s linear infinite;
  }

  @keyframes slideUp {
    0%, 14% {
      top: 0;
    }
    28%, 42% {
      top: -61px;
    }
    56%, 70%{
      top: -122px;
    }
    84%, 99% {
      top: -183px;
    }
    100%{
      top: 0px;
    }
  }
`;

export default function MainSentence() {
  return (
    <SentenceBox>
      {sentences.map((sentence, index) => (
        <li key={index}>
          <div>
            <BallonBox>
              <img src={sentence[2]} alt="말풍선" />
            </BallonBox>
            <MainSentenceBox>
              <span>{sentence[0]}</span>
              <br />
              {sentence[1]}
            </MainSentenceBox>
          </div>
        </li>
      ))}
    </SentenceBox>
  );
}
