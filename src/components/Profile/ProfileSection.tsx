import styled from 'styled-components';
import UserInfo from './UserInfo';
import LoginBtn from './LoginBtn';

const ProfileWrapper = styled.div`
display:flex;
width: 100%;
height: 17.9em;
border-radius:0px 0px 20px 20px;
background-color: #EBF2FF;
padding-top:5em;
padding-right:1.25em;
padding-left:1.25em;
box-shadow: 0px 3px 13px 0px rgba(1, 71, 200, 0.10);
justify-content : space-around;
`;

const ProfileContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 24px;
`;
const ProfileTitle = styled.div`
color: #000;
font-family: SF Pro;
font-size: 1.5em;
font-style: normal;
font-weight: 600;
`;
const UserIcon = styled.img`
width: 48%;
height: auto;
margin-bottom:32px;
flex-shrink: 1;
`;

export default function ProfileSection() {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <ProfileTitle>프로필</ProfileTitle>
        <UserInfo />
        <LoginBtn />
      </ProfileContainer>
      <UserIcon src="default.svg" alt="major" />
    </ProfileWrapper>
  );
}
