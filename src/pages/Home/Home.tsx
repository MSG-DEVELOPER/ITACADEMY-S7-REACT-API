
import {
  HomeWrapper,
  HeroSection,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  HeroPrimaryButton,
  HeroSecondaryButton,
  FeaturesSection,
  FeatureCard,
  CardIcon,
  CardTitle,
  CardText,
  StatsSection,
  StatItem,
  StatNumber,
  StatLabel,
  CTASection,
  CTAContent,
  CTATitle,
  CTAText,
  CTAButton,
} from "./Home.style";
import { Film, CheckCircle, Lock } from "lucide-react";

export default function Home() {
  return (
    <HomeWrapper>
      <HeroSection>
        <HeroContent>
          <HeroBadge>MovieZone</HeroBadge>
          <HeroTitle>Tu nueva plataforma para descubrir cine</HeroTitle>
          <HeroSubtitle>
            Explora un catálogo curado, crea colecciones personalizadas y
            mantén tus sesiones seguras con nuestra integración de Firebase Auth.
          </HeroSubtitle>

          <HeroButtons>
            <HeroPrimaryButton to="/films">Explorar películas</HeroPrimaryButton>
            <HeroSecondaryButton to="/register">Crear cuenta</HeroSecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <StatItem>
          <StatNumber>+3K</StatNumber>
          <StatLabel>Películas catalogadas</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>98%</StatNumber>
          <StatLabel>Usuarios satisfechos</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>24/7</StatNumber>
          <StatLabel>Acceso a la plataforma</StatLabel>
        </StatItem>
      </StatsSection>

      <FeaturesSection>
        <FeatureCard>
          <CardIcon as={Film} />
          <CardTitle>Explora catálogo</CardTitle>
          <CardText>
            Accede a una base de datos en constante expansión con reseñas y metadatos.
          </CardText>
        </FeatureCard>

        <FeatureCard>
          <CardIcon as={CheckCircle} />
          <CardTitle>Regístrate fácil</CardTitle>
          <CardText>
            Crea tu cuenta en segundos y sincroniza tu actividad en todos tus dispositivos.
          </CardText>
        </FeatureCard>

        <FeatureCard>
          <CardIcon as={Lock} />
          <CardTitle>Sesiones seguras</CardTitle>
          <CardText>
            Mantén tu perfil protegido con autenticación robusta basada en Firebase.
          </CardText>
        </FeatureCard>
      </FeaturesSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Empieza a construir tu lista de reproducción cinéfila</CTATitle>
          <CTAText>
            Únete gratis, guarda tus títulos favoritos y recibe recomendaciones personalizadas.
          </CTAText>
        </CTAContent>
        <CTAButton to="/register">Comenzar ahora</CTAButton>
      </CTASection>
    </HomeWrapper>
  );
}