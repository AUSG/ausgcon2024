import Backdrop from "./components/Backdrop";
import Background from "./components/Background";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import SessionSection from "./components/SessionSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Backdrop>
        <SessionSection />
        <FAQSection />
        <Background />
      </Backdrop>
    </main>
  );
}
