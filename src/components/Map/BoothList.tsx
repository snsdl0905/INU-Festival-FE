import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';

import InfoWithIcon from '../MapDetail/InfoWithIcon';

const PreButton = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;

`;

const BoothContainer = styled.div`
    display: flex;
    padding: 1.5rem 2rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border-top: 1px solid #CEDCEA;
    border-bottom: 1px solid #CEDCEA;
    img{
        width: 60px;
        height: 60px;
    }
`;

const BoothContent = styled.div`
    padding: 1.5rem 1rem;
    align-items: center;
    margin-right: 1rem;
    span{
        color: #0047C9;
    }
`;

const BoothInfoBottom = styled.div`
    display: flex;
    color: #BBC7D3;
    font-size: 14px;
    align-items: center;
`;

const LikedNumber = styled.div`
    display: flex;
    background-color: #EBF2FF;
    border-radius: 15px;
    width: fit-content;
    font-size: 10px;
    padding: 0.5rem 1rem;
    align-items: center;
    color: #0047C9;
    margin: 0.8rem;


    svg{
       margin-right: 0.3rem;
    }
    
`;

export default function BoothList() {
  const id = 1;
  return (
    <PreButton to={`/map/${id}`}>
      <BoothContainer>
        <img src="boothImg.png" alt="boothImg.png" />
        <BoothContent>
          <span>취업경력개발원</span>
          <BoothInfoBottom>
            <div>비주점</div>
            <LikedNumber>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                <path d="M11.4179 1.12468C10.0511 -0.136666 7.87118 -0.00321332 6.54828 1.29688C6.51752 1.32701 6.46478 1.32701 6.42962 1.29688C5.10233 -0.00321332 2.92241 -0.136666 1.55996 1.12468C0.197513 2.38602 0.122798 4.60737 1.48525 5.9419L5.44514 9.82064C6.02528 10.3889 6.96141 10.3889 7.54155 9.82064L11.3388 6.10118L11.497 5.9462C12.8595 4.61167 12.8331 2.43338 11.4223 1.12898L11.4179 1.12468Z" fill="#0047C9" />
              </svg>
              <p>3K</p>
            </LikedNumber>
          </BoothInfoBottom>
        </BoothContent>
        <InfoWithIcon small="true" />
      </BoothContainer>
    </PreButton>
  );
}
