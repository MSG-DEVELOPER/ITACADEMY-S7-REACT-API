import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div<{ $top: boolean }>`
  position: relative;
  width: 185px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  
  p {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 40px;
    height: 40px;
    background-color: ${({ $top }) => ($top ? "purple" : "#f0e6d2")};
    color: ${({ $top }) => ($top ? "#ffd700" : "#333")};
    font-size: ${({ $top }) => ($top ? "1.8rem" : "1rem")};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin: 0;
  }

  article {
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Altura mínima para alinear todas igual */
    min-height: 4.5rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #222;
    margin: 0;
    text-align: center;
    line-height: 1.2;
    /* Máximo 2 líneas */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;
