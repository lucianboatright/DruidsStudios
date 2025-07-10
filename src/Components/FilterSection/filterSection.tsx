import React from 'react';
import { StyledFilterArea, StyledText, FilterContainer, StyledButton, StyledSpacer } from './filterSection.styles';

type FilterItem = {
  label: string;
  value: string;
};

type FilterSectionProps = {
  filters: FilterItem[];
  setActiveFilter: (filter: string) => void;
};

export function FilterSection({ filters, setActiveFilter }: FilterSectionProps) {
  return (
    <StyledFilterArea>
      <StyledText onClick={() => setActiveFilter('All')}>Filters:</StyledText>
      <FilterContainer>
        {filters.map((filter, index) => (
          <React.Fragment key={filter.value}>
            <StyledButton onClick={() => setActiveFilter(filter.value)}>
              {filter.label}
            </StyledButton>
            {index < filters.length - 1 && <StyledSpacer>-</StyledSpacer>}
          </React.Fragment>
        ))}
      </FilterContainer>
    </StyledFilterArea>
  );
}