import styled from "styled-components"

const Boothranking= styled.div`
        width: 390px;
        height: 558px;
        flex-shrink: 0;
        border-radius: 12px;
        background: #FFF;
        box-shadow: 0px 4px 20px 0px rgba(29, 72, 150, 0.12);
        padding-top:26px;
        padding-left:28px;
        padding-right:28px;

        span{
            color: #0047C9;
            font-family: SF Pro;
            font-size: 22px;
            font-style: normal;
            font-weight: 590;
            line-height: normal;
            letter-spacing: -0.44px;
            padding-bottom:16px;
        }
        hr {

            background-color: #D4D4D4;
        }
`
const Booth = styled.div`
        margin-top:28px;
`

export default function BoothRanking()
{
    return(
        <>
            <div>
            축제에서 가장<br />
            인기있는 부스를 확인하세요
            </div>

            <span>
                실시간 업데이트(2023.09.07)
            </span>

            <Boothranking>
                <span>부스 랭킹 👑</span>
                <hr />
                <Booth>
                    <img src="Rank1.png" />
                    <img src="BoothDefault.png"/>
                </Booth>
            </Boothranking>
        </>    
    )
       
    
}