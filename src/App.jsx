import React from 'react';
import './App.css';

// Components
import Navbar from './Components/navbar';
import HeroSection from './Components/hero-section'
import Skills from './Components/skills'
import Experience from './Components/experience';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section>
        <HeroSection />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Experience />
      </section>

    </div>
  );
};

export default App;
