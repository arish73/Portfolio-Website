import React from 'react';


const techLinks = [
    { 
        name: 'Semper8', 
        duration: 'Jan-April 2024', 
        role: 'Academic Internship, Backend Software Developer',
        content: `Developed the backend for Stylin App, a mobile application in the clothing industry, using Flask and Python. 
        Designed and tested APIs to enable seamless integration with the frontend and ensured efficient data flow. 
        Built and managed a scalable MongoDB database using MongoDB Atlas, focusing on optimizing performance and reliability. 
        Collaborated closely with the frontend team to enhance API performance and successfully deliver the project within deadlines.`
    },
    { 
        name: 'Tata 1MG', 
        duration: 'July-Nov 2022',
        role: 'Software Development Engineer I', 
        content: `Identified, analyzed, and resolved bugs in the Odin system, which was built with Ruby on Rails and PostgreSQL. 
        Collaborated with other teams to ensure smooth communication and issue resolution. 
        Managed the build, testing, and deployment processes using tools like Bitbucket, Jenkins, and Kubernetes.`
    },
    { 
        name: 'Tata 1MG', 
        duration: 'Jan-June 2022', 
        role: 'Internship, Software Developer',
        content: `Debugged and resolved issues in the Odin system, built with Ruby on Rails and PostgreSQL, 
        while maintaining effective communication with cross-functional teams. 
        Streamlined the build, testing, and deployment processes using Bitbucket, 
        Jenkins, and Kubernetes to ensure smooth and reliable system operations.` 
    },
    { 
        name: 'Yamaha Motor Technologies', 
        duration: 'May-Sept 2020', 
        role: 'Internship, Software Developer ',
        content: `Worked on LIDAR data analysis and automation using R and Python, enabling efficient processing of geospatial information. 
        Developed a Windows WPF application leveraging mapping APIs like ArcGIS and Leaflet for interactive data visualization. 
        Explored and built custom Alexa Skills integrated with the Python SDK and NLP for enhanced voice interaction. 
        Additionally, cleansed datasets and performed data processing and labeling for object detection projects utilizing YOLO.` 
    }
];

const Experience = () => {
  return (
    <div className="relative bg-black text-white w-full mt-20 pt-8 mx-auto pb-12">

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
