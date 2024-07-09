// import React from 'react';


// const projectData = [
//     { 
//         number: '01', 
//         name: 'Full Stack Blog app uisng React & Express', 
//         content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
//         Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
//         github: 'google.com',
//         deployed: 'google.com',
//         image: '/src/assets/placeholder-project.svg'

//     },
//     { 
//         number: '02', 
//         name: 'AI SAAS', 
//         content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
//         Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
//         github: 'google.com',
//         deployed: 'google.com',
//         image: '/src/assets/placeholder-project.svg'

//     },
//     { 
//         number: '03', 
//         name: 'Single Page Portfolio Webiste using React and Tailwind ', 
//         content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
//         Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
//         github: 'google.com',
//         deployed: 'google.com',
//         image: '/src/assets/placeholder-project.svg'

//     },

// ];

// const Projects = () => {
//     return (
//       <div className='text-white bg-black'>
//           <div className='flex justify-center'>
//             <h2 className="text-4xl font-semibold">Projects</h2>
//           </div>
  
//           <div className="flex flex-col md:flex-row mx-auto m-12">
//               <div className="flex justify-center md:w-1/2">
//                   <img src="/src/assets/placeholder-project.svg" alt="image" className="w-full" />
//               </div>
//               <div className="flex flex-col ml-0 md:ml-8 mt-8 md:mt-0 md:w-1/2">
//                   <h1 className='text-5xl font-bold'>01</h1>
//                   <h1 className='text-3xl mt-2'>Full Stack Blog app using React & Express</h1>
//                   <p className='font-mono mt-6'>Developed the backend for a mobile application in the clothing industry, Stylin App. 
//                   Utilized Flask and Python for backend development, integrating with MongoDB for database management</p>
//                   <a href="https://github.com/your-repo" className="flex items-center p-2 mt-4 rounded-lg hover:bg-gray-100">
//                       <span className='pr-4 font-mono'>GitHub</span>
//                       <img src="src/assets/linklogo.svg" alt="linklogo" />
//                   </a>
  
//                   <a href="https://github.com/your-repo" className="flex items-center p-2 mt-2 rounded-lg hover:bg-gray-100">
//                       <span className='pr-4 font-mono'>Live Project</span>
//                       <img src="src/assets/linklogo.svg" alt="linklogo" />
//                   </a>
//               </div>
//           </div>
//       </div>
//     );
//   };
  
//   export default Projects;
  

import React from 'react';

const projectData = [
    { 
        number: '01', 
        name: 'Full Stack Blog app using React & Express', 
        content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
        github: 'google.com',
        deployed: 'google.com',
        image: '/src/assets/placeholder-project.svg'
    },
    { 
        number: '02', 
        name: 'AI SAAS', 
        content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
        github: 'google.com',
        deployed: 'google.com',
        image: '/src/assets/placeholder-project.svg'
    },
    { 
        number: '03', 
        name: 'Single Page Portfolio Website using React and Tailwind', 
        content: `Developed the backend for a mobile application in the clothing industry, Stylin App. 
        Utilized Flask and Python for backend development, integrating with MongoDB for database management.`,
        github: 'google.com',
        deployed: 'google.com',
        image: '/src/assets/placeholder-project.svg'
    },
];

const Projects = () => {
    return (
        <div className='text-white bg-black px-4 sm:px-6 lg:px-8 pt-12'>
            <div className='flex justify-center mb-12'>
                <h2 className="text-4xl font-semibold">Projects</h2>
            </div>
  
            <div className="max-w-7xl mx-auto">
                {projectData.map((project, index) => (
                    <div key={project.number} className={`flex flex-col md:flex-row mx-auto mb-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex justify-center md:w-5/12">
                            <img src={project.image} alt={project.name} className="w-11/12 object-cover" />
                        </div>
                        <div className={`flex flex-col mt-8 md:mt-0 md:w-7/12 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                            <h1 className='text-5xl font-bold'>{project.number}</h1>
                            <h1 className='text-3xl mt-2'>{project.name}</h1>
                            <p className='font-mono mt-6'>{project.content}</p>
                            <a href={project.github} className="flex items-center p-2 mt-4 rounded-lg hover:bg-gray-100 hover:bg-opacity-10 w-fit">
                                <span className='pr-4 font-mono'>GitHub</span>
                                <img src="src/assets/linklogo.svg" alt="linklogo" />
                            </a>
                            <a href={project.deployed} className="flex items-center p-2 mt-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-10 w-fit">
                                <span className='pr-4 font-mono'>Live Project</span>
                                <img src="src/assets/linklogo.svg" alt="linklogo" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;