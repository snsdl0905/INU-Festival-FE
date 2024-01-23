import Lineups from './Lineups';

import Perform from '../../types/Perform';

function Schedule() {
  return (
    <>
    </>
  );
}

type TimeTableBodyProps = {
  performs: Perform[];
}

export default function TimeTableBody({ performs }: TimeTableBodyProps) {
  const lineups = performs.filter((perform) => (
    perform.category === '연예인'
  ));

  return (
    <div>
      <Lineups lineups={lineups} />
      <Schedule />
    </div>
  );
}
