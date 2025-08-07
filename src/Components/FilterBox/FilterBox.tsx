import { useState } from "react";
import { StyledBox, Square, StyledTitle } from './FilterBox.styles';

interface FilterBoxProps {
    text: string
}


const FilterBox = ({ text }: FilterBoxProps) => {
  const [active, setActive] = useState(false);

  return (
    <StyledBox>
      <Square active={active} />
      <StyledTitle
        onClick={() => setActive((prev) => !prev)}
      >
        {text}
      </StyledTitle>
    </StyledBox>
  );
};

export default FilterBox;