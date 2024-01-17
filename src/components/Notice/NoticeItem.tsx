import { styled } from 'styled-components';

import { useState } from 'react';
import Notice from '../../types/Notice';
import NoticeBottom from './NoticeBottom';

const NoticeBox = styled.div`
padding: 2.3rem;
padding-inline: ${(props) => props.theme.sizes.contentPadding};
`;

const NoticeTop = styled.div`
display: flex;
`;

const NoticeTitle = styled.div`
    padding-left: 1.3rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    span{
    font-size: 1.5rem;
    font-weight: 600;
    }

    p {
        padding: 1.4rem 0;
        font-size: 1.7rem;
    }

    div {
        color: #A9A9A9;
        font-size: 1.4rem;
    }
`;

type NoticeItemProps = {
  notice: Notice;
}

const NoticeExtend = styled.div`
margin: auto 0;
`;

export default function NoticeItem({ notice } : NoticeItemProps) {
  const [isVisible, setVisible] = useState(false);

  const toggleContent = () => {
    setVisible(!isVisible);
  };

  return (
    <NoticeBox>
      <NoticeTop onClick={toggleContent}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
          <path d="M14 7.49969C14 6.11162 12.8415 4.97542 11.3729 4.87355V1.56243C11.3729 0.699346 10.6183 0 9.68712 0H9.61834C9.27242 0 8.93324 0.0924962 8.64262 0.266864L3.30007 3.46798H1.68577C0.754552 3.46798 0 4.16733 0 5.03042V9.41398C0 10.2771 0.754552 10.9764 1.68577 10.9764H3.30007L8.6089 14.6669C8.91976 14.8831 9.29804 15 9.68712 15C10.6183 15 11.3729 14.3007 11.3729 13.4376V10.1265C12.8422 10.0246 14 8.88838 14 7.50031V7.49969Z" fill="url(#paint0_linear_546_927)" />
          <defs>
            <linearGradient id="paint0_linear_546_927" x1="11.5294" y1="11.7857" x2="2.63923" y2="1.94585" gradientUnits="userSpaceOnUse">
              <stop stopColor="#43B7BA" />
              <stop offset="1" stopColor="#3AE197" />
            </linearGradient>
          </defs>
        </svg>
        <NoticeTitle>
          <span>공지사항</span>
          <p>{notice.title}</p>
          <div>{notice.date}</div>
        </NoticeTitle>
        <NoticeExtend>
          {isVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.21926 0.682638C8.82873 0.292113 8.19557 0.292114 7.80505 0.682638L0.731411 7.75627C0.340887 8.1468 0.340887 8.77996 0.731411 9.17049C1.12194 9.56101 1.7551 9.56101 2.14562 9.17049L8.51215 2.80396L14.8787 9.17049C15.2692 9.56101 15.9024 9.56101 16.2929 9.17049C16.6834 8.77996 16.6834 8.1468 16.2929 7.75627L9.21926 0.682638Z" fill="#E0E0E0" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.80516 8.78074C8.19568 9.17127 8.82884 9.17127 9.21937 8.78074L16.293 1.70711C16.6835 1.31658 16.6835 0.683418 16.293 0.292893C15.9025 -0.0976314 15.2693 -0.0976314 14.8788 0.292893L8.51226 6.65942L2.14573 0.292893C1.75521 -0.0976314 1.12205 -0.097631 0.731521 0.292893C0.340997 0.683418 0.340996 1.31658 0.731521 1.70711L7.80516 8.78074Z" fill="#E0E0E0" />
            </svg>
          )}

        </NoticeExtend>
      </NoticeTop>
      {isVisible && <NoticeBottom notice={notice} />}
    </NoticeBox>
  );
}
