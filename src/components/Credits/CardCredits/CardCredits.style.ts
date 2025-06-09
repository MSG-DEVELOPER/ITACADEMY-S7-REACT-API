import styled from "styled-components";

export const Card = styled.div`
  width: 160px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
`;

export const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 0.75rem;
  text-align: center;
`;

export const ActorName = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0.25rem 0;
  color: #333;
`;

export const CharacterName = styled.p`
  font-size: 0.85rem;
  color: #777;
  margin: 0;
`;
