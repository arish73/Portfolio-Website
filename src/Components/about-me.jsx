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
          <p className=' text-lg font-medium text-justify m-10 my-5 '>
          I'm a full stack developer, lately focusing on the MERN stack, particularly React and Express, though I frequently switch databases based on project requirements.
          My journey as a web developer began in 2022 when I was hired at Tata 1mg as a backend developer using ruby on rails. This experience plunged me headfirst into the world of coding and web development. Soon after, I decided to pursue my master's degree (in Applied Computing) abroad in Canada, further solidifying my passion and expertise for programming and Computer Science.
          </p>

          <p className='text-lg font-medium text-justify my-5 m-10 '>
          Currently, I'm building cutting-edge web applications using modern technologies while also dabbling with and learning other technologies such as Next.js, TypeScript, NestJS, Supabase, and much more. I'm actively looking for a role where I can leverage these skills to create impactful and innovative solutions.
          When I'm not in full-on developer mode and not at my desk programming, I'm working out, improving my guitar skills, getting better at art, reading books & manga, or indulging in the occasional yet lengthy gaming session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;







