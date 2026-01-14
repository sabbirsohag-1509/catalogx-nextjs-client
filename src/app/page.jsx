
import Image from "next/image";
import Hero from "./components/landing/Hero/Hero";
import FeaturesItems from "./components/landing/FeaturesItems/FeaturesItems";
import AboutUs from "./components/landing/AboutUs/AboutUs";
import Services from "./components/landing/Services/Services";
import Testimonials from "./components/landing/Testimonials/Testimonials";
import FAQ from "./components/landing/FAQ/FAQ";
import Newsletter from "./components/landing/Newsletter/Newsletter";
import ContactWithUs from "./components/landing/ContactWithUs/ContactWithUs";

export default function Home() {
  return (
    <div> 
      <Hero></Hero>
      <FeaturesItems></FeaturesItems>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Newsletter></Newsletter>
      <ContactWithUs></ContactWithUs>
    </div>
  );
}
