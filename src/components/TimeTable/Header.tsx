import { styled } from 'styled-components';

import { useState } from 'react';

import BlurContainer from '../../styles/BlurContainer';
import Categories from './Categories';

const TimeTableBlurContainer = styled(BlurContainer)`
  height: 16rem;
`;

export default function Header() {
  const [categories] = useState(['1', '2', '3']);
  const [filterCategory, setFilterCatergory] = useState<string>('1');

  return (
    <TimeTableBlurContainer $backgroundimg="BOL2.jpeg">
      <Categories
        categories={categories}
        filterCategory={filterCategory}
        setFilterCatergory={setFilterCatergory}
      />
    </TimeTableBlurContainer>
  );
}
