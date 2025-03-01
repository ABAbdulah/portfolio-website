import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/HomePage.css";
import AboutMe from "./AboutMe";

const Navbar = () => (
  <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 text-gray-300 flex space-x-6 z-50 backdrop-blur-lg bg-black p-3 rounded-lg">
    
    <a href="#" className="hover:text-green-400">Home</a>
    <a href="#" className="hover:text-green-400">About</a>
    <button className="hover:text-green-400">
      <Link to="/Myproject">Projects</Link>
    </button>
    <a href="/Myproject" className="hover:text-green-400">Projects</a>
    <a href="#" className="hover:text-green-400">Service</a>
    <a href="#" className="hover:text-green-400">Contact</a>
    <a href="#" className="hover:text-green-400">Blog</a>
  </nav>
);

const SocialIcons = () => (
  <div className="fixed right-10 bottom-10 flex flex-col space-y-4 text-gray-700 z-50 animate-float">
  <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="cursor-pointer hover:text-green-400 text-2xl" />
  </a>
  <a href="https://github.com/ABAbdulah" target="_blank" rel="noopener noreferrer">
    <FaGithub className="cursor-pointer hover:text-green-400 text-2xl" />
  </a>
  <a href="https://www.linkedin.com/in/ababdullah216/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="cursor-pointer hover:text-green-400 text-2xl" />
  </a>
  {/* <a href="https://www.youtube.com/c/your-channel" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="cursor-pointer hover:text-green-400 text-2xl" />
  </a> */}
</div>

);

const HomePage = () => {
  return (
    <div className="relative h-screen overflow-y-auto">
      {/* <Navbar /> */}
      <SocialIcons />
      
      {/* Main Content */}
      <div className="flex h-screen">
        {/* Left Section */}
        <div className="w-1/2 bg-gradient-to-r from-white to-gray-100 flex flex-col justify-center p-12">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[300px] h-[200px] bg-gradient-to-r from-blue-500 to-yellow-300 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[700px] bg-gradient-to-r from-blue-500 to-yellow-300 opacity-30 blur-3xl rounded-full"></div>

          <h1 className="archivo-black text-7xl font-bold text-gray-800 relative z-10 animate-float">Abdullah</h1>
          <h1 className="archivo-black text-7xl font-bold text-gray-800 relative z-10 animate-float">Tahir</h1>
          <p className="text-gray-600 mt-4 text-lg relative z-10">Software Engineer</p>
          <a href="https://www.linkedin.com/in/ababdullah216/">
          <button className="say-hello-btn mt-6 bg-green-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-600 relative z-10 animate-pulse">
            Say Hello
          </button>
          </a>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-black flex justify-center items-center">
          <img
          src="src/assets/myprofile12.jpg"
          alt="Abdullah Tahir"
          className="h-auto max-w-full object-cover sm:h-full sm:w-full"
        />

        </div>
      </div>
      <AboutMe />
     {/* <MyProjects />  */}
    </div>
  );
};

export default HomePage;