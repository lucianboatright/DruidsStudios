
import styled from 'styled-components';
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


const BottomRow = styled.div({
  gridColumn: "1 / -1",     
  display: "flex",
  gap: "0.75rem",
  alignItems: "flex-end",
  marginTop: "2rem",
  flexWrap: "wrap",
  // overflowX: "auto",         
  paddingBottom: "2px",
  justifyContent: 'space-evenly',
  // maxWidth: '50%',
});

const RowImg = styled.img(() => ({
  maxHeight: `300px`,           
  width: "auto",              
  display: "block",
  borderRadius: "6px",
  '@media (min-width: 691px) and (max-width: 1222px)': {
    maxHeight: '250px',
  },

  '@media (max-width: 690px)': {
    maxHeight: 'none',
    width: '90%',
  },

}));



export default function ProductComponent({ items }: ProductComponentProps) {


  return (
    <>
      <div>
        {items.map(item => {
          let hasdetails = item.dimensions
          console.log('hasdetails', hasdetails)
          return (
          <StyledCard key={item.id} hasdetails={hasdetails}>
            <StyledTitle >{item.company}</StyledTitle>
            <StyledDetails >{item.details}</StyledDetails>
            {item.dimensions &&
            <>
              <StyledDimensions >Dimensions: {item.dimensions}</StyledDimensions>
              <StyledCost >Cost: {item.cost}</StyledCost>
            </>
            }
     {/* {item.length > 0 && ( */}
        <BottomRow>
          {item.content.map((img: any, i: any) => (
            <RowImg key={i} src={img} alt={img.alt || `${i + 1}`} />
          ))}
        </BottomRow>
      {/* )} */}
            {/* <StyledContent>{item.content}</StyledContent> */}
          </StyledCard>
        )})}
      </div>
    </>
  );
}