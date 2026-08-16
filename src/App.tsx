import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Dsa } from "./components/Dsa";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-ink text-paper min-h-screen selection:bg-gold selection:text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Dsa />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
