import { styled } from 'styled-components';

const SkeletonItem = styled.li`
    /* display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 100%; */
  `;

const SkeletonImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;
`;

const SkeletonInfo = styled.div`

`;

export default function SkeletonFestivalSentence() {
  return (
    <SkeletonItem>
      <SkeletonImg />
      <SkeletonInfo />
    </SkeletonItem>
  );
}
