import React from 'react'
import profileImg from '../assets/profile2.jpg'
import '../css/AboutMe.css'
import { motion } from "framer-motion";
import MyProjects from './MyProjects';
import Experience from './Experience';
import { Link } from 'react-router-dom';
import CV from "../assets/Abdullah Tahir - MERN stack developer.pdf";

function AboutMe() {
  
 const handleDownload = () => {
  const link = document.createElement("a");
  link.href = CV; // Replace with the actual path to your CV file
  link.download = "Abdullah Tahir - MERN stack developer.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen\ p-6">
    <div className="Image-bg flex flex-col md:flex-row items-center md:items-start min-h-screen p-6">
      <div className=" Image-bg2 relative flex justify-center items-center min-h-screen">
      {/* Green Box */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="green-shade absolute bottom-0 left-[3rem] w-48 h-48 bg-blue-900 rounded-lg z-0 animate-pulse"
      ></motion.div>

      {/* Blue Box */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="blue-shade absolute bottom-6 left-0 w-64 h-64 bg-blue-100 rounded-lg z-0 animate-float"
        ></motion.div>
       <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }} // Triggers when in viewport
        transition={{ duration: 3.5, ease: "easeOut" }}
        viewport={{ once: true }} // Runs only once when visible
        className="relative"
      >
        <img
        src={profileImg}
        alt="Abdullah"
        className="Profile-Img relative z-10 rounded-lg w-[26rem] h-[30rem] object-cover shadow-lg animate-float"
      />
      </motion.div>
      </div>

      {/* Right Side - Information */}
      <div className="md:ml-12 text-left max-w-lg mt-12">
        <h1 className="archivo-black text-2xl text-blue-800 font-bold ">About Me</h1>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          I  turn ideas into reality<br /> with code.
        </h1>
        <p className="text-gray-600 mt-3 archivo-variable">
        A problem-solver at heart, I specialize in crafting efficient and scalable digital solutions. With experience in game development, AI research, and full-stack projects, I turn ideas into engaging and impactful experiences.        </p>
        <p className="text-gray-600 mt-3 archivo-variable">
          An undergraduate at FAST-NUCES.
        </p>

        {/* Info Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 archivo-variable text-gray-700">
          <div>
            <p className="font-semibold ">Name</p>
            <p>Abdullah Tahir </p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>+92 318 7070410</p>
          </div>
          <div>
            <p className="font-semibold">Age</p>
            <p>22 Years</p>
          </div>
          <div className="w-full">
            <p className="break-words">ababdullah216@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold archivo-variable">Occupation</p>
            <p>Software Engineer</p>
          </div>
          <div>
            <p className="font-semibold archivo-variable">Nationality</p>
            <p>Pakistani</p>
          </div>
          <div>
            <p className="font-semibold">Education</p>
            <p>Bachelors in Computer Science</p>
          </div>
          <div>
            <p className="font-semibold">Freelance</p>
            <p>Available</p>
          </div><div>
            <p className="font-semibold">My Resume</p> <button
            onClick={handleDownload}
            className="px-6 py-3mt-6 mt-3 bg-blue-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 relative z-10 archivo-variable transition-all duration-300 w-60"
          >            
            Download My Resume
          </button>
          </div>
        </div>

        {/* Signature */}
        {/* <p className="ballet-regular mt-6 text-green-600 text-xl font-semibold italic">Abdullah Tahir</p> */}
      </div>
    </div>
    </div>
    <Experience />
    <MyProjects />
    </>
)
}

export default AboutMe