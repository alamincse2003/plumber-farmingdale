import About from "./components/home/About";
import Hero from "./components/home/Hero";
import LocalExperts from "./components/home/LocalExperts";
import PlumbingServices from "./components/home/PlumbingServices";
import ServicesWeProvide from "./components/home/ServicesWeProvide";
import WhyChooseUs from "./components/home/WhyChooseUs";
import TestimonialBanner from "./components/testimonial/TestimonialBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <PlumbingServices />
      <LocalExperts />
      <ServicesWeProvide />
      <TestimonialBanner />
    </>
  );
}
