import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  padding-top: 5rem;
  background: linear-gradient(180deg, #f8f5ff 0%, #ffffff 55%, #f5f7fb 100%);
  min-height: 100vh;
  color: #1f1f2e;
`;

export const HeroSection = styled.section`
  position: relative;
  padding: 6rem 1.5rem 5rem;
  display: flex;
  justify-content: center;
  background: radial-gradient(circle at top right, rgba(126, 87, 194, 0.18), transparent),
    radial-gradient(circle at bottom left, rgba(94, 53, 177, 0.22), transparent);
`;

export const HeroContent = styled.div`
  max-width: 820px;
  text-align: center;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  background: rgba(126, 87, 194, 0.12);
  color: #5e35b1;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.2rem;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.05rem, 2.2vw, 1.3rem);
  opacity: 0.82;
  margin: 0 auto 2.5rem;
  max-width: 560px;
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const BaseButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 0.9rem 1.9rem;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 12px 30px rgba(94, 53, 177, 0.22);

  &:hover {
    transform: translateY(-3px);
  }
`;

export const HeroPrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #7e57c2 0%, #5e35b1 100%);
  color: #ffffff;

  &:hover {
    box-shadow: 0 18px 36px rgba(94, 53, 177, 0.28);
  }
`;

export const HeroSecondaryButton = styled(BaseButton)`
  background: #ffffff;
  color: #5e35b1;
  border: 1px solid rgba(94, 53, 177, 0.2);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);

  &:hover {
    box-shadow: 0 16px 30px rgba(15, 23, 42, 0.12);
  }
`;

export const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 3.5rem 1.5rem 0;
  max-width: 880px;
  margin: 0 auto;
`;

export const StatItem = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 1.8rem 1.6rem;
  text-align: center;
  box-shadow: 0 16px 35px rgba(31, 31, 46, 0.08);
  border: 1px solid rgba(126, 87, 194, 0.08);
`;

export const StatNumber = styled.span`
  font-size: 2rem;
  font-weight: 700;
  display: block;
  color: #5e35b1;
  margin-bottom: 0.4rem;
`;

export const StatLabel = styled.span`
  font-size: 0.95rem;
  opacity: 0.7;
`;

export const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 4.5rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FeatureCard = styled.article`
  background: #ffffff;
  border-radius: 18px;
  padding: 2.3rem 2rem;
  text-align: left;
  box-shadow: 0 18px 40px rgba(31, 31, 46, 0.08);
  border: 1px solid rgba(126, 87, 194, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 46px rgba(31, 31, 46, 0.12);
  }
`;

export const CardIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(126, 87, 194, 0.15);
  color: #5e35b1;
  display: grid;
  place-items: center;
  margin-bottom: 1.3rem;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

export const CardText = styled.p`
  font-size: 0.98rem;
  line-height: 1.6;
  color: #4a4a5c;
`;

export const CTASection = styled.section`
  margin: 1rem 1.5rem 5rem;
  background: linear-gradient(120deg, #5e35b1 0%, #7e57c2 100%);
  border-radius: 24px;
  padding: 3.5rem clamp(1.8rem, 4vw, 4rem);
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  box-shadow: 0 24px 48px rgba(94, 53, 177, 0.35);
`;

export const CTAContent = styled.div`
  max-width: 520px;
`;

export const CTATitle = styled.h2`
  font-size: clamp(1.75rem, 3.2vw, 2.2rem);
  margin-bottom: 0.8rem;
`;

export const CTAText = styled.p`
  font-size: 1.05rem;
  opacity: 0.85;
`;

export const CTAButton = styled(Link)`
  background: #ffffff;
  color: #5e35b1;
  font-weight: 700;
  text-decoration: none;
  padding: 0.95rem 2.4rem;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.18);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.24);
  }
`;

