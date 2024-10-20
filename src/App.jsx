import Hero from "./components/Hero/Hero";
// import "./index.css";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
