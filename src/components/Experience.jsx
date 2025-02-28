import React from 'react'
import { motion } from "framer-motion";

function Experience() {
  return (
    <div>

          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
     
          <h1 className="text-4xl font-bold mt-14 archivo-black  text-green-600 ">My Education and Experience</h1>

      {/* Experience Section */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl"
      >
        <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
        <div className="mt-4">
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h4 className="text-xl font-semibold text-gray-700">Software Engineer Intern</h4>
            <p className="text-gray-600">FAIR (Football and AI Research) | Remote | 2025</p>
            <p className="text-gray-500 mt-1">Location: London, Uk</p>
            <ol className="list-disc pl-8 text-gray-700">
                <li className="mt-1">Worked on responsive and user-friendly frontend designs using React.js (MERN stack).</li>
                <li className="mt-1">Worked on database migration using Python and MongoDB, ensuring seamless data transfer.</li>
                <li className="mt-1">Assisted in REST API development, improving backend functionality and integration.</li>
            </ol>
          </div>
          
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl"
      >
        <h3 className="text-2xl font-bold text-gray-800">Education</h3>
        <div className="mt-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-700">Bachelor's in Computer Science</h4>
            <p className="text-gray-600">National University of Computer and Emerging Sciences - FAST </p>
            <p className="text-gray-500 mt-1">Location: Islamabad, Pakistan</p>
            <p className="text-gray-500 mt-1">Graduation Year: 2025</p>
            
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  )
}

export default Experience