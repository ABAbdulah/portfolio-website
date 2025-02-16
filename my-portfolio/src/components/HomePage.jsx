import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  const [isExpanding, setIsExpanding] = useState(false);
  const [showNextPage, setShowNextPage] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (event) => {
    const scrollDirection = event.deltaY > 0 ? "down" : "up";

    if (!isExpanding && !showNextPage && scrollDirection === "down") {
      setIsExpanding(true);
      setTimeout(() => {
        setShowNextPage(true);
        setIsExpanding(false);
      }, 1000);
    } else if (showNextPage && scrollDirection === "up") {
      setIsExpanding(true);
      setTimeout(() => {
        setShowNextPage(false);
        setIsExpanding(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isExpanding, showNextPage]);

  return (
    <div className="relative w-screen h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Main Content */}
      {!showNextPage ? (
        <motion.div
          className="text-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-white animate-pulse">
            Abdullah Tahir
          </h1>
          <p className="text-gray-400 mt-4">Scroll down to enter</p>
        </motion.div>
      ) : (
        <motion.div
          className="absolute w-full h-full bg-gray-800 flex items-center justify-center text-white"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }} // Ensures it slides down when scrolling back up
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        </motion.div>
      )}

      {/* Expanding Circle Animation */}
      {isExpanding && (
        <motion.div
          className="fixed top-1/2 left-1/2 bg-blue-600 rounded-full"
          initial={{ width: 0, height: 0 }}
          animate={{ width: "300vw", height: "300vw" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      )}
    </div>
  );
};

export default HomePage;
