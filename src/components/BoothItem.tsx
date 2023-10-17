import styled  from "styled-components";

const Booth = styled.div`
        display: flex;
        align-items: center;
        align-self: stretch;
        gap: 3rem;
`;

const BoothDetail = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
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
            border-radius:50%;
`;

const BoothTitle = styled.div`
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
        justify-content:center;
        align-items:center;
        gap:2.62px;

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


export default function BoothItem(){
    return(
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
                    <img src="heart.png"></img>
                    <div>3K</div>
                </BoothHeart>
        </Booth>
    )
}