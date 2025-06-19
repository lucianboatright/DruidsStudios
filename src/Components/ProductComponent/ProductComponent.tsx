
import { StyledCard, StyledTitle, StyledDetails, StyledContent } from './ProductComponent.styles';


type Item = {
  id: number;
  company: string;
  details: string;
  content: any;
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
            <StyledContent >{item.content}</StyledContent>
          </StyledCard>
        ))}
      </div>
    </>
  );
}