import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission is handled by Netlify
  };

  return (
    // Overall main div
    <div>
            {/* Heading div */}
            <div className='text-center m-10'>
                <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>
            </div>
    
    {/* Form and contact me call div */}
    <div className='flex m-10 items-center'>

    {/* Form div */}
    <div className='container'>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-black font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-black font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-black font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>
      </div>

    <div className='flex space-x-4 items-center justify-center'>
      <button
        type="submit"
        className="w-full text-white bg-black rounded px-2 py-2 text-xl
      hover:bg-white hover:text-black focus:outline-none focus:ring-7 focus:ring-blue-600 focus:ring-opacity-50 hover:ring-2 hover:ring-black transition duration-300"
      >
        Send Message
      </button>

      {/* Logos div */}
    <div className="socials flex flex-row space-x-5 ">
            <a href="https://github.com/arish73" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-4xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-4xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:izhar.arish@gmail.com" className="w-12 h-12 flex items-center justify-center text-4xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="fa-solid fa-envelope"></i>
            </a>
    </div>

      </div>
      
    </form>
    {/* Logos div
    <div className="socials flex flex-row space-x-5 mt-6 items-center justify-center">
            <a href="https://github.com/arish73" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-4xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-4xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:izhar.arish@gmail.com" className="w-12 h-12 flex items-center justify-center text-4xl border-2 p-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
              <i className="fa-solid fa-envelope"></i>
            </a>
    </div> */}

    </div>

    {/* Call to action div */}
    <div className='container mx-auto items-center justify-center'>
        <div>
        <h1 className='text-4xl font-bold m-10'>Got a project or role in mind? Let's <span className='font-extrabold font-mono outline-text text5xl
        '>connect!</span></h1>
        <h1 className='text-3xl font-semibold m-10 font-mono'>izhar.arish@gmail.com</h1>
        </div>



    </div>
    </div>
        {/* Footer */}
    <div className='bg-black flex justify-between text-white items-center p-4'>
    <div className="flex-1">
        <h1>Arish Izhar</h1>
    </div>
    <div className='flex flex-col items-end space-y-1'>
        <div>
        <h1>Loosely designed in Figma & deployed via netlify</h1>
        </div>
        <div>
        <h1>Made using React, TailwindCSS, FramerMotion & AternityUI animations</h1>
        </div>
    </div>
    </div>

    </div>
  );
};

export default ContactMe;