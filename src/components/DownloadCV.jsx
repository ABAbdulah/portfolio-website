import React from "react";
import CV from "../assets/Abdullah Tahir - Software Engineer.pdf";
const DownloadCV = () => {
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
    <div className="mt-10"></div> 
    <h1 className="text-4xl mb-9 font-bold archivo-black  text-green-600 ">Download My Resume</h1>
    <div className="flex justify-center items-center">
      <button
        onClick={handleDownload}
        className="px-6 py-3mt-6 bg-green-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-600 relative z-10 archivo-variable transition-all duration-300"
      >            
        My Resume
      </button>
    </div>
    </>
  );
};

export default DownloadCV;
