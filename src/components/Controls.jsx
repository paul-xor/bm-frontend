import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { selectActivity } from '../store/controls/controls-selector'

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { setActivity } from '../store/controls/controls-actions';

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
  const dispatch = useDispatch()
  const activity = useSelector(selectActivity)

  const handleSelect = (act) => {
    dispatch(setActivity(act?.value || ''))
  }

  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Activity"
        isClearable
        isSearchable={false}
        value={optionsMap[activity]}
        onChange={handleSelect}
      />
    </Wrapper>
  );
};
