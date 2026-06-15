import "./MainPage.css";
import { Modal } from "../../shared/components/Modal/Modal";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactSection } from "./components/ContactSection";
import { BurgerMenu } from "../../shared/components/BurgerMenu/BurgerMenu";
export function MainPage() {
  return (
    <main>
      <HeroSection />
      <BurgerMenu />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Modal content={null} />
    </main>
  );
}
