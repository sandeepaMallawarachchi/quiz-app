import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "..//components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
