import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const optionsMap = {
  'Hiking': { value: 'Hiking', label: 'Hiking' },
  'Running': { value: 'Running', label: 'Running' },
  'Biking': { value: 'Biking', label: 'Biking' },
}
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Activity"
        isClearable
        isSearchable={false}
        value={''}
        onChange={() => {}}
      />
    </Wrapper>
  );
};
