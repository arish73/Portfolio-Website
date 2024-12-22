import React from "react";
import "./App.css";
import { useRef } from "react";
// Components
import Navbar from "./Components/navbar";
import HeroSection from "./Components/hero-section";
import Skills from "./Components/skills";
import Experience from "./Components/experience";
import AboutMe from "./Components/about-me";
import ContactMe from "./Components/contact-me";
import Projects from "./Components/projects";

const App = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        onLinkClick={scrollToSection}
        refs={{
          hero: heroRef,
          skills: skillsRef,
          experience: experienceRef,
          aboutMe: aboutMeRef,
          projects: projectsRef,
          contactMe: contactMeRef,
        }}
      />
      <section id="Hero" ref={heroRef}>
        <HeroSection />
      </section>

      <section id="Skills" ref={skillsRef}>
        <Skills />
      </section>

      <section id="Experience" ref={experienceRef}>
        <Experience />
      </section>

      <section id="AboutMe" ref={aboutMeRef}>
        <AboutMe />
      </section>

      <section id="Projects" ref={projectsRef}>
        <Projects />
      </section>

      <section id="ContactMe" ref={contactMeRef}>
        <ContactMe />
      </section>
    </div>
  );
};

export default App;
