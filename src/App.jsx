import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
