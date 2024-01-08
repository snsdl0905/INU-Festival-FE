import styled from 'styled-components';
import LoginBtn from './LoginBtn';
import UserInfo from './UserInfo';

const ProfileWrapper = styled.div`
width: 100%;
height: 287px;
border-radius:0px 0px 20px 20px;
background-color: #EBF2FF;
`;

export default function ProfileSection() {
  return (
    <ProfileWrapper>
      프로필
      <UserInfo />
      <LoginBtn />
    </ProfileWrapper>
  );
}
