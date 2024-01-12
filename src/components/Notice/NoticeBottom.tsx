import { styled } from 'styled-components';

import Notice from '../../types/Notice';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.min.css';

type NoticeItemProps = {
    notice: Notice;
}

export default function NoticeBottom( {notice} : NoticeItemProps ){

    const NoticeContentBox = styled.div`
        background-color: #EBF2FF;
        margin-top: 2.3rem;
        padding: 2rem;
        border-radius: 10px;
        font-weight: 350;
        line-height: 2.5rem; /* 160% */
        letter-spacing: -0.04348rem;
        white-space: pre-line;
    `;

    const NoticeImageContainer = styled.div`
        border-radius: 1rem;
        display: flex;
    `

    const NoticeImageBox = styled.img`
        width: 15rem;
        border-radius: 1rem;
        margin: 2rem 0.6rem;
    `

    return(
        <NoticeContentBox>
            {notice.content}
            <Swiper
                spaceBetween={30}
                slidesPerView={2}               
                allowTouchMove
                freeMode
                freeModeMinimumVelocity={0.01}
                breakpoints={{
                    
                }}
            >
            <NoticeImageContainer>
            {
                notice.img.map((imgsrc) => (
                    <SwiperSlide key={notice.id}>
                        <NoticeImageBox key={notice.id} src={imgsrc} />
                    </SwiperSlide>
                ))}                
            </NoticeImageContainer>
            </Swiper>
            
        </NoticeContentBox>
    )



}