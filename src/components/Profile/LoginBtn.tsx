import styled from 'styled-components';

const IsLoginBtn = styled.button`
background-color:#0147C8;
width: 14rem;
height: 4rem;
border-radius: 12px;
font-size:1.3rem;
color: #FFFFFF;
border:none;
`;

export default function LoginBtn() {
  return (
    <IsLoginBtn>로그인</IsLoginBtn>
  );
}
