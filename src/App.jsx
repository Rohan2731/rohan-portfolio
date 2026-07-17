import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingJourney from "./components/CodingJourney";
import LearningRoadmap from "./components/LearningRoadmap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodingJourney />
      <LearningRoadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;