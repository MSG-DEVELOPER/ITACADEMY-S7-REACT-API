import {
  FooterContainer,
  FooterContent,
  FooterSection,
  DeveloperInfo,
  DeveloperLink,
  CompanyInfo,
  CompanyLink,
  CompanyLogo,
  FooterDivider,
} from "./Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <DeveloperInfo>
            Desarrollado por{" "}
            <DeveloperLink
              href="https://portfolio-mocha-psi-58.vercel.app/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              MSG Dev
            </DeveloperLink>
          </DeveloperInfo>
        </FooterSection>

        <FooterDivider />

        <FooterSection>
          <CompanyInfo>
            En colaboración con{" "}
            <CompanyLink
              href="https://solucionessole.com/home/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CompanyLogo
                src="/Soluciones.png"
                alt="Soluciones Solé"
              />
              <span>Soluciones Solé</span>
            </CompanyLink>
          </CompanyInfo>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

