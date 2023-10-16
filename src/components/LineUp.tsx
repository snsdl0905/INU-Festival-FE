import styled from "styled-components";
import Header from "./Header";

const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;       
    height: 27rem;
    border-bottom-left-radius: 0.9rem;
        border-bottom-right-radius: 0.9rem;
    box-shadow: 27.5px -27.5px 27.5px 0px rgba(99, 99, 99, 0.20) inset;
    position: absolute;
    overflow: hidden;
    z-index: 100;

    ::before {
        background-image: url("BOL4.png");
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
    display: flex;
    position: relative;
    margin-left: 0.9rem;
    top: 12rem;

    img{
        width: 21rem;
        height: 21rem;
        margin: 0.8rem;
        z-index: 100;
        position: relative;
        margin-bottom: 20px;
        border-radius: 0.9rem;
        box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
    }
`;

export default function LineUp(){
    return (
        <>
            <Content>
                <Header />
                <p>오늘의 라인업</p>
            </Content>
            <BannerContainer>
                    <img src="BOL4.png" alt="BOL4" />
                    <img src="DAMONS.png" alt="DAYMONS YEAR" /> 
            </BannerContainer>
        
        </>
	);
}
