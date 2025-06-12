import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Download, Import } from "lucide-react";
import CV from "../assets/Abdullah Tahir - MERN stack developer.pdf";

// Import your actual assets
// NOTE: When implementing this code, make sure these paths are correct
import thumbnail1 from "../assets/Arch360-thumbnail.png";
import thumbnail2 from "../assets/cric360-thmb.png";
import thumbnail3 from "../assets/AI-thmb.png"
import thumbnail4 from "../assets/game-thmb.png";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";

// import arch360Video from "../assets/arch360.mov";
import FYPstandee from "../assets/FYP-standee.png";
const projects = [
  {
    id: "arch360",
    title: "ARch360",
    shortTitle: "Final Year Project at FAST NUCES, ISB",
    description:
      "ARch360 bridges the gap between clients, architects, and construction specialists by making architectural ideas easier to understand and explore.",
      fullDescription: `ARch360 bridges the gap between clients, architects, and construction specialists by making architectural ideas easier to understand and explore. It turns 3D models, like AutoCAD files, into interactive AR experiences, allowing clients to walk through and adjust designs for their future homes, workplaces, or buildings before construction even begins.`,
      Video: "https://shorturl.at/4oA5B",
    media: [
      // { type: "image", src: thumbnail1, alt: "ARch360 Poster" },
      // { type: "image", src: FYPstandee, alt: "ARch360 standee" },
      // { type: "video", src: arch360Video, alt: "ARch360 Demo Video" }
    ],
    thumbnail: thumbnail1,
    tools: "Unity, Vuforia, C#, Python, AutoCAD models, Firebase, ARCore, ARKit, Git, CI/CD",
  },
  {
    id: "timetable",
    title: "Smart Timetable Scheduler",
    shortTitle: "Artificial Intelligence Course Project",
    description:
      "AI-powered system designed to solve the university timetable scheduling problem using genetic algorithms.",
    fullDescription: "Smart Timetable Scheduler is an AI-powered system designed to solve the university timetable scheduling problem using genetic algorithms. It efficiently assigns time slots to courses, ensuring minimal conflicts between professors, sections, and classrooms. The system adheres to strict constraints, such as preventing schedule overlaps, optimizing classroom allocation, and maintaining balanced teaching loads.",
    github: "https://github.com/ABAbdulah/Timetable-Scheduling.git",
    media: [
      { type: "image", src: thumbnail1, alt: "Timetable Screenshot" }
    ],
    thumbnail: thumbnail3,
    tools: "Python, Jupyter notebook",
  },
  {
    id: "quest",
    title: "Quest of the Forgotten Relic",
    shortTitle: "Game Development Course Project",
    description:
      "The Quest of the Lost Relic is a 2D action-adventure game built with Unity and C#, featuring 5+ levels, dynamic enemy AI, quests, and puzzle-solving. I developed core systems like movement, inventory, health, and optimized performance for smooth cross-device gameplay.",
    fullDescription: "The Quest of the Lost Relic is a 2D action-adventure game I designed and developed using Unity2D and C#. The game features over five interactive levels that blend exploration, combat, and puzzle-solving to create an engaging player experience. I implemented core gameplay systems including responsive player movement, an inventory management system, enemy AI with dynamic behaviors, and robust health mechanics. To drive narrative and progression, I developed a quest and reward system encompassing more than ten unique tasks, each designed to immerse the player deeper into the storyline. Careful attention was given to optimizing game performance—managing assets efficiently and streamlining scene loading—to ensure smooth, consistent gameplay across a range of devices. This project showcases my ability to build polished, engaging game experiences from the ground up.",
    github:"https://github.com/farheenmalik01/GameDevProject_Adventure",
    media: [
      { type: "image", src: game1, alt: "Game Screenshot 1" },
      { type: "image", src: game2, alt: "Game Screenshot 2" },
      { type: "image", src: game3, alt: "Game Screenshot 3" }
    ],
    thumbnail: thumbnail4,
    tools: "Unity, C#, Blender, Git, figma, Visual Studio",
  },
  {
    id: "Cric360",
    title: "Cric360",
    shortTitle: "MERN Project",
    description: "A MERN-based web app for managing cricket matches with team registrations, real-time scoring, and player ratings. inspired by stumps",
    fullDescription: "Cric360 is a full-featured cricket match management web application built using the MERN stack. The platform streamlines the entire cricket match process—allowing users to register teams, book matches, and track scores in real time. Engineered dynamic features such as real-time score updates and player rating displays to boost user engagement during live matches. Designed and implemented a scalable backend using Node.js, Express, and MongoDB, exposing RESTful APIs to support efficient matchmaking and data management. Optimized backend logic for performance and scalability, ensuring a smooth user experience even under increased load.",
    github: "https://github.com/haris-sohail/Cric360.git",
    thumbnail: thumbnail2,
    media: [
      // { type: "image", src: thumbnail1, alt: "Project 4 Screenshot" }
    ],
    tools: "React, TailwindCSS, JavaScript",
  },
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-1">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{project.shortTitle}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {project.tools && project.tools.split(",").slice(0, 2).join(", ")}
            {project.tools && project.tools.split(",").length > 2 ? "..." : ""}
          </span>
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <span className="mr-1 text-sm">View</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Media rendering component to handle different media types
const MediaItem = ({ item }) => {
  if (item.type === "video") {
    return (
      <div className="rounded-lg overflow-hidden shadow-md">
        <video 
          src={item.src} 
          controls 
          className="w-full h-64 object-cover"
          poster={thumbnail1} // Optional: Set a thumbnail for the video
        />
      </div>
    );
  } else {
    return (
      <div className="rounded-lg overflow-hidden shadow-md">
        <img 
          src={item.src} 
          alt={item.alt} 
          className="w-full h-64 object-cover"
        />
      </div>
    );
  }
};

// This component would be shown when a project is selected
const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;
  
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <button 
        onClick={onBack}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        <ArrowLeft className="mr-2" size={18} />
        Back to Projects
      </button>
      
      <h1 className="text-4xl font-bold text-blue-800 mb-2">{project.title}</h1>
      <h2 className="text-xl text-gray-700 mb-6">{project.shortTitle}</h2>
      
      {/* Featured image/thumbnail */}
      {project.thumbnail && (
        <div className="mb-8">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full max-h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
      
      <div className="prose max-w-none">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Project Description</h3>
        <p className="text-gray-800 mb-6">{project.fullDescription}</p>
        
        {/* Media Gallery Section */}
        {project.media && project.media.length > 0 && (
          <div className="my-8">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.media.map((item, index) => (
                <MediaItem key={index} item={item} />
              ))}
            </div>
          </div>
        )}
        
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Tools & Technologies</h3>
        <p className="text-gray-800 mb-6">{project.tools}</p>
        
        {(project.github || project.Video) && (
          <div className="mt-8">
            <a 
              href={project.github || project.Video}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg inline-flex items-center on hover:scale-105 transition-transform duration-300"
            >
              {project.github ? "View on GitHub" : "See the Video"}
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

const MyProjects = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV; // Replace with the actual path to your CV file
    link.download = "Abdullah Tahir - MERN stack developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);}

  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };
  
  const handleBackClick = () => {
    setSelectedProject(null);
  };
  
  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBackClick} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold archivo-black text-blue-800 mb-2">My Projects</h1>
          <p className="text-gray-800 max-w-4xl mx-auto">
            A collection of my work across various technologies and domains. Click on any project to learn more about it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button
            onClick={handleDownload}
            className="px-6 py-3mt-6 mt-3 bg-blue-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 relative z-10 archivo-variable transition-all duration-300 w-60"
          >            
            Download My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;