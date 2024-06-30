import React from 'react';
import './App.css';

// Components
import Navbar from './Components/navbar';
import HeroSection from './Components/hero-section'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section>
        <HeroSection />
      </section>

    </div>
  );
};

export default App;
