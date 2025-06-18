import { StyledCard, StyledContent, StyledDetails, StyledTitle } from './ProductComponent';


type Item = {
  id: number;
  company: string;
  details: string;
  content: string;
};

type ProductComponentProps = {
  items: Item[];
};


export default function ProductComponent({ items }: ProductComponentProps) {
  return (
    <>
      <h1>Our Items</h1>
      <div className="item-grid">
        {items.map(item => (
          <StyledCard key={item.id}>
            <StyledTitle className="item-section company">{item.company}</StyledTitle>
            <StyledDetails className="item-section details">{item.details}</StyledDetails>
            <StyledContent className="item-section content">{item.content}</StyledContent>
          </StyledCard>
        ))}
      </div>
    </>
  );
}