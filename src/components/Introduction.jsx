import React from "react";
import { motion } from "framer-motion";
import proflie from "../assets/profile.jpg";
import Insta from "../assets/insta.png"
import Linkedin from "../assets/linkedin.png"
import Github from "../assets/github.png"
import Medium from "../assets/medium.png"
import facebook from "../assets/fb.png"
const Introduction = () => {
  return (
    <motion.div
      className="absolute w-full h-full bg-white flex items-center justify-center text-black p-8"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex items-center max-w-3xl">
        {/* Image */}
        <img
          src={proflie}
          alt="Profile"
          className="w-80 h-88 rounded-lg object-cover mr-12"
        />
        
        {/* Text */}
        <div>
          <h2 className="text-5xl font-bold mb-4">What about me?</h2>
          <p className="text-md" style={{textAlign:"justify"}}>I am a computer science student with a strong passion for both game development and front-end development. My journey has allowed me to explore the technical and creative sides of building interactive digital experiences, whether through crafting immersive games or designing user-friendly web interfaces. Currently, I’m working on my Final Year Project, <b>ARch360</b>, which leverages AR technology to improve communication between clients, architects, and construction specialists. I approach every project with a mindset of continuous learning and improvement, always aiming to push boundaries and achieve impactful results. Outside of work, I enjoy admiring nature and study astronomy.</p>
         {/* Social Media Logos */}
         <div className="flex mt-4 space-x-4">
            <a href="https://www.instagram.com/abdullahh.tahir/?next=%2Faccounts%2Fpassword%2Freset%2Fconfirm%2F" target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/ababdullah216/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/ababdullah216" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://github.com/ABAbdulah" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="Github" className="w-8 h-8" />
            </a>
            <a href="https://medium.com/@ababdullah216" target="_blank" rel="noopener noreferrer">
                    <img src={Medium} alt="Medium.com" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
