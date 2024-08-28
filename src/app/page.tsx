import Backdrop from "./components/Backdrop";
import Background from "./components/Background";
import HeroSection from "./components/HeroSection";
import SessionSection from "./components/SessionSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Backdrop>
        <SessionSection />
        <Background />
      </Backdrop>
    </main>
  );
}
