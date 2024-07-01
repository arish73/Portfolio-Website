import React from 'react';



const HeroSection = () => {
  return (
    <div className="flex flex-row container mx-auto items-center pt-10">
        <div className="flex flex-col">
            <div className="whitespace-nowrap space-y-3 mt-32 justify-start">
                <h1 class="text-5xl font-normal">Hello I’m <span class="font-bold">Arish Izhar</span></h1>
                <h1 class="text-5xl font-extrabold"><span class="underline">Full Stack</span> <span className="font-mono outline-text">Developer</span></h1>
                <h1 class="text-5xl font-normal">Based In <span class="font-bold">Canada.</span></h1>

            </div>
            

            <p className="text-lg mt-6 mx-auto font-mono ">Creatively inclined and dedicated 
                with a solid foundation in modern web technologies, 
                focused on crafting seamless, user-friendly & high-performance applications 
                </p>


            <div className="socials flex flex-row space-x-10 mt-36 justify-start">
                <a href="https://github.com/arish73" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center text-5xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
                    <i className="devicon-github-original"></i>
                </a>
                <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center text-5xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:izhar.arish@gmail.com" className="w-16 h-16 flex items-center justify-center text-5xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
                    <i className="fa-solid fa-envelope"></i>
                </a>

            </div>
        </div>

        <div className="image flex-shrink-0">
            <img src="src/assets/frame-20-2.svg" alt="image" />
        </div>

    </div>
  );
};

export default HeroSection;
