import { useState } from 'react';
import styled from 'styled-components';

import Header from "../Notice/Header"
import BoothInstruction from './BoothInstruction';
import BoothComment from './BoothComment';
import InfoWithIcon from './InfoWithIcon';

const ImageBox = styled.div`
    height: 375px;
    background-color: #D1D9F5;
`

const MapInfoTop = styled.div`
    margin: 0 auto;
    padding: 3rem 0 0 0;
    text-align: center;

    p{
        font-size: 13px;
        color: rgba(187, 199, 211, 1);
        font-weight: 510;
    }

    h2{
        font-size: 18px;
        color: #0147C8;
        padding: 1rem 0 2rem 0;
        font-weight: 620;
    }
    button{
        background-color: #EBF2FF;
        border: none;
        border-radius: 20px;
        padding: 10px 15px;
        flex-direction: column;
        vertical-align: middle;
        text-align: center;

        svg{
            vertical-align: middle;
        }
        span{
            vertical-align: middle;
            font-size: 12px;
            margin: 0 4px;
            font-weight: 550;
        }
    }
    
`

const MapButtonBox = styled.div`
    display: flex;
    color: #BBC7D3;
    align-items: center;
    width: max-content;
    justify-content: space-between;
    margin: 0 auto;
    
    div{
        padding: 3rem;
        text-align: center;
        margin: 0 3rem;
        padding-bottom: 1rem;
    }

    div > p {
        margin: 1.5rem 0;
    }
`

const MapInfoBottom = styled.div<{ showInstruction: boolean }>`
    display: flex;
    justify-content: space-between;
    button{
        flex: 1;
        border: none;
        background-color: #FFFFFF;
        padding: 2rem 6rem;
        border-bottom: 2px solid ${(props) => (props.showInstruction ? '#0147C8' : '#CEDCEA')};
        
        &:last-child {
            border-bottom: 2px solid ${(props) => (props.showInstruction ? '#CEDCEA' : '#0147C8')};
        }
    }
`;


export default function DetailedMapPage(){

    const [showInstruction, setShowInstruction] = useState(true);  

    return(
        <>
            <Header> </Header>
            <ImageBox />
            <MapInfoTop>
                <p>비주점</p>
                <h2>취업경력개발원</h2>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path d="M14.5572 1.64121C12.7348 0.00145993 9.82823 0.174949 8.06438 1.86506C8.02336 1.90424 7.95304 1.90424 7.90616 1.86506C6.13644 0.174949 3.22988 0.00145993 1.41328 1.64121C-0.403316 3.28096 -0.502936 6.1687 1.31366 7.90359L6.59352 12.946C7.36704 13.6847 8.61522 13.6847 9.38873 12.946L14.4518 8.11066L14.6627 7.90919C16.4793 6.1743 16.4442 3.34252 14.5631 1.6468L14.5572 1.64121Z" fill="#FF3D00"/>
                    </svg>
                    <span>1,991</span>
                </button>
            </MapInfoTop>
            <MapButtonBox>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                        <path d="M21.8359 1.84349C19.1022 -0.805334 14.7424 -0.525083 12.0966 2.2051C12.035 2.26839 11.9296 2.26839 11.8592 2.2051C9.20466 -0.525083 4.84482 -0.805334 2.11992 1.84349C-0.604974 4.49231 -0.754403 9.15714 1.97049 11.9596L9.89028 20.105C11.0506 21.2983 12.9228 21.2983 14.0831 20.105L21.6777 12.2941L21.9941 11.9687C24.719 9.16618 24.6662 4.59176 21.8447 1.85253L21.8359 1.84349Z" fill="#BBC7D3"/>
                    </svg>
                    <p>좋아요</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M20.0487 15.0782C18.8702 15.0782 17.799 15.5375 17.0026 16.2864L9.38293 12.4089C9.39705 12.2627 9.40458 12.1146 9.40458 11.9646C9.40458 11.7911 9.39328 11.6213 9.37446 11.4534L16.9038 7.62114C17.7096 8.4257 18.8203 8.92372 20.0477 8.92372C22.5064 8.92372 24.5 6.926 24.5 4.46233C24.5 1.99866 22.5073 0 20.0487 0C17.59 0 15.5964 1.99772 15.5964 4.46139C15.5964 4.61607 15.6039 4.76793 15.6199 4.91884L8.05854 8.76715C7.25656 7.98428 6.16184 7.5023 4.95417 7.5023C2.49365 7.5023 0.5 9.50002 0.5 11.9637C0.5 14.4274 2.49365 16.4251 4.95229 16.4251C6.18443 16.4251 7.29892 15.9233 8.1056 15.1131L15.6359 18.9453C15.6105 19.1396 15.5954 19.3368 15.5954 19.5386C15.5954 22.0023 17.5891 24 20.0477 24C22.5064 24 24.5 22.0023 24.5 19.5386C24.5 17.0749 22.5064 15.0772 20.0477 15.0772L20.0487 15.0782Z" fill="#BBC7D3"/>
                    </svg>
                    <p>공유하기</p>
                </div>
            </MapButtonBox>
            <InfoWithIcon />
            <MapInfoBottom showInstruction={showInstruction}>
                <button onClick={() => setShowInstruction(true)}>부스 소개</button>
                <button onClick={() => setShowInstruction(false)}>댓글 100</button>
            </MapInfoBottom>
            {showInstruction ? <BoothInstruction /> : <BoothComment />}
        </>
    )
}