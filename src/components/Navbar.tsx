import { useState } from 'react';
import styled from 'styled-components';
const MiniBox = styled.div`
align-items: center;
padding-inline: .6em;
text-align: center;
font-size: 0.86rem;

img {
    margin: auto;
    display: block;
    padding-bottom: 0.9em;       
}
&:hover{
  filter: invert(20%) sepia(85%) saturate(7295%) hue-rotate(214deg) brightness(80%) contrast(104%);
}
.Click{
  filter: invert(20%) sepia(85%) saturate(7295%) hue-rotate(214deg) brightness(80%) contrast(104%);
}
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1.0em;
    padding-inline: 1.8em;
    border-radius: 1.45rem 1.45rem 0 0;
    color: lightgrey;
    background-color: white;
    box-shadow: 0px -0.3rem 1.3rem 0px rgba(0, 0, 0, 0.08);
    position: fixed;
    width: 100%;
    bottom: 0px;
    &:hover{
      img:hover{
        filter: invert(20%) sepia(85%) saturate(7295%) hue-rotate(214deg) brightness(80%) contrast(104%);
      }
    }
`;

export default function Navbar() {

  return (
    <Box>
      <MiniBox >
        <img src="Home.svg" className ="Click" alt="홈"/>
        <span className ="Click">홈</span>
      </MiniBox>

      <MiniBox>
        <img src="map.svg" alt="지도"  />
        <span>지도</span>
      </MiniBox>

      <MiniBox>
        <img src="TimeTable.svg" alt="타임테이블" />
        <span>타임테이블</span>
      </MiniBox>

      <MiniBox>
        <img src="board.svg" alt="방명록" />
        <span>방명록</span>
      </MiniBox>

      <MiniBox>
        <img src="profile.svg" alt="프로필" /> 
        <span>프로필</span>
      </MiniBox>
    </Box>
  );
}
