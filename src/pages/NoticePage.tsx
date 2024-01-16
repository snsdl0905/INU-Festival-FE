import { styled } from 'styled-components';
import Header from '../components/Notice/Header';
import NoticeItem from '../components/Notice/NoticeItem';
import Notice from '../types/Notice';
import useFetchNotices from '../hooks/useFetchNotice';

export default function NoticePage() {
  const notices = useFetchNotices();
  
  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

  const NoticeList = styled.div`

  `

  return (
    <Wrapper>
      <Header>알림 센터</Header>
      <NoticeList>
        {
          notices.map((notice) => (
            <NoticeItem key={notice.id} notice={notice} />
          ))
        }
      </NoticeList>
    </Wrapper>
  );
}