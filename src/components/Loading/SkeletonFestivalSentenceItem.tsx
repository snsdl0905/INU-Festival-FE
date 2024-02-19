import { styled } from 'styled-components';

const SkeletonItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100%;
  padding-left: 16px;

`;

const SkeletonImg = styled.div`
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.skeletonBackground};
    width: 35px;
    height: 35px;
    position: relative;
    overflow: hidden;
    margin-right: 10px;
`;

const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`;

const SkeletonName = styled.div`
    width: 15%;
    height: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.skeletonBackground};
    position: relative;
    overflow: hidden;
    margin-top: 2.5px;
`;

const SkeletonContent = styled.div`
    width: 50%;
    height: 17px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.skeletonBackground};
    position: relative;
    overflow: hidden;
    margin-top: 2.5px;
`;

export default function SkeletonFestivalSentence() {
  return (
    <SkeletonItem>
      <SkeletonImg />
      <SkeletonInfo>
        <SkeletonName />
        <SkeletonContent />
      </SkeletonInfo>
    </SkeletonItem>
  );
}
