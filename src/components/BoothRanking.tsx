import styled from 'styled-components';

import BoothItem from './BoothItem';

const BoothRankingTitle = styled.div`
  width: 100%;
  color: #000;
  font-family: SF Pro;
  font-size: 21px;
  font-style: normal;
  font-weight: 590;
  line-height: 30px; /* 142.857% */
  letter-spacing: -0.42px;
  margin-top:36px;
  margin-bottom:16px;
`;

const UpdateDate = styled.span`
  color: #A9A9A9;
  font-family: SF Pro;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 100% */
  letter-spacing: -0.45px;
`;

const BoothRankingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 492px;
  padding: 24px 22px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
  margin-top: 36px;
  margin-bottom: 36px;
`;

const BoothWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;
const BoothRankingCrown = styled.div`
  color: #0047C9;
  font-family: SF Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 590;
  line-height: normal;
  letter-spacing: -0.4px;
`;
const LineDiv = styled.div`   
  width: 100%;
  height: 1px;
  background-color: #CEDCEA;
  margin-bottom:24px;
  margin-top:12px;
`;

export default function BoothRanking() {
  return (
    <>
      <BoothRankingTitle>
        축제에서 가장
        <br />
        인기있는 부스를 확인하세요
      </BoothRankingTitle>

      <UpdateDate>
        실시간 업데이트(2023.09.07)
      </UpdateDate>

      <BoothRankingContainer>
        <BoothWrapper>
          <BoothRankingCrown>부스 랭킹 👑</BoothRankingCrown>
          <LineDiv />
          <BoothList>
            <BoothItem />
          </BoothList>
        </BoothWrapper>
      </BoothRankingContainer>
    </>
  );
}
