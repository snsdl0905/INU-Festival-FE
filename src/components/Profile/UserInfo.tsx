import styled from 'styled-components';

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

export default function UserInfo() {
  const user = `즐거운 축제의 시작
희희낙락과 함께하세요!`;
  return (
    <UserInfoWrapper>
      <UserSection>
        <span>{user}</span>
      </UserSection>
    </UserInfoWrapper>
  );
}
