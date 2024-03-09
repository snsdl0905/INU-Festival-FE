import { useState } from 'react';

import styled from 'styled-components';

import Toast from './Toast';

const HelpWrapper = styled.ul`
  width: 100%;
  padding-top: 32px;
  list-style: none;
`;
const HelpTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.8px;
  margin-bottom: 23px;
`;

const HelpElement = styled.li`
width: 100%;
height: 19px;
flex-shrink: 0;
margin-bottom:32px;
display:flex;
cursor: pointer;
`;

const HelpIcon = styled.img`
width: 18px;
height: 18px;
flex-shrink: 0;
margin-right: 12px;
`;

const Helplink = styled.button`
  font-family: SUIT, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.64px;
  line-height: normal;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default function HelpSection() {
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState('');

  const handleShare = async (url: string) => {
    const shareObject: ShareData = {
      title: '희희낙락',
      text: '즐거운 축제의 시작, 희희낙락과 함께하세요!',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareObject).then(() => {
        alert('공유하기 성공');
      })
        .catch((error) => {
          alert('에러가 발생했습니다.');
        });
    } else {
      await navigator.clipboard.writeText(url);
      setToastText('클립보드에 복사되었습니다.');
      setToast(true);
    }
  };

  const handleCopyHelp = () => {
    window.open('https://open.kakao.com/o/sNl4zf7f');
  };

  const handleClickFriend = () => {
    setToastText('준비중입니다.');
    setToast(true);
  };

  return (
    <HelpWrapper>
      <HelpTitle>지원</HelpTitle>
      <HelpElement onClick={() => handleClickFriend()}>
        <HelpIcon src="Human.svg" />
        <Helplink>친구 찾기</Helplink>
        {toast && <Toast setToast={setToast} text={toastText} />}
      </HelpElement>
      <HelpElement onClick={handleCopyHelp}>
        <HelpIcon src="Contact.svg" />
        <Helplink>문의하기</Helplink>
      </HelpElement>
      <HelpElement onClick={() => handleShare('httplocalhost:8080/')}>
        <HelpIcon src="Link.svg" />
        <Helplink>링크 공유하기</Helplink>
        {toast && <Toast setToast={setToast} text={toastText} />}
      </HelpElement>
    </HelpWrapper>
  );
}
