import { styled } from 'styled-components';

type SkeletonImgProps = {
  $width: number;
  $height: number;
}

const Skeleton = {
  SkeletonImg: styled.div<SkeletonImgProps>`
    position: relative;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.skeletonBackground};
    width: ${(props) => props.$width}px;
    height: ${(props) => props.$height}px;
    border-radius: 0.9rem;
    box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
  `,
};

export default Skeleton;
