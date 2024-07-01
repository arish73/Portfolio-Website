import React from 'react';


const Skills = () => {
  return (
    <div className="text-center mx-auto mt-20">
        <div>
            <h2 className="text-4xl font-semibold">Skills</h2>
        </div>

        <div className="flex justify-center items-center bg-gray-500 mt-12 space-x-16">
          <div className="w-44 h-44 flex flex-col justify-center items-center bg-white shadow-md rounded-md border-4 border-black transition-custom hover:bg-black group">
            <div className="mb-4">
              <i className="devicon-javascript-plain text-6xl text-black group-hover:text-white"></i>
            </div>
            <div className="text-lg font-bold text-gray-800 p-2 transition-transform duration-300 ease-in-out group-hover:text-white group-hover:translate-y-4">
              JavaScript
            </div>
          </div>






        </div>

        


            
    </div>

  );
};

export default Skills;






items.map(item=> (

  <div className="w-44 h-44 flex flex-col justify-center items-center bg-white shadow-md rounded-md border-4 border-black transition-custom hover:bg-black group">
<div className="mb-4">
  <i className="{item.icon} text-6xl text-black group-hover:text-white"></i>
</div>
<div className="text-lg font-bold text-gray-800 p-2 transition-transform duration-300 ease-in-out group-hover:text-white group-hover:translate-y-4">
  {item.name}
</div>
</div>
  
) )
