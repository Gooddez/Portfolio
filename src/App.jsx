import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  
  return (
    <main className="pt-16">
      <Navbar></Navbar>
      <Hero />
      <About />
    </main>
  );
}

export default App;
