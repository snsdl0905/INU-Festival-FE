import styled from 'styled-components';
import LoginBtn from './LoginBtn';

const UserInfoWrapper = styled.div`
display:flex;
magin-top:16px;
justify-content:space-between;
margin-bottom:24px;
`;
const UserSection = styled.div`
color: #000;
font-family: SF Pro;
font-size: 16px;
font-weight: 400;
line-height: 137.5%;
letter-spacing: -0.64px;
white-space: pre-wrap;
margin-top:16px;
`;
const UserIcon = styled.img`
width:13rem;
height:13rem;
`;

export default function UserInfo() {
  const user = `즐거운 축제의 시작
희희낙락과 함께하세요!`;
  return (
    <UserInfoWrapper>
      <UserSection>
        <span>{user}</span>
        <LoginBtn />
      </UserSection>

      <UserIcon src="default.png" alt="major" />
    </UserInfoWrapper>
  
  );
}
