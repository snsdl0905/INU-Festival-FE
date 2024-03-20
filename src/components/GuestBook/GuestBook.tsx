import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import Header from '../Notice/Header';
import useFetchSentence from '../../hooks/useFetchSentence';

const Container = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background-color: #F4F6F9;
  min-height: 85vh;
  margin-top: 52px;
  display: block;
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
  bottom: calc(8rem + 32px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;

const BottomBanner = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  position: fixed;
  z-index: 300;
  bottom: 0;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  width: 100%;
  max-width: 600px;
  border-radius: 20px 20px 0px 0px;

  input{
    width: 70vw;
    border: none;
    border-bottom: 2px solid #0047C9;

    &:focus{
      outline: none;
    }
  }

  button{
    border: none;
    background: none;

    &:focus{
      outline: none;
    }

  }
`;

const ServerURL = process.env.REACT_APP_URL;

export default function GuestBook() {
  const [bottomBannerZIndex, setBottomBannerZIndex] = useState(-1);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || '');

  const { data } = useFetchSentence();

  const socket = io(ServerURL);

  useEffect(() => {
    if (accessToken !== undefined) {
      localStorage.setItem('accessToken', accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    const handleNewMessage = (msg) => {
      const chat = document.getElementsByClassName('Container');
      const message = document.createElement('div');
      const node = document.createTextNode(`${msg.emoji}: ${msg.studentId}: ${msg.content}`);

      message.classList.add('received');
      message.appendChild(node);
      chat.appendChild(message);
    };
    socket.on('update', handleNewMessage);
  }, [socket]);

  const handleSendMessage = () => {
    const contents = document.querySelector('input').value;
    document.querySelector('input').value = '';

    fetch(`${process.env.REACT_APP_URL}/shout/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        content: contents,
        emoji: 'happy',
      }),
    })
      .then((response) => response.json())
      .then((msg) => {
        // const chat = document.getElementsByClassName('Container');
        // const newMessage = document.createElement('div');
        // const node = document.createTextNode(`${msg.emoji}: ${msg.studentId}: ${msg.content}`);

        // newMessage.classList.add('sent');
        // newMessage.appendChild(node);
        // chat.appendChild(newMessage);
        console.log(msg);

        socket.emit('message', { type: 'message', msg });
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleWriteButton = () => {
    console.log(accessToken);
    // if (accessToken) {
    //   alert('로그인 후에 메시지를 보낼 수 있습니다.');
    //   return;
    // }
    setBottomBannerZIndex(3000);
  };

  return (
    <>
      <Header shadow="false">방명록</Header>
      <Container>
        {
          data?.shouts.map((sentence) => (
            <MessageBox className="received" key={sentence.id}>
              <Message>
                <span>{sentence.content}</span>
              </Message>
              <User>
                <img src={`${sentence.emoji}.svg`} alt="이모지" />
                <b>{sentence.studentId}</b>
              </User>
            </MessageBox>
          ))
        }
        <Button onClick={handleWriteButton}>한 줄 외치기</Button>
      </Container>
      <BottomBanner style={{ zIndex: bottomBannerZIndex }}>
        <input type="text" autoFocus />
        <button type="submit" onClick={handleSendMessage}>
          {/* <button type="submit"> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="#0047C9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M18.7247 9.72766C18.3458 9.32581 17.7316 9.32581 17.3527 9.72766L10.686 16.7992C10.3071 17.2011 10.3071 17.8526 10.686 18.2545C11.0648 18.6563 11.6791 18.6563 12.0579 18.2545L18.0387 11.9105L24.0195 18.2545C24.3983 18.6563 25.0126 18.6563 25.3914 18.2545C25.7703 17.8526 25.7703 17.2011 25.3914 16.7992L18.7247 9.72766Z" fill="white" />
            <path d="M17.0521 27.041C17.0521 27.5933 17.4998 28.041 18.0521 28.041C18.6044 28.041 19.0521 27.5933 19.0521 27.041L17.0521 27.041ZM17.0521 11.041L17.0521 27.041L19.0521 27.041L19.0521 11.041L17.0521 11.041Z" fill="white" />
          </svg>
        </button>
      </BottomBanner>
    </>
  );
}
