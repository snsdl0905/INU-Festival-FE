import styled from 'styled-components';
import LoginBtn from './LoginBtn';

const UserInfoWrapper = styled.div`
display: flex;
margin-top: 16px;
justify-content: space-between;
`;
const UserSection = styled.div`
color: #000;
font-family: SF Pro;
font-size: 1em; /* Adjust the font size to your preference */
font-weight: 400;
line-height: 1.5; /* Adjust line height for better readability */
letter-spacing: -0.64px;
white-space: pre-wrap;
display: flex;
flex-direction: column;
justify-content: space-between;

`;
const UserIcon = styled.img`
width: 50%;
height: auto;
margin-top:-15px;
flex-shrink: 1;
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
      <UserIcon src="default.svg" alt="major" />
    </UserInfoWrapper>
  );
}
