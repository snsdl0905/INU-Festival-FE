import styled from "styled-components"

const FestivalSentenceBox =styled.div`
    margin-top: 10rem;
    background-color: #F8F8FA;
    width: 335px;
    height: 61px;
    border-radius: 12px;
    display:flex;
    align-items: center;
    align-items:center;
    margin-left:20px;
    margin-right:20px;
`

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
`

const SentenceBox =styled.div`
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
`
const WordContainer=styled.div`
        display:flex;
        margin-left:20px;
        margin-top:12px;
`

const Word = styled.div`
    width: 64px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 33px;
    background: #F7F7F7;
    text-align:center;
    color: #4F4F4F;
    font-family: SF Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.24px;
    margin-right:8px;
`

export default function FestivalSentence(){
    return(
        <>
            <FestivalSentenceBox>
                <BallonBox>
                    <img src="ballon.png" alt="말풍선"/> {/* 데이터 들어오면 바뀜 */}
                </BallonBox>
                <SentenceBox>
                      <span>201902929</span><br />
                      퇴근길에 이런 글을 보니 기분이 좋네요. {/* 데이터 들어오면 바뀜 */}
                </SentenceBox>
            </FestivalSentenceBox>

            <WordContainer>  {/* 데이터 들어오면 바뀜 */}
                <Word>아이브</Word>
                <Word>주점</Word>
                <Word>양꼬치</Word>
                <Word>족발</Word>
                <Word>찜/탕</Word>
            </WordContainer>
        </>
    )
}