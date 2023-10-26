import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: ${(props) => props.theme.sizes.contentPadding};
    margin-top: .7em;
    margin-bottom: .7em;

    img {
        display: block;        
        width: 24px;
        height: 17px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 1.8rem;
        font-weight: bold;
        color: #FFFFFF;
        padding-block: 1.4em;
        padding-inline: .4em;
        line-height: 100%;
    }
    
    img {
        width: 32px;
        height: 27px;
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
