import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-inline: .6em;

    img {
        display: block;        
        width: 28px;
        height: 19px;
    }
`

const Title = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 1.3rem;
        font-weight: bold;
        color: #FFFFFF;
        padding-block: 1.2em;
        padding-inline: .4em;
        line-height: 100%;
    }
    
    img {
        width: 45px;
        height: 38px;
    }
`;

export default function Header() {
	return (
        <Container>
            <Title>
                <img src="logo.png" alt="로고" />
                <span>희희낙락</span>
            </Title>
            <img src="notification.png" alt="공지사항" />
        </Container>
	);
}
