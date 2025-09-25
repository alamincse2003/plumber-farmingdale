import About from "./components/home/About";
import Hero from "./components/home/Hero";
import PlumbingServices from "./components/home/PlumbingServices";
import WhyChooseUs from "./components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <PlumbingServices />
    </>
  );
}
