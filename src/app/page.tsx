import Backdrop from "./components/Backdrop";
import Background from "./components/Background";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SessionSection from "./components/SessionSection";
import SponsorSection from "./components/SponsorSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Backdrop>
        <SessionSection />
        <SponsorSection />
        <MapSection />
        <FAQSection />
        <ContactSection />
        <Background />
        <Footer />
      </Backdrop>
    </main>
  );
}
