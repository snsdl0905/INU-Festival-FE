import { styled } from 'styled-components';
import Perform from '../../types/Perform';

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

type TimeTableBodyProps = {
  performs: Perform[];
}

export default function TimeTableBody({ performs }: TimeTableBodyProps) {
  const lineups = performs.filter((perform) => (
    perform.category === '연예인'
  ));

  return (
    <div>
      <Body>
        {lineups.map((lineup) => (
          <p key={lineup.name}>{lineup.name}</p>
        ))}
      </Body>
    </div>
  );
}
