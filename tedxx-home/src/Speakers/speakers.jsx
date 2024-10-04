import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import clsx from "clsx";

const speakers = [
  {
    id: 1,
    name: "Emily Johnson",
    description: "Tech Innovator & AI Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
    pattern: "bg-gradient-to-br from-red-900 to-black",
    linkedin: "https://www.linkedin.com/in/emily-johnson",
    twitter: "https://twitter.com/emily_johnson",
    animation: {
      text: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -100 } },
      image: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 } },
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    description: "Blockchain Expert & Cryptocurrency Analyst",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    pattern: "bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_50%,#000000_50%,#000000_75%,transparent_75%,transparent)]",
    linkedin: "https://www.linkedin.com/in/michael-chen",
    twitter: "https://twitter.com/michael_chen",
    animation: {
      text: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
      image: { hidden: { opacity: 0, rotate: -45 }, visible: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 45 } },
    },
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    description: "Cybersecurity Guru & Ethical Hacker",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    pattern: "bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_50%,#000000_50%,#000000_75%,transparent_75%,transparent)]",
    linkedin: "https://www.linkedin.com/in/sophia-rodriguez",
    twitter: "https://twitter.com/sophia_rodriguez",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  // More speakers...
];

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveSpeaker = Math.floor(scrollPosition / windowHeight);
      if (newActiveSpeaker !== activeSpeaker && newActiveSpeaker < speakers.length) {
        setActiveSpeaker(newActiveSpeaker);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSpeaker]);

  return (
    <div className="relative">
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className={clsx(
            "h-screen w-full flex items-center justify-center sticky top-0 transition-transform duration-500",
            speaker.pattern
          )}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
            <AnimatePresence>
              {index === activeSpeaker && (
                <motion.div
                  initial={speaker.animation.text.hidden}
                  animate={speaker.animation.text.visible}
                  exit={speaker.animation.text.exit}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text">
                    {speaker.name}
                  </h2>
                  <p className="text-xl md:text-2xl text-white mb-6">{speaker.description}</p>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-600 transition-colors duration-300"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={speaker.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-600 transition-colors duration-300"
                    >
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {index === activeSpeaker && (
                <motion.div
                  initial={speaker.animation.image.hidden}
                  animate={speaker.animation.image.visible}
                  exit={speaker.animation.image.exit}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-red-600 transition-transform duration-500 hover:scale-105">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-black opacity-40"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speakers;
