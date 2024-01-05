import { styled } from 'styled-components';
import PageHeader from '../components/PageHeader';

export default function NoticePage() {
  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

  return (
    <Wrapper>
      <PageHeader>알림 센터</PageHeader>
    </Wrapper>
  );
}
