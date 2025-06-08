import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const SpinnerCircle = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top: 6px solid #4f46e5;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
