import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  padding-top: 6rem;
  background: #f4f4f9;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #7e57c2, #5e35b1);
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const HeroButton = styled(Link)`
  display: inline-block;
  background: orangered;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: darkorange;
  }
`;

export const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding: 4rem 1rem;
`;

export const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: #7e57c2;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 0.95rem;
  color: #555;
`;
