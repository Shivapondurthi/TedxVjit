import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaStar } from "react-icons/fa";

const AboutUs = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = containerRef.current;
      if (element) {
        element.style.backgroundPositionY = `${scrollY * 0.5}px`; // Fixed template literal
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
    });
  }, [controls]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 overflow-hidden"
      aria-label="Animated background representing the power of persistence"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Flowing lines */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-full w-1 bg-gradient-to-t from-transparent via-red-500 to-transparent"
          style={{ left: `${index * 25}%` }} // Fixed template literal
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 1, 0]
          }}
          transition={{
            y: { duration: 10 + index * 2, repeat: Infinity, ease: "linear" },
            opacity: { duration: 5 + index, repeat: Infinity, ease: "linear" }
          }}
        />
      ))}

      {/* Energy waves */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-red-500/20 to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing trails */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-silver rounded-full"
          style={{
            top: `${Math.random() * 100}%`, // Fixed template literal
            left: `${Math.random() * 100}%` // Fixed template literal
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      ))}

      {/* Stars */}
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-silver"
          style={{
            top: `${Math.random() * 100}%`, // Fixed template literal
            left: `${Math.random() * 100}%` // Fixed template literal
          }}
          animate={controls}
        >
          <FaStar size={Math.random() * 3 + 1} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">About Us</h1>
        <p className="text-xl text-gray-300 mb-8">
          We embody the Power of Persistence through our unwavering commitment to excellence and innovation.
        </p>
        <motion.button
          className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default AboutUs;
