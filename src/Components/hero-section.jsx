import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const HeroSection = () => {
  const typewriterWords = [
    { text: "Full Stack", className: "text-3xl sm:text-5xl underline text-black" },
    { text: "Developer", className: "text-3xl sm:text-5xl font-extrabold font-mono outline-text" },
  ];

  return (
    <div className="container mx-auto pt-10 px-4">
      <div className="flex flex-col-reverse md:flex-row items-center relative">
        <div className="flex flex-col flex-grow">
          <div className="whitespace-normal space-y-3 mt-8 md:mt-32">
            <h1 className="text-3xl sm:text-5xl font-normal text-black">
              Hello I’m <span className="font-bold">Arish Izhar</span>
            </h1>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-black">
              <TypewriterEffectSmooth words={typewriterWords} />
            </h1>
            <h1 className="text-3xl sm:text-5xl font-normal text-black">
              Based In <span className="font-bold">Canada.</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg mt-6 font-mono text-black mb-12 sm:mb-28 w-full sm:w-3/4">
            Creatively inclined & dedicated with a solid foundation in modern web technologies, 
            focused on crafting seamless, user-friendly & high-performance applications.
          </p>

          <div className="socials flex flex-row space-x-6 sm:space-x-8 mt-6">
            <a href="https://github.com/arish73" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-3xl sm:text-5xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com//" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-3xl sm:text-5xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:izhar.arish@gmail.com" className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-3xl sm:text-5xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="image flex-shrink-0 relative mb-8 md:mb-0 ">
          <img src="/f200.svg" alt="image" className="block mx-auto" />
          <div className="line absolute bottom-0 left-0 w-full h-1 bg-black md:w-[140%] md:left-[-20%] lg:w-[160%] lg:left-[-50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
