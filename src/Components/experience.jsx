import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

const techLinks = [
    { 
        name: 'Academic Internship, Backend Software Developer at Semper8', 
        duration: 'Jan-April 2024', 
        content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.`
    },
    { 
        name: 'Tata 1MG', 
        duration: 'July-Nov 2022', 
        content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.`
    },
    { 
        name: 'Tata 1MG', 
        duration: 'Jan-June 2022', 
        content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.` 
    },
    { 
        name: 'Yamaha Motor Technologies', 
        duration: 'May-Sept 2020', 
        content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.` 
    }
];

const Experience = () => {
  return (
    <div className="relative bg-black text-white w-full mt-20 pt-8 mx-auto pb-12">
      <BackgroundBeams className="z-0" />
      <div className="relative z-10 text-center">
        <div>
          <h2 className="text-4xl font-semibold">Experience</h2>
        </div>
        <div>
          {techLinks.map((item, index) => (
            <div key={index} className="bg-grey rounded-lg p-6 mx-10 my-10 border border-white">
              <div className="flex justify-between items-center mb-4 text-red">
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="text-lg">{item.duration}</span>
              </div>
              <div>
                <p className="text-white">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
