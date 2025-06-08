import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: #fff;
  background-color: #1e1e1e;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ff4d4f;
`;

export const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  text-align: center;
  max-width: 500px;
`;
