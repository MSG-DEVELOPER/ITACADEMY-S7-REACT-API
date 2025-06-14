import styled from "styled-components";
import { Link } from "react-router-dom";

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
  align-items: center;
`;

export const StyledLink = styled(Link)<{$auth: boolean}>`
  text-decoration: none;
  color: white;
  font-weight: 700;
  padding: 5px 10px;
  transition: 0.3s;
  border-radius: 4px;
  background-color: ${({ $auth }) => ($auth ? "orangered" : "transparent")};
  border: ${({ $auth }) => ($auth ? "1px solid white" : "none")};

  &:hover {
    background-color: ${({ $auth }) => ($auth ? "darkorange" : "blue")};
  }
`;

export const UserGreeting = styled.span`
  color: white;
  font-weight: 700;
  margin-right: 1rem;
`;

export const LogoutButton = styled.button`
  background-color: white;
  color: orangered;
  font-weight: bold;
  border: 1px solid orangered;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: orangered;
    color: white;
  }
`;