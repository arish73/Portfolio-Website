import React, { useState } from "react";
import { ResumeButton } from "./resume-button";

const Navbar = ({ onLinkClick, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar relative container mx-auto mt-10 text-lg">
        <div className="flex items-center justify-between">
          <div className="mx-2 alex-brush-regular font-bold">ArishIzhar</div>

          {/* Hamburger button */}
          <button
            className="block mx-2 text-gray-900 focus:outline-none lg:hidden"
            id="menuButton"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="space-x-5 hidden lg:flex">
            <a
              className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
              onClick={() => onLinkClick(refs.skills)}
            >
              Skills
            </a>
            <a
              className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
              onClick={() => onLinkClick(refs.experience)}
            >
              Experience
            </a>
            <a
              className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
              onClick={() => onLinkClick(refs.aboutMe)}
            >
              About Me
            </a>
            <a
              className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
              onClick={() => onLinkClick(refs.projects)}
            >
              Projects
            </a>
            <a
              className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
              onClick={() => onLinkClick(refs.contactMe)}
            >
              Contact Me
            </a>
          </div>

          {/* Download Resume for Desktop */}
          <div className="hidden lg:block">
            <ResumeButton />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="flex flex-col lg:hidden m-2">
          <ul className="space-y-4">
            <li>
              <a
                className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
                onClick={() => onLinkClick(refs.skills)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
                onClick={() => onLinkClick(refs.experience)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
                onClick={() => onLinkClick(refs.aboutMe)}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
                onClick={() => onLinkClick(refs.projects)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer px-2 py-1 rounded-lg hover:bg-black hover:text-white transition duration-150"
                onClick={() => onLinkClick(refs.contactMe)}
              >
                Contact Me
              </a>
            </li>
          </ul>

          {/* Download Resume for Mobile */}
          <div className="mt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-white  bg-black rounded px-2 py-2 hover:bg-white hover:text-black focus:outline-none focus:ring-7 focus:ring-blue-600 focus:ring-opacity-50 hover:ring-2 hover:ring-black transition delay-50"
            >
              <i className="fa-solid fa-download px-1"></i> Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
