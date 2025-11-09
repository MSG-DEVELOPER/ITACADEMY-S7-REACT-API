import styled from "styled-components";

export const Body = styled.div`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  padding-top: 5rem;
  background: linear-gradient(180deg, #f8f5ff 0%, #ffffff 55%, #f5f7fb 100%);
  padding: 6rem 1.5rem 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(550px, 600px));
  gap: 1.5rem;
  justify-content: center;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 5rem 1rem 3rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 5rem 0.75rem 2rem;
    gap: 1.25rem;
  }
`;

export const LoadMoreContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100px;

  p {
    color: #6b7280;
    font-size: 0.95rem;
    text-align: center;
    margin: 0;
  }
`;
