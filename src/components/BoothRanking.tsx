import styled from "styled-components";

const BoothRankingTitle = styled.div`
        color: #000;
        font-family: SF Pro;
        font-size: 21px;
        font-style: normal;
        font-weight: 590;
        line-height: 30px; /* 142.857% */
        letter-spacing: -0.42px;
        margin-top:36px;
        margin-left:20px;
        margin-bottom:16px;
        `

const UpdateDate=styled.span`
            color: #A9A9A9;
            font-family: SF Pro;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 15px; /* 100% */
            letter-spacing: -0.45px;
            margin-left:20px;
    `

const BoothRankingContainer= styled.div`
            display: flex;
            width: 336px;
            height: 492px;
            padding: 24px 22px;
            align-items: flex-start;
            gap: 10px;
            flex-shrink: 0;
            border-radius: 12px;
            background: #FFF;
            box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
            margin: 36px 20px 36px 20px;
`
const BoothWrapper = styled.div`
            display: flex;
            height: 444px;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            flex: 1 0 0;
`;
const BoothRankingCrown = styled.div`
            color: #0047C9;
            font-family: SF Pro;
            font-size: 20px;
            font-style: normal;
            font-weight: 590;
            line-height: normal;
            letter-spacing: -0.4px;
`
const LineDiv = styled.div`   
    width: 292px;
    height: 1px;
    background-color: #CEDCEA;
`

const Booth = styled.div`
        display: flex;
        align-items: center;
        gap: 24px;
        align-self: stretch;
`

const BoothDetail =styled.div`
display: flex;
width: 214px;
justify-content: space-between;
align-items: center;
`
const BoothRank =styled.img`
    width: 28px;
    height: 28px;
    flex-shrink: 0;
`

const BoothImg = styled.img`
            width: 48px;
            height: 48px;
            left: 45px;
            border-radius:50%
`
const BoothTitle =styled.div`

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
`
const BoothHeart=styled.div`
        width: 64px;
        height: 32px;
        flex-shrink: 0;
        border-radius: 21px;
        background: #EBF2FF;
`


export default function BoothRanking()
{
    return(
        <>
            <BoothRankingTitle>
            축제에서 가장<br />
            인기있는 부스를 확인하세요
            </BoothRankingTitle>

            <UpdateDate>
                실시간 업데이트(2023.09.07)
            </UpdateDate>

            <BoothRankingContainer>
            <BoothWrapper>
                <BoothRankingCrown>부스 랭킹 👑</BoothRankingCrown>
                <LineDiv />

                <Booth>
                    <BoothDetail>
                        <BoothRank src="Rank1.png" />
                        <BoothImg src="BoothDefault.png"/>
                            <BoothTitle>
                                <div>교내</div>
                                <div>취업경력개발원</div>
                            </BoothTitle>
                    </BoothDetail>
                    
                        <BoothHeart>
                        </BoothHeart>
                </Booth>

                </BoothWrapper>
            </BoothRankingContainer>        
        </>    
    )
       
    
}