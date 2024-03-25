import styled from 'styled-components';

import {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { io } from 'socket.io-client';

import Header from '../Notice/Header';
import useFetchSentence from '../../hooks/useFetchSentence';
import Shouts from '../../types/Shouts';
import Message from './Message';

const Container = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background-color: #F4F6F9;
  min-height: 85vh;
  margin-top: 52px;
  display: block;
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
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || undefined);
  const { data } = useFetchSentence();
  const [messageList, setMessageList] = useState<Shouts[]>(data?.shouts || []);

  console.log(data?.shouts);
  console.log(messageList);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const chatWindow = useRef<HTMLDivElement>(null);
  const socket = io(ServerURL);

  useEffect(() => {
    if (accessToken !== undefined) {
      localStorage.setItem('accessToken', accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, []);

  // 새 메시지를 받으면 스크롤을 이동하는 함수
  const moveScrollToReceiveMessage = useCallback(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTo({
        top: chatWindow.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const handleNewMessage = (msg: Shouts) => {
      setMessageList((prevMessage) => [...prevMessage, msg]);
    };

    socket.on('update', handleNewMessage);

    return () => {
      socket.off('update', handleNewMessage);
    };
  }, [socket]);

  socket.on('update', (msg: Shouts) => {
    // handleNewMessage(msg);
    console.log(`서버에서 받은: ${msg}`);
    setMessageList((prevMessage) => [...prevMessage, msg]);
  });

  // 새로운 메세지를 보내는 경우
  const handleSendMessage = () => {
    const contents = document.querySelector('input').value;

    fetch(`${process.env.REACT_APP_URL}/shout/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        studentId: '202100000',
        content: contents,
        emoji: 'happy',
      }),
    })
      .then((response) => response.json())
      .then(() => {
        socket.emit('message', contents);
        console.log(`보낸 내용: ${contents}`);
      })
      .catch((error) => console.error('Error:', error));

    const msg: Shouts = {
      id: Math.random(),
      userId: Math.random(),
      studentId: '202100000',
      content: contents,
      emoji: 'happy',
    };
    setMessageList((prevMessage) => [...prevMessage, msg]);
    document.querySelector('input').value = '';
  };

  const handleWriteButton = () => {
    if (accessToken?.trim) {
      alert('로그인 후에 메시지를 보낼 수 있습니다.');
      return;
    }
    setBottomBannerZIndex(3000);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <>
      <Header shadow="false">방명록</Header>
      <Container ref={chatWindow}>
        {/* {
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
        } */}
        {messageList.map((message) => (
          <Message key={message.id} msg={message} />
        ))}
        <Button onClick={handleWriteButton}>한 줄 외치기</Button>
      </Container>
      <BottomBanner style={{ zIndex: bottomBannerZIndex }}>
        <input type="text" ref={inputRef} onKeyDown={(e) => handleEnter(e)} />
        <button type="submit" onClick={handleSendMessage}>
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