import React from "react";

const projectData = [
  {
    number: "01",
    name: "Full Stack Blog app with built in CMS and AI writing assistant [React & Express.js]",
    content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
    github: "google.com",
    deployed: "google.com",
    image: "/placeholder-project.svg",
  },
  {
    number: "02",
    name: "Anime & Manga Tracker [Next.js]",
    content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
    github: "google.com",
    deployed: "google.com",
    image: "/placeholder-project.svg",
  },
  {
    number: "03",
    name: "Single Page Portfolio Website [React and Tailwind]",
    content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
    github: "https://github.com/arish73/Portfolio-Website",
    deployed: "google.com",
    image: "/placeholder-project.svg",
  },
];

const Projects = () => {
  return (
    <div className="text-white bg-black px-4 sm:px-6 lg:px-8 pt-16 mt-10 pb-1">
      <div className="flex justify-center mb-20">
        <h2 className="text-4xl font-semibold">Projects</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={project.number}
            className={`flex flex-col md:flex-row mx-auto mb-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex justify-center md:w-5/12">
              <img
                src={project.image}
                alt={project.name}
                className="w-11/12 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div
              className={`flex flex-col mt-8 md:mt-0 md:w-7/12 ${
                index % 2 === 0 ? "md:ml-8" : "md:mr-8"
              }`}
            >
              <h1 className="text-5xl font-bold">{project.number}</h1>
              <h1 className="text-3xl mt-2">{project.name}</h1>
              <p className="font-mono mt-6">{project.content}</p>
              <a
                href={project.github}
                className="flex items-center p-2 mt-4 rounded-lg hover:bg-gray-100 hover:bg-opacity-30 w-fit"
              >
                <span className="pr-4 font-mono">GitHub</span>
                <img src="/linklogo.svg" alt="linklogo" />
              </a>
              <a
                href={project.deployed}
                className="flex items-center p-2 mt-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-30 w-fit"
              >
                <span className="pr-4 font-mono">Live Demo</span>
                <img src="/linklogo.svg" alt="linklogo" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
