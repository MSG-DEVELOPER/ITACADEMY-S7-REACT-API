import styled from "styled-components";

export const PageWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  padding-top: 5rem;
  background: linear-gradient(180deg, #f8f5ff 0%, #ffffff 55%, #f5f7fb 100%);
  padding: 6rem 1.5rem 4rem;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 200px));
  gap: 2rem;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 180px));
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1.25rem;
  }
`;

export const LoadingContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 2rem;

  p {
    color: #6b7280;
    font-size: 1.1rem;
    text-align: center;
    margin: 0;
  }
`;
