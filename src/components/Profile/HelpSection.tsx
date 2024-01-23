import styled from 'styled-components';

const HelpWrapper = styled.li`
width: 100%;
padding-top:20px;
list-style:none;
`;
const HelpTitle = styled.div`
color: #000;
font-family: "SF Pro";
font-size: 20px;
font-style: normal;
font-weight: 510;
line-height: normal;
letter-spacing: -0.8px;
margin-bottom: 24px;
`;

const HelpElement = styled.li`
width: 100%;
height: 19px;
flex-shrink: 0;
margin-bottom:32px;
display:flex;
`;

const HelpIcon = styled.img`
width: 18px;
height: 18px;
flex-shrink: 0;
margin-right:18px;
`;

const Helplink = styled.button`
color: #000;
font-family: "SF Pro";
font-size: 16px;
font-style: normal;
font-weight: 400;
letter-spacing: -0.64px;
line-height: 24px;
border:none;
background-color:transparent;
`;

export default function HelpSectioin() {
  return (
    <HelpWrapper>
      <HelpTitle>지원</HelpTitle>
      <HelpElement>
        <HelpIcon src="Human.svg" />
        <Helplink>친구 찾기</Helplink>
      </HelpElement>
      <HelpElement>
        <HelpIcon src="Contact.svg" />
        <Helplink>문의하기</Helplink>
      </HelpElement>
      <HelpElement>
        <HelpIcon src="Link.svg" />
        <Helplink>링크 공유하기</Helplink>
      </HelpElement>
    </HelpWrapper>
  );
}
