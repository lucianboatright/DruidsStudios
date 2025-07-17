
import { StyledCard, StyledTitle, StyledDetails, StyledContent, StyledDimensions, StyledCost } from './ProductComponent.styles';


type Item = {
  id: number;
  company: string;
  details?: string;
  dimensions?: string;
  cost?: string;
  content?: any;
};

type ProductComponentProps = {
  items: Item[];
};


export default function ProductComponent({ items }: ProductComponentProps) {


  return (
    <>
      <div>
        {items.map(item => (
          <StyledCard key={item.id}>
            <StyledTitle >{item.company}</StyledTitle>
            <StyledDetails >{item.details}</StyledDetails>
            {item.dimensions &&
            <>
              <StyledDimensions >Dimensions: {item.dimensions}</StyledDimensions>
              <StyledCost >Cost: {item.cost}</StyledCost>
            </>
            }
            <StyledContent >{item.content}</StyledContent>
          </StyledCard>
        ))}
      </div>
    </>
  );
}