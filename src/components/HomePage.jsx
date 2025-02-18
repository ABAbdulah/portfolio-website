import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NewPage from "./NewPage"; // Import NewPage component
import Introduction from "./Introduction";

const HomePage = () => {
  const [isExpanding, setIsExpanding] = useState(false);
  const [showNextPage, setShowNextPage] = useState(false);
  const [canScroll, setCanScroll] = useState(true); // Prevent multiple triggers
  const [expandingFromTop, setExpandingFromTop] = useState(true); // Determines direction

  const handleScroll = (event) => {
    if (!canScroll) return;

    const scrollDirection = event.deltaY > 0 ? "down" : "up";

    if (!isExpanding && !showNextPage && scrollDirection === "down") {
      setCanScroll(false);
      setExpandingFromTop(true); // Expanding circle comes from top
      setIsExpanding(true);
      setTimeout(() => {
        setShowNextPage(true);
        setIsExpanding(false);
        setCanScroll(true);
      }, 1000);
    } else if (showNextPage && scrollDirection === "up") {
      setCanScroll(false);
      setExpandingFromTop(false); // Expanding circle comes from bottom
      setIsExpanding(true);
      setTimeout(() => {
        setShowNextPage(false);
        setIsExpanding(false);
        setCanScroll(true);
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
            Hi, I'm Abdullah Tahir
          </h1>
          <p className="text-gray-400 mt-4">Scroll down to enter</p>
        </motion.div>
      ) : (
       <Introduction/>
      )}

      {/* Expanding Circle Animation */}
      {isExpanding && (
        <motion.div
          className="fixed left-1/2 bg-blue-600 rounded-full"
          initial={{
            width: 0,
            height: 0,
            top: expandingFromTop ? "50%" : "100%", // From top or bottom
            transform: expandingFromTop
              ? "translate(-50%, -50%)"
              : "translate(-50%, 0)",
          }}
          animate={{
            width: "300vw",
            height: "300vw",
            top: expandingFromTop ? "50%" : "100%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
    </div>
  );
};

export default HomePage;
