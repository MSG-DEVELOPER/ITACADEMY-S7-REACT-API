import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem;
 
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;
