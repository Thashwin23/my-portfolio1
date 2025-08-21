import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const MouseFollower = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-blue-400 rounded-full pointer-events-none z-50"
      style={{
        boxShadow: "0 0 15px #3b82f6, 0 0 30px #3b82f6",
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.1,
      }}
    />
  );
};

export default MouseFollower;
