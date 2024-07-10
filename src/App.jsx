import React from 'react';
import './App.css';

// Components
import Navbar from './Components/navbar';
import HeroSection from './Components/hero-section'
import Skills from './Components/skills'
import Experience from './Components/experience';
import AboutMe from './Components/about-me';
import ContactMe from './Components/contact-me';
import Projects from './Components/projects';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id='Hero'>
        <HeroSection />
      </section>

      <section id='Skills'>
        <Skills />
      </section>

      <section id='Experience'>
        <Experience />
      </section>



      <section id='AboutMe'>
        <AboutMe />
      </section>

      <section id='Projects'>
        <Projects />
      </section>

      <section id='ContactMe'>
        <ContactMe />
      </section>

    </div>
  );
};

export default App;
















