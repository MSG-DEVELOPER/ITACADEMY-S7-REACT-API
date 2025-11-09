import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(31, 31, 46, 0.1);
  border: 1px solid rgba(126, 87, 194, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 220px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(31, 31, 46, 0.15);
    border-color: rgba(126, 87, 194, 0.2);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    min-height: 200px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
`;

export const CardInner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 150px;
  min-width: 150px;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fb 0%, #e8eaf6 100%);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 280px;
    padding-top: 150%;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const VoteBadge = styled.div<{ $top: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background: ${({ $top }) =>
    $top
      ? "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
      : "rgba(0, 0, 0, 0.75)"};
  backdrop-filter: blur(10px);
  padding: 0.4rem 0.6rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 2;

  .vote-value {
    font-weight: 700;
    font-size: 0.9rem;
    color: #ffffff;
    line-height: 1;
  }

  .vote-icon {
    font-size: 0.75rem;
    color: ${({ $top }) => ($top ? "#ffffff" : "#fbbf24")};
    line-height: 1;
  }
`;

export const TopBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: linear-gradient(135deg, #7e57c2 0%, #5e35b1 100%);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(94, 53, 177, 0.4);
  z-index: 2;
`;

export const CardContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: auto;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1f1f2e;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardOverview = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #4a4a5c;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
  opacity: 0.85;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(126, 87, 194, 0.1);
  margin-top: 0;
  flex-shrink: 0;
`;

export const ReleaseDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;

  svg {
    color: #7e57c2;
    flex-shrink: 0;
  }
`;

export const VoteCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;

  svg {
    color: #7e57c2;
    flex-shrink: 0;
  }
`;
