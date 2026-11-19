import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionNavigation from "./components/SectionNavigation";

function App() {
  
  return (
    <main>
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SectionNavigation />
    </main>
  );
}

export default App;
