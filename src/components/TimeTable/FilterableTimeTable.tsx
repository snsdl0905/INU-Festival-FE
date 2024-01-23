import { styled } from 'styled-components';

import { useState } from 'react';

import Article from '../Article';

import BlurContainer from '../BlurContainer';
import Categories from './Categories';
import TimeTableBody from './TimeTableBody';

import filterPerforms from '../../utils/filterPerforms';

import useFetchPerforms from '../../hooks/useFetchPerforms';

const TimeTableHedaer = styled(BlurContainer)`
  height: 16rem;
`;

export default function FilterableTimeTable() {
  const [categories] = useState(['1', '2', '3']);
  const [filterCategory, setFilterCatergory] = useState<string>('1');

  const performs = useFetchPerforms();
  const filteredPerforms = filterPerforms(performs, filterCategory);

  return (
    <div>
      <TimeTableHedaer $backgroundimg="BOL2.jpeg">
        <Categories
          categories={categories}
          filterCategory={filterCategory}
          setFilterCatergory={setFilterCatergory}
        />
      </TimeTableHedaer>
      <Article>
        <TimeTableBody
          performs={filteredPerforms}
        />
      </Article>
    </div>
  );
}
