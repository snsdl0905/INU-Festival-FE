import styled from 'styled-components';
import UserInfo from './UserInfo';

const ProfileWrapper = styled.div`
width: 100%;
height: 17.9em;
border-radius:0px 0px 20px 20px;
background-color: #EBF2FF;
padding-left:1.25em;
padding-top:5em;
padding-right:1.25em;
padding-bottom:2em;
`;
const ProfileTitle = styled.div`
color: #000;
font-family: SF Pro;
font-size: 1.5em;
font-style: normal;
font-weight: 600;

`;

export default function ProfileSection() {
  return (
    <ProfileWrapper>
      <>
        <ProfileTitle>프로필</ProfileTitle>
        <UserInfo />
      </>
    </ProfileWrapper>
  );
}
