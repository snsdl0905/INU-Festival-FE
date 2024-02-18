import { styled } from 'styled-components';

const Skeleton = {
  SkeletonImg: styled.div`
        position: relative;
        overflow: hidden;
        background: #EEEFF4;
        width: 220px;
        height: 21rem;
        border-radius: 0.9rem;
        box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
            
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 150%;
            background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
            animation: loading 3s infinite linear;
        }
    `,
  SkeletonImg: styled.div`
        position: relative;
        overflow: hidden;
        background: #EEEFF4;
        width: 220px;
        height: 21rem;
        border-radius: 0.9rem;
        box-shadow: 0px 2px 20px 0px rgba(0, 71, 201, 0.15);
            
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 150%;
            background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
            animation: loading 3s infinite linear;
        }
    `,

};

export default Skeleton;
