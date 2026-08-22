import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Plans from "@/components/Plans/Plans";
import Streaming from "@/components/Streaming/Streaming";
import Extras from "@/components/Extras/Extras";
import PhonePlans from "@/components/PhonePlans/PhonePlans";
import Coverage from "@/components/Coverage/Coverage";
import Support from "@/components/Support/Support";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Plans />
      <Streaming />
      <Extras />
      <PhonePlans />
      <Coverage />
      <Support />
      <Footer />
    </main>
  );
}