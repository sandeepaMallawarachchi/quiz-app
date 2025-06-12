import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "..//components/Contact";
import Footer from "../components/Footer";
import FeaturedQuiz from "../components/FeaturedQuiz";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedQuiz />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
