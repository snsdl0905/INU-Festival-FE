import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export default function NoticePage() {
  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

  const NoticeHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  margin-top: .7em;
  margin-bottom: .7em;
  padding-block: 1.4em;

  span{
    margin: 0 auto;
    font-weight: 700;
    letter-spacing: -0.04638rem;
    flex-direction: column;
    padding-right: 11px;
  }
`;

  return (
    <Wrapper>
      <NoticeHeader>
        <NavLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.706858 9.19451C0.316334 9.58503 0.316334 10.2182 0.706858 10.6087L9.19426 19.0961C9.58479 19.4866 10.2179 19.4866 10.6085 19.0961C10.999 18.7056 10.999 18.0724 10.6085 17.6819L2.82818 9.90162L10.6085 2.12132C10.999 1.7308 10.999 1.09763 10.6085 0.707107C10.2179 0.316582 9.58479 0.316582 9.19426 0.707107L0.706858 9.19451Z" fill="black"/>
          </svg>
        </NavLink>
        <span>알림 센터</span>
      </NoticeHeader>
    
    </Wrapper>
  );
}
