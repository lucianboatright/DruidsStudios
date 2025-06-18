
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { Link } from 'react-router-dom';
import { StyledIcons, StyledCard, StyledTitle, StyledDetails, StyledContent } from './ProductComponent.styles';


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
        <StyledIcons>
            <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
            <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
            {/* <img src={NavIcon} alt='Lgog' />
            <img src={NavIcon} alt='Lgog' /> */}
        </StyledIcons>
      <h1>Items for Hire</h1>
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