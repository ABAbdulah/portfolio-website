import React from 'react'
import profileImg from '../assets/profile2.jpg'
import '../css/AboutMe.css'
import { motion } from "framer-motion";
import MyProjects from './MyProjects';
import Experience from './Experience';

function AboutMe() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6">

    <div className="flex flex-col md:flex-row items-center md:items-start bg-white min-h-screen p-6">
      {/* Left Side - Image */}
      <div className="relative flex justify-center items-center min-h-screen bg-white">
      {/* Profile Image */}
     

      {/* Green Box */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="green-shade absolute -bottom-6 left-12 w-48 h-48 bg-green-400 rounded-lg z-0 animate-pulse"
      ></motion.div>

      {/* Blue Box */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className=" blue-shade absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-lg z-0 animate-float"
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
          className="Profile-Img relative z-10 rounded-lg w-[30rem] h-100 object-cover shadow-lg animate-float"
        />
      </motion.div>
    </div>

      {/* Right Side - Information */}
      <div className="md:ml-12 text-left max-w-lg mt-12">
        <p className="text-green-600 font-semibold">About Me</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          I  turn ideas into reality<br /> with code.
        </h1>
        <p className="text-gray-600 mt-3 archivo-variable">
        A problem-solver at heart, I specialize in crafting efficient and scalable digital solutions. With experience in game development, AI research, and full-stack projects, I turn ideas into engaging and impactful experiences.        </p>
        <p className="text-gray-600 mt-3 archivo-variable">
          Currently a Software Engineering Intern at FAIR and an undergraduate at FAST-NUCES.
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
            <p>21 Years</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>ababdullah216@gmail.com</p>
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
          </div>
        </div>

        {/* Signature */}
        <p className="ballet-regular mt-6 text-green-600 text-xl font-semibold italic">Abdullah Tahir</p>
      </div>
    </div>
    </div>
    <Experience />
    <MyProjects />
    </>
)
}

export default AboutMe