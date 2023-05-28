import styled from 'styled-components';

import theme from '../../styles/theme';
import { useRecoilState } from 'recoil';
import { filterTitle } from '../../atom/filterAtom';
import { Filter_Item } from '../../utils/FilterConstants';
import { FilterItemParams } from '../../utils/interfaces';

export default function Filter() {
  const [filterTag, setFilterTag] = useRecoilState<string[]>(filterTitle);

  const handleFilterTag = (filterTag: string[]) => {
    setFilterTag(filterTag);
  };

  return (
    <FilterContainer>
      <FilterTitleWrapper>
        {Filter_Item.map((item: FilterItemParams) => (
          <FilterTitle
            key={item.id}
            onClick={() => handleFilterTag([item.title])}
            className={filterTag.includes(item.title) ? 'active' : ''}
          >
            {item.title}
          </FilterTitle>
        ))}
      </FilterTitleWrapper>
      <FilterButton>Filter</FilterButton>
    </FilterContainer>
  );
}

//styling
const FilterContainer = styled.div`
  background: ${theme.GREY_MEDIUM};
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  width: 100%;
  height: 120px;
`;

const FilterTitleWrapper = styled.div`
  padding: 32px 32px;
  display: flex;
`;

const FilterTitle = styled.div`
  padding: 32px 0;
  cursor: pointer;
  padding: 0 1rem;
  &.active {
    font-weight: bold;
  }
`;

const FilterButton = styled.button`
  width: 110px;
  height: 60px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  color: rgba(51, 51, 51, 0.2);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: black;
    color: white;
  }
`;
