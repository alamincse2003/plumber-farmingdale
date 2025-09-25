import About from "./components/home/About";
import AreasAndDirections from "./components/home/AreasAndDirections";
import Contact from "./components/home/Contact";
import Faq from "./components/home/Faq";
import Hero from "./components/home/Hero";
import LocalExperts from "./components/home/LocalExperts";
import Map from "./components/home/Map";
import PlumbingServices from "./components/home/PlumbingServices";
import ServicesWeProvide from "./components/home/ServicesWeProvide";
import ServicesWeProvideList from "./components/home/ServicesWeProvideList";
import TestimonialBanner from "./components/home/testimonial/TestimonialBanner";
import TestimonialRanting from "./components/home/testimonial/TestimonialRating";
import WhyChooseUs from "./components/home/WhyChooseUs";

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
      <TestimonialRanting />
      <Faq />
      <Contact />
      <ServicesWeProvideList />
      <Map />
      <AreasAndDirections />
    </>
  );
}
