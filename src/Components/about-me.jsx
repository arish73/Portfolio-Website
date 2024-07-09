// import React from 'react';
// import { BackgroundBeams } from './ui/background-beams';

// const AboutMe = () => {
//   return (
//     <div className='container mx-auto py-15'>
//     <BackgroundBeams className="z-0" />
//       <div className='mt-10 flex flex-col md:flex-row mx-10'>
//         <div className='image w-full md:w-1/2'>
//           <img src="src/assets/aboutme.svg" alt="about me image" className="w-full" />   
//         </div>

//         <div className='w-full md:w-1/2 md:pl-10'>
//             <div className='text-center'>
//                 <h2 className="text-4xl font-semibold mb-8">About Me</h2>
//             </div>
//           <p className='text-justify'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

// og
import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

const AboutMe = () => {
  return (
    <div className='relative container mx-auto py-15'>
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className='relative z-10 mt-10 flex flex-col md:flex-row mx-10 items-center'>
        <div className='image w-full md:w-1/3'>
          <img src="src/assets/aboutme.svg" alt="about me image" className="w-full transition-transform duration-300 hover:scale-110" />   
        </div>

        <div className='w-full md:w-2/3 md:pl-10'>
            <div className='text-center'>
                <h2 className="text-4xl font-semibold mb-8">About Me</h2>
            </div>
          <p className=' text-xl text-justify m-10 my-5 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <p className='text-xl text-justify my-5 m-10 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;







