import { useState } from 'react';
import styled from 'styled-components';

const IsLoginBtn = styled.button`
background-color:#0147C8;
width: 161px;
height: 48px;
top: 115px;
border-radius: 12px;
font-size:15px;
color: #FFFFFF;
border:none;
margin-top:24px;
`;

export default function LoginBtn() {
  return (
    <IsLoginBtn>로그인</IsLoginBtn>
  );
}
