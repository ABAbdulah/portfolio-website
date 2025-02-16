import React from "react";
import { motion } from "framer-motion";

const NewPage = () => {
  return (
    <motion.div
      className="absolute w-full h-full bg-gray-800 flex items-center justify-center text-white"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }} // Ensures it slides down when scrolling back up
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
    </motion.div>
  );
};

export default NewPage;
