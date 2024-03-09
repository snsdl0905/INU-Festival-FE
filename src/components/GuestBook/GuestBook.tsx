import styled from 'styled-components';

import Header from '../Notice/Header';

const Container = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background-color: #F4F6F9;
  height: calc(100vh - 8rem);
  max-height: max-content;
  margin-top: 52px;
`;

const MessageBox = styled.div`
  width: 100%;

  &.received p{
    border-radius: 900px 999px 999px 0px;
    background: #FFF;
    box-shadow: 0px 2px 20px 0px rgba(0, 66, 185, 0.15);  
    color: #0042B9;
  }

  &.sent{

    div{
      margin-left: auto;
      flex-direction: row-reverse;
    }

    p{
      border-radius: 999px 999px 0px 999px;
      background: #80B2FF;
      box-shadow: 0px 3px 20px 0px rgba(0, 66, 185, 0.15);
      color: #FFFFFF;
      margin-left: auto;
    }
  }  
`;

const Message = styled.p`
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 8px;
  margin-bottom: 12px;

  span{
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: 21px;
    letter-spacing: -0.45px;
  }
`;

const User = styled.div`
  display: flex;
  margin-bottom: 20px;

  img{
    width: 20px;
  }
  
  b{
    color: #0042B9;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: -0.26px;
    margin: 0 8px;
  }
`;

const Button = styled.button`
  width: 106px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #0047C9;
  box-shadow: 0px 3px 20px 0px rgba(0, 71, 201, 0.15);
  border: none;

  color: #FFF;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.26px;

  position: fixed;
  /* top: 32px; */
  bottom: calc(8rem + 32px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;
export default function GuestBook() {
  return (
    <>
      <Header shadow="false">방명록</Header>
      <Container>
        <MessageBox className="received">
          <Message>
            <span>오늘도 화이팅!! 항상 잘하고 있어ㅎㅎ</span>
          </Message>
          <User>
            <img src="happy.svg" alt="이모지" />
            <b>202100000</b>
          </User>
        </MessageBox>
        <MessageBox className="sent">
          <Message>
            <span>최근에 본 좋은 영화 있어요?</span>
          </Message>
          <User>
            <img src="happy.svg" alt="이모지" />
            <b>202100000</b>
          </User>
        </MessageBox>
        <MessageBox className="received">
          <Message>
            <span>오늘도 화이팅!! 항상 잘하고 있어ㅎㅎ</span>
          </Message>
          <User>
            <img src="sad.svg" alt="이모지" />
            <b>202100000</b>
          </User>
        </MessageBox>
        <Button>한 줄 외치기</Button>
      </Container>
    </>
  );
}
