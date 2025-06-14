
import {
  HomeWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  FeaturesSection,
  FeatureCard,
  CardIcon,
  CardTitle,
  CardText,
} from "./Home.style";
import { Film, CheckCircle, Lock } from "lucide-react";

export default function Home() {
  return (
    <HomeWrapper>
      <HeroSection>
        <HeroTitle>Bienvenido a MovieZone</HeroTitle>
        <HeroSubtitle>Descubre, registra y disfruta de tus películas favoritas</HeroSubtitle>
        <HeroButton to="/films">Explorar Films</HeroButton>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard>
          <CardIcon as={Film} />
          <CardTitle>Explora Catálogo</CardTitle>
          <CardText>Accede a una amplia base de datos de películas y series.</CardText>
        </FeatureCard>

        <FeatureCard>
          <CardIcon as={CheckCircle} />
          <CardTitle>Regístrate Fácil</CardTitle>
          <CardText>Crea tu cuenta en segundos con email y contraseña.</CardText>
        </FeatureCard>

        <FeatureCard>
          <CardIcon as={Lock} />
          <CardTitle>Sesiones Seguras</CardTitle>
          <CardText>Mantén tu sesión protegida gracias a Firebase Auth.</CardText>
        </FeatureCard>
      </FeaturesSection>
    </HomeWrapper>
  );
}
