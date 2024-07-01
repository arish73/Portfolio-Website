import React from 'react';

const techLinks = [
  { name: 'Javascript', icon: 'devicon-javascript-plain' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'Node', icon: 'devicon-nodejs-plain-wordmark' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Html', icon: 'devicon-html5-plain' },
  { name: 'Css', icon: 'devicon-css3-plain' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original' },
  { name: 'Postgres', icon: 'devicon-postgresql-plain' },
  { name: 'Mongodb', icon: 'devicon-mongodb-plain' },
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'Django', icon: 'devicon-django-plain-wordmark' },
  { name: 'Flask', icon: 'devicon-flask-original' },
  { name: 'Git', icon: 'devicon-github-original' },
  { name: 'C', icon: 'devicon-c-plain' },
  { name: 'Prisma', icon: 'devicon-prisma-original' },
  { name: 'Rails', icon: 'devicon-rails-plain' },
  { name: 'Figma', icon: 'devicon-figma-plain' },
  { name: 'Jira', icon: 'devicon-jira-plain' }
];

const Skills = () => {
  return (
    <div className="text-center mx-auto mt-20">
      <div>
        <h2 className="text-4xl font-semibold">Skills</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center bg-gray-500 mt-12 gap-4">
        {techLinks.map((item, index) => (
          <div
            key={index}
            className="w-44 h-44 flex flex-col justify-center items-center bg-white shadow-md rounded-md border-4 border-black transition-custom hover:bg-black group m-2 p-4"
          >
            <div className="mb-4">
              <i className={`${item.icon} text-6xl text-black group-hover:text-white`}></i>
            </div>
            <div className="text-lg font-bold text-gray-800 p-2 transition-transform duration-300 ease-in-out group-hover:text-white group-hover:translate-y-4">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
