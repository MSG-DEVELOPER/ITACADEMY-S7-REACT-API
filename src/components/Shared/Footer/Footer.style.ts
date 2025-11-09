import styled from "styled-components";

export const FooterContainer = styled.footer`
  font-family: "Poppins", sans-serif;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.05) inset,
    0 -4px 24px rgba(0, 0, 0, 0.4);
  padding: 2.5rem 2rem;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeveloperInfo = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const DeveloperLink = styled.a`
  color: #a78bfa;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: #c4b5fd;
    text-decoration: underline;
  }

  &:active {
    color: #8b5cf6;
  }
`;

export const CompanyInfo = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const CompanyLogo = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
  opacity: 0.9;
  transition: all 0.2s ease;
  filter: brightness(0) invert(1);

  @media (max-width: 768px) {
    height: 28px;
  }
`;

export const CompanyLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);

    img {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(0);
  }

  span {
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const FooterDivider = styled.div`
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 1px;
  }
`;

