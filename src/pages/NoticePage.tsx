import { styled } from 'styled-components';
import Header from '../components/Notice/Header';

export default function NoticePage() {
  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

  return (
    <Wrapper>
      <Header>알림 센터</Header>
    </Wrapper>
  );
}
