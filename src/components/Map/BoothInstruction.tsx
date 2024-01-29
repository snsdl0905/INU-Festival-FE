import styled from 'styled-components';

export default function BoothInstruction(){
    const InstrucionContainer = styled.div`
        margin: 3rem;
        padding: 2rem;
        background-color: #EBF2FF;
        font-weight: 400;
        border-radius: 2rem;
        font-size: 14px;
        letter-spacing: 0.02rem;
        white-space: pre-line;
        line-height: 1.5;
    `

    const instruction = '안녕하세요! 취업경력개발원입니다.\n\n스트레스 주무르기, 건강한 음주문화 캠페인, 장애인식개선 프로그램, 포일아트 체험, 봉사 미니 공모전 홍보 등 활동하고 있습니다.\n\n많이 놀러와주세요';
    return(
        <InstrucionContainer>
            {instruction}
        </InstrucionContainer>   
    )
}