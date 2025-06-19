import styled from 'styled-components';

export const Grid = styled.div`
//   display: ;
  gap: 1rem;
  width: 100%;
  margin: 2rem 0;
  
  `;
  
  export const Image = styled.img<{ area: string }>`
  max-width: 40%;
  margin-right: 0.5rem;
  height: auto;
//   display: block;
//   object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
`;