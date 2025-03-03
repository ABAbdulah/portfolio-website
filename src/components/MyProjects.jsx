import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import poster from "../assets/poster.jpg";
import solution from "../assets/solution.png";
import arch360 from "../assets/arch360.mp4";
import gameDev1 from "../assets/game1.png";
import gameDev2 from "../assets/game2.png";
import gameDev3 from "../assets/game3.png";



const projects = [
  {
    title: "ARch360",
    shortTitle: "Final Year Project at FAST NUCES, ISB",
    description:
      "ARch360 bridges the gap between clients, architects, and construction specialists by making architectural ideas easier to understand and explore. It turns 3D models, like AutoCAD files, into interactive AR experiences, allowing clients to walk through and adjust designs for their future homes, workplaces, or buildings before construction even begins.",
    github: "https://github.com/ABAbdulah/ARch360",
    media: [poster, solution, arch360],
    tools: "Unity, Vuforia, C#, Python, AutoCAD models, Firebase, ARCore, ARKit, Git, CI/CD",
  },
  {
    title: "Smart Timetable Scheduler",
    shortTitle:"Artificial Intelligence Course Project",
    description:
      "Smart Timetable Scheduler is an AI-powered system designed to solve the university timetable scheduling problem using genetic algorithms. It efficiently assigns time slots to courses, ensuring minimal conflicts between professors, sections, and classrooms. The system adheres to strict constraints, such as preventing schedule overlaps, optimizing classroom allocation, and maintaining balanced teaching loads. Additionally, it considers soft constraints like minimizing movement across floors and ensuring course continuity in the same room. The result is a well-structured, optimized timetable that enhances efficiency for students and faculty alike.",
    github: "https://github.com/ABAbdulah/Timetable-Scheduling.git",
    tools: "Python, Jupyter notebook",
    // No media for this project
  },
  {
    title:"Quest of the Forgotten Relic",
    shortTitle:"Game Development Course Project",
    description:
      ["Quest of the Forgotten Relic is a 3D adventure game developed in Unity. The player embarks on a journey to find a hidden relic in a mysterious, ancient temple. Along the way, they face various challenges, including puzzles, traps, and enemies. The game features interactive gameplay, engaging storylines, and stunning visuals that immerse players in a thrilling, immersive experience.", "The game contains 5 level 'Forest of Beginnings, Desert Ruins, Frozen Caverns, Volcanic Abyss, Sky Fortress.' Each level has its own unique environment, enemies, and challenges, providing a diverse and exciting gameplay experience. The project showcases my skills in game design, development, and project management, highlighting my ability to create captivating, interactive experiences that entertain and engage players."],
  
    github: "",
    media: [gameDev1, gameDev2, gameDev3],
    tools: "Unity, C#, Blender, Git, figma, Visual Studio",
  },
];

const MyProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-`screen bg-gradient-to-r from-white to-gray-100 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-10 archivo-black  text-green-600 ">My Projects</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start"
        >
          {/* Left Section - Text */}
          <div className="md:w-1/2 w-full p-6">
            <h1 className="text-4xl font-bold mb-0 text-green-950">{project.title}</h1>
            {project.shortTitle && <h3 className=" text-black text-2xl mb-5 archivo-black  text-justify">{project.shortTitle}</h3>}
            <p className="text-black  text-justify archivo-variable mb-4">
              <b>Project Description: </b> {project.description}
            </p>
            {project.tools && (
              <p className="text-gray-700 mb-4">
                <b>Tools & Technology:</b> {project.tools}
              </p>
            )}
            <button className="say-hello-btn mt-6 bg-green-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-600 relative z-10 archivo-variable">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              >
              View on GitHub
            </a>
          </button>
          </div>

          {/* Right Section - Carousel (Only Render if Media Exists) */}
          {project.media && project.media.length > 0 && (
            <div className="md:w-1/2 w-full p-6">
              <Slider {...settings}>
                {project.media.map((item, i) =>
                  item.endsWith(".mp4") ? (
                    <div key={i} className="flex justify-center">
                      <video
                        src={item}
                        controls
                        className="w-full max-h-64 rounded-lg"
                      />
                    </div>
                  ) : (
                    <div key={i} className="flex justify-center">
                      <img
                        src={item}
                        alt={`Project ${index + 1}`}
                        className="w-full max-h-64 object-cover rounded-lg"
                      />
                    </div>
                  )
                )}
              </Slider>
            </div>
          )}
        </div>
      ))}

    </div>
    
  );
};

export default MyProjects;
