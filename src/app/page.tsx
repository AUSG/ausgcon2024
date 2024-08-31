import Backdrop from "./components/Backdrop";
import Background from "./components/Background";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SessionSection from "./components/SessionSection";
import SponsorSection from "./components/SponsorSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Backdrop>
        <SessionSection />
        <SponsorSection />
        <FAQSection />
        <Background />
        <Footer />
      </Backdrop>
    </main>
  );
}
