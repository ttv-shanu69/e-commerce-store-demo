import Image from "next/image";
import Navbar from "./Components/NavBar";
import Hero from "./Components/HeroSection";
import Collections from "./Components/Collections";
import Products from "./Components/Products";
import SpecialOffer from "./Components/CTAsection";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collections />
      <Products />
      <SpecialOffer />
      <Testimonials />
      <Footer />
    </div>
  );
}
