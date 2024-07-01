import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar relative container mx-auto mt-10">
      {/* flex container */}
      <div className="flex items-center justify-between">
        <div>
        ArishIzhar        </div>
      
      {/* menu items */}
      <div className="div flex space-x-5 ">
        <a href="#" className=" px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" >About Me</a>
        <a href="#" className=" px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Skills</a>
        <a href="#" className=" px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Experience</a>
        <a href="#" className=" px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Projects</a>
        <a href="#" className=" px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Contact Me</a>
      </div>

      {/* Download resume button */}
      <a href="#" className="text-white bg-black rounded px-3 py-1 
      hover:bg-white hover:text-black focus:outline-none focus:ring-7 focus:ring-blue-600 focus:ring-opacity-50 hover:ring-2 hover:ring-black">
        <i className="fa-solid fa-download px-1"></i> Resume</a>
    </div>



    </nav>
  );
};

export default Navbar;
