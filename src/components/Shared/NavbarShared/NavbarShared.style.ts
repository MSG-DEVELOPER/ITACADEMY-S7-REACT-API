import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: purple;
  padding: 1rem;
`;

export const NavGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)< {$auth: boolean} >`
  text-decoration: none;
  color: white;
  font-weight: 700;
  padding: 5px 10px;
  transition: 0.3s;
  border-radius: 4px;
  background-color: ${( {$auth} ) => ($auth ? "orangered" : "transparent")};
  border: ${( {$auth} ) => ($auth ? "1px solid white" : "none")};

  &:hover {
    background-color: ${( {$auth} ) => ($auth ? "darkorange" : "blue")};
  }

`;
