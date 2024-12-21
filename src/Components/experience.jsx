import React from "react";

const expList = [
  {
    name: "Semper8",
    duration: "Jan-April 2024",
    role: "Academic Internship, Backend Software Developer",
    color: "red",
    content: `Developed the backend for Stylin App, a mobile application in the clothing industry, using Flask and Python. 
        Designed and tested APIs to enable seamless integration with the frontend and ensured efficient data flow. 
        Built and managed a scalable MongoDB database using MongoDB Atlas, focusing on optimizing performance and reliability. 
        Collaborated closely with the frontend team to enhance API performance and successfully deliver the project within deadlines.`,
  },
  {
    name: "Tata 1MG",
    duration: "July-Nov 2022",
    role: "Software Development Engineer I",
    color: "cyan",
    content: `Identified, analyzed, and resolved bugs in the Odin system, which was built with Ruby on Rails and PostgreSQL. 
        Collaborated with other teams to ensure smooth communication and issue resolution. 
        Managed the build, testing, and deployment processes using tools like Bitbucket, Jenkins, and Kubernetes.`,
  },
  {
    name: "Tata 1MG",
    duration: "Jan-June 2022",
    role: "Internship, Software Developer",
    color: "lime",
    content: `Debugged and resolved issues in the Odin system, built with Ruby on Rails and PostgreSQL, 
        while maintaining effective communication with cross-functional teams. 
        Streamlined the build, testing, and deployment processes using Bitbucket, 
        Jenkins, and Kubernetes to ensure smooth and reliable system operations.`,
  },
  {
    name: "Yamaha Motor Technologies",
    duration: "May-Sept 2020",
    role: "Internship, Software Developer ",
    color: "purple",
    content: `Worked on LIDAR data analysis and automation using R and Python, enabling efficient processing of geospatial information. 
        Developed a Windows WPF application leveraging mapping APIs like ArcGIS and Leaflet for interactive data visualization. 
        Explored and built custom Alexa Skills integrated with the Python SDK and NLP for enhanced voice interaction. 
        Additionally, cleansed datasets and performed data processing and labeling for object detection projects utilizing YOLO.`,
  },
];

const Experience = () => {
  // Create a mapping object for the dot colors
  const dotColorClasses = {
    red: "bg-red-400",
    cyan: "bg-cyan-400",
    lime: "bg-lime-400",
    purple: "bg-purple-400",
  };

  return (
    <div className="relative bg-black text-white w-full mt-20 pt-8 mx-auto pb-20">
      <h2 className="text-4xl font-semibold text-center mb-8">Experience</h2>
      <div className="w-full md:w-3/4 mx-auto">
        {/* Desktop Timeline */}
        <div className="hidden md:block container relative mx-auto p-6">
          <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-2 border-gray-100"></div>
          {expList.map((exp, index) => (
            <div
              key={`desktop-${index}`}
              className="mb-8 flex w-full items-center justify-between"
            >
              {index % 2 === 0 ? (
                <div className="w-5/12 py-4 text-left">
                  <h4 className="mb-1 text-xl font-semibold">{exp.name}</h4>
                  <h5 className="mb-2 text-gray-200">{exp.role}</h5>
                  <p className="mb-2 text-sm text-gray-200">{exp.duration}</p>
                  <p className="leading-snug text-gray-200">{exp.content}</p>
                </div>
              ) : (
                <div className="w-5/12"></div>
              )}
              <div
                className={`absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white ${
                  dotColorClasses[exp.color]
                } z-10`}
              ></div>
              {index % 2 === 1 ? (
                <div className="w-5/12 py-4 text-left">
                  <h4 className="mb-1 text-xl font-semibold">{exp.name}</h4>
                  <h5 className="mb-2 text-gray-200">{exp.role}</h5>
                  <p className="mb-2 text-sm text-gray-200">{exp.duration}</p>
                  <p className="leading-snug text-gray-200">{exp.content}</p>
                </div>
              ) : (
                <div className="w-5/12"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="block md:hidden container relative mx-auto p-6">
          <div className="absolute h-full border-l-2 border-gray-100"></div>
          {expList.map((exp, index) => (
            <div
              key={`mobile-${index}`}
              className="flex items-center justify-between mb-20"
            >
              <div
                className={`absolute h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white ${
                  dotColorClasses[exp.color]
                }`}
              ></div>
              <div className="ml-8">
                <h4 className="mb-1 text-xl font-semibold">{exp.name}</h4>
                <h5 className="mb-2 text-gray-200">{exp.role}</h5>
                <p className="mb-2 text-sm text-gray-200">{exp.duration}</p>
                <p className="leading-snug text-gray-200">{exp.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
