
import Image from "next/image";
import Hero from "./components/landing/Hero/Hero";
import FeaturesItems from "./components/landing/FeaturesItems/FeaturesItems";

export default function Home() {
  return (
    <div> 
      <Hero></Hero>
      <FeaturesItems></FeaturesItems>
    </div>
  );
}
