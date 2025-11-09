import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 200px;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(31, 31, 46, 0.1);
  border: 1px solid rgba(126, 87, 194, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(31, 31, 46, 0.15);
    border-color: rgba(126, 87, 194, 0.2);

    img {
      transform: scale(1.05);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fb 0%, #e8eaf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #7e57c2 0%, #5e35b1 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const AvatarInitials = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const Info = styled.div`
  padding: 1.25rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const ActorName = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: #1f1f2e;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.6rem;
`;

export const CharacterName = styled.p`
  font-size: 0.85rem;
  color: #7e57c2;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.85;
`;
