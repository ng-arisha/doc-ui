import About from "@/components/ui/about";
import Cta from "@/components/ui/cta";
import Hero from "@/components/ui/hero";
import Services from "@/components/ui/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Cta />
    </div>
  );
}
