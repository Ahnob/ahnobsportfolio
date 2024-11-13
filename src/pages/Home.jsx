import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
// import Footer from "./footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
