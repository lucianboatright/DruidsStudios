import React from 'react';
import { StyledButton, StyledList, StyledSpacer } from './filterSection.styles';

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
      <>
        <StyledList>

          {filters.map((filter, index) => (
            <React.Fragment key={filter.value}>
              {index < filters.length - 1 && 
              <li>
                <StyledButton onClick={() => setActiveFilter(filter.value)}>
                  {filter.label}
                </StyledButton>
              </li>
                }
              {/* {index < filters.length - 1 && <StyledSpacer>-</StyledSpacer>} */}
            </React.Fragment>
          ))}
        </StyledList>
        </>
  );
}