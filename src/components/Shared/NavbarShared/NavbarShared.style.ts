import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 4px 24px rgba(0, 0, 0, 0.4);
`;

export const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
    padding: 1rem 1.5rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const BrandAccent = styled.span`
  background: linear-gradient(135deg, #a78bfa 0%, #7e57c2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  font-size: 0.9375rem;
  letter-spacing: -0.01em;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    color: #ffffff;
    background: rgba(126, 87, 194, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export const AuthGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const AuthButton = styled(Link)<{ $primary?: boolean }>`
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  letter-spacing: -0.01em;
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;

  ${({ $primary }) =>
    $primary
      ? `
    background: linear-gradient(135deg, #7e57c2 0%, #5e35b1 100%);
    color: #ffffff;
    border: 1px solid rgba(126, 87, 194, 0.3);
    box-shadow: 0 2px 8px rgba(94, 53, 177, 0.2);

    &:hover {
      background: linear-gradient(135deg, #8b68d1 0%, #6d42c4 100%);
      box-shadow: 0 4px 12px rgba(94, 53, 177, 0.3);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  `
      : `
    background: transparent;
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.3);
      color: #ffffff;
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

export const UserGreeting = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.9375rem;
  background: rgba(126, 87, 194, 0.15);
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  border: 1px solid rgba(126, 87, 194, 0.2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    max-width: 100%;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.9375rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.4);
    color: #ffffff;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;