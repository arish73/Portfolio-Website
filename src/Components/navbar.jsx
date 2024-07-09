import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar relative container mx-auto mt-10">
      {/* flex container */}
      <div className="flex items-center justify-between">
        <div className="alex-brush-regular font-bold">
          ArishIzhar
        </div>
      
        {/* menu items */}
        <div className="div flex space-x-5">
          <Link
            to="AboutMe"
            smooth={true}
            duration={500}
            className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            About Me
          </Link>
          <Link
            to="Skills"
            smooth={true}
            duration={500}
            className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Skills
          </Link>
          <Link
            to="Experience"
            smooth={true}
            duration={500}
            className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Experience
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Projects
          </Link>
          <Link
            to="ContactMe"
            smooth={true}
            duration={500}
            className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Contact Me
          </Link>
        </div>

        {/* Download resume button */}
        <a href="#" className="text-white bg-black rounded px-3 py-1 hover:bg-white hover:text-black focus:outline-none focus:ring-7 focus:ring-blue-600 focus:ring-opacity-50 hover:ring-2 hover:ring-black">
          <i className="fa-solid fa-download px-1"></i> Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
