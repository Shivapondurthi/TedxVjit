import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import clsx from "clsx";

const speakers = [
  {
    id: 1,
    name: "Vanitha Datla",
    posistion:"Vice Chairperson,ELico Ltd.",
    description: "Vanitha Datla is a highly accomplished professional with nearly three decades of experience in diverse sectors, including financial services, insurance, cement, power, security printing, instrumentation, BPO services, and healthcare in the USA and India. She serves as the Vice Chairperson of Elico and the Managing Director of Elico Healthcare Services Ltd, a Hyderabad-based company. She is a Chartered Financial Analyst and is pursuing a doctoral program at ISB on the Role of Women in Family Businesses. A strong advocate for diversity and women's empowerment, Vanitha has worked to improve women's corporate representation through policy development and mentoring. She also serves as treasurer of Women in Network, mentoring children from urban slums to enhance their education and quality of life.",
    image: "/Resources/media/vanitha_datla.jpg",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    linkedin: "https://www.linkedin.com/in/emily-johnson",
    twitter: "https://twitter.com/emily_johnson",
    animation: {
      text: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -100 } },
      image: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 } },
    },
  },
  {
    id: 2,
    name: "Kiran Kanojia",
    posistion:"Athelet",
    description: "A test engineer by profession and the sole game changer of her life, Kiran Kanojia is the first female blade runner of India, transformed her life after losing a leg in a train accident. From a community where girls' education was discouraged, she broke barriers and refused to let her amputation define her future. Finding strength in the running, Kiran overcame pain and embraced life with resilience and determination. Her story inspires others to focus on their potential rather than limitations, proving that nothing is impossible with self-belief. Join us to hear her inspiring journey of courage and perseverance.",
    image: "/Resources/media/kiran_kanojia.jpg",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    linkedin: "https://www.linkedin.com/in/michael-chen",
    twitter: "https://twitter.com/michael_chen",
    animation: {
      text: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
      image: { hidden: { opacity: 0, rotate: -45 }, visible: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 45 } },
    },
  },
  {
    id: 3,
    name: "Debabrata Sarkar",
    posistion:"Vice President-APAC,Algaeenergy",
    description: "Mr. Debabrata Sarkar, a TEDx speaker and accomplished C-level executive, boasts over 26 years of experience in the International Agriculture sector. An IIM Kolkata alumnus, he has held leadership roles at Monsanto, Chemtura, and Syngenta. Currently, he serves as CMD of MicroAlgae Solutions India Pvt Ltd, Director of AGMA Energy, and Vice President - APAC for AE Biologicals. Featured in top publications like Forbes and Fortune, Mr. Sarkar won back-to-back Best Bio Ag CEO Awards in 2022 and 2023, presented by Central Agriculture Minister Mr. Narendra Singh Tomar, recognizing his contributions to sustainable agriculture.",
    image: "/Resources/media/debabrata_sarkar.png",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    linkedin: "https://www.linkedin.com/in/sophia-rodriguez",
    twitter: "https://twitter.com/sophia_rodriguez",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 4,
    name: "Naveen Samala",
    posistion:"Founder,The Guiding Voice",
    description: "Naveen Samala is a remarkable individual whose journey is a powerful testament to perseverance and the relentless pursuit of dreams. Rising from a modest background, he has become a first-generation post-graduate, showcasing his ambition and dedication. Now a Global Portfolio Manager for Business Transformation, Naveen is also an Udemy instructor, author, career coach, CXO resume writer, guest faculty at BITS Pilani, and podcast visionary. His podcast, The Guiding Voice, ranked in the Global Top 2.5%, is the world’s only Quadrilingual podcast, inspiring millions. With expertise in leadership, productivity, and public speaking, his podcast recently won the Asia Podcast Award for Education, further amplifying his impact globally.",
    image: "/Resources/media/naveen_samala.jpg",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    linkedin: "https://www.linkedin.com/in/sophia-rodriguez",
    twitter: "https://twitter.com/sophia_rodriguez",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 5,
    name: "Nikhil Desai",
    posistion:"Director of The Center For Excellence",
    description: "Nikhil Desai is dedicated to empowering individuals and organizations to unlock their true potential. Known for his energetic speaking style, he inspires and motivates participants to create lasting change in their lives and work environments. With over 33 years of experience, Nikhil has positively impacted more than a quarter-million participants across 42 countries, including India, the USA, Canada, Sweden, the UAE, and Singapore. His programs are designed to foster personal growth and organizational development. Nikhil has been featured in the media across multiple countries and has appeared on television and radio in India, the USA, the Philippines, South Africa, and Oman, making a global impact with his work",
    image: "/Resources/media/nikhil_desai.jpg",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    linkedin: "https://www.linkedin.com/in/sophia-rodriguez",
    twitter: "https://twitter.com/sophia_rodriguez",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  {
    id: 6,
    name: "Krithivasam S",
    posistion:"Vice President HR at YourTribe",
    description: "Krithivasan's impressive background highlights his extensive 17+ years of HR experience and leadership in team building and growth initiatives. His roles at Virtusa and Pickyourtrail demonstrate his global reach and strategic acumen in campus strategy and partnerships. As Vice President of HR at YourTribe, he effectively combines his expertise in talent acquisition and HR services with a passion for advising startups. His educational background with an Executive MBA from XLRI Jamshedpur further complements his professional experience. Additionally, his love for travel and commitment to advising academic institutions reflect a well-rounded individual dedicated to fostering innovation and a people-centric HR approach. ",
    image: "/Resources/media/krithivasan_s.jpg",
    pattern: "bg-[linear-gradient(45deg,#d40000_25%,transparent_25%,transparent_50%,#dc2626_50%,#d40000_75%,transparent_75%,transparent)]",
    linkedin: "https://www.linkedin.com/in/sophia-rodriguez",
    twitter: "https://twitter.com/sophia_rodriguez",
    animation: {
      text: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 } },
      image: { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 } },
    },
  },
  
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
               <h2 className=" text-left text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text">
                 {speaker.name}
               </h2>
               <p className=" text-left text-lg md:text-2xl lg:text-3xl text-white mb-4">
                 {speaker.posistion}
               </p>
               <p className="text-left text-sm md:text-lg lg:text-xl text-white mb-6">
                 {speaker.description}
               </p>
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
<div className="relative w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 aspect-square overflow-hidden rounded-full border-4 border-red-600 transition-transform duration-500 hover:scale-105">
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

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";
// import clsx from "clsx";
// import "../style.css";

// const speakers = [
//   {
//     id: 1,
//     name: "Vanitha Datla",
//     posistion: "Vice Chairperson, Elico Ltd.",
//     shortDescription:
//       "Vanitha Datla is the Vice Chairperson of Elico with nearly 30 years of experience across sectors.",
//     longDescription:
//       "Vanitha Datla, Vice Chairperson of Elico and MD of Elico Healthcare, has nearly 30 years of experience across sectors like financial services and healthcare. A Chartered Financial Analyst, she advocates for women's empowerment, mentors urban slum children, and pursues a doctoral program at ISB on women in family businesses.",
//     image: "/Resources/media/vanitha_datla.jpg",
//     pattern: "bg-gradient-to-br from-red-900 to-black",
//     linkedin: "https://www.linkedin.com/in/emily-johnson",
//     twitter: "https://twitter.com/emily_johnson",
//     animation: {
//       text: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -100 } },
//       image: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 } },
//     },
//   },
//   {
//     id: 2,
//     name: "Kiran Kanojia",
//     posistion: "Athlete",
//     shortDescription:
//       "Kiran Kanojia is the first female blade runner of India, transforming her life after losing a leg.",
//     longDescription:
//       "A test engineer by profession and the sole game changer of her life, Kiran Kanojia is the first female blade runner of India. After losing a leg in a train accident, she transformed her life through resilience and determination, inspiring others to focus on potential rather than limitations.",
//     image: "/Resources/media/kiran_kanojia.jpg",
//     pattern:
//       "bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_50%,#000000_50%,#000000_75%,transparent_75%,transparent)]",
//     linkedin: "https://www.linkedin.com/in/michael-chen",
//     twitter: "https://twitter.com/michael_chen",
//     animation: {
//       text: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
//       image: { hidden: { opacity: 0, rotate: -45 }, visible: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 45 } },
//     },
//   },
//   {
//     id: 3,
//     name: "Kiran Kanojia",
//     posistion: "Athlete",
//     shortDescription:
//       "Kiran Kanojia is the first female blade runner of India, transforming her life after losing a leg.",
//     longDescription:
//       "A test engineer by profession and the sole game changer of her life, Kiran Kanojia is the first female blade runner of India. After losing a leg in a train accident, she transformed her life through resilience and determination, inspiring others to focus on potential rather than limitations.",
//     image: "/Resources/media/kiran_kanojia.jpg",
//     pattern:
//       "bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_50%,#000000_50%,#000000_75%,transparent_75%,transparent)]",
//     linkedin: "https://www.linkedin.com/in/michael-chen",
//     twitter: "https://twitter.com/michael_chen",
//     animation: {
//       text: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
//       image: { hidden: { opacity: 0, rotate: -45 }, visible: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 45 } },
//     },
//   },
//   {
//     id: 4,
//     name: "Kiran Kanojia",
//     posistion: "Athlete",
//     shortDescription:
//       "Kiran Kanojia is the first female blade runner of India, transforming her life after losing a leg.",
//     longDescription:
//       "A test engineer by profession and the sole game changer of her life, Kiran Kanojia is the first female blade runner of India. After losing a leg in a train accident, she transformed her life through resilience and determination, inspiring others to focus on potential rather than limitations.",
//     image: "/Resources/media/kiran_kanojia.jpg",
//     pattern:
//       "bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_50%,#000000_50%,#000000_75%,transparent_75%,transparent)]",
//     linkedin: "https://www.linkedin.com/in/michael-chen",
//     twitter: "https://twitter.com/michael_chen",
//     animation: {
//       text: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
//       image: { hidden: { opacity: 0, rotate: -45 }, visible: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 45 } },
//     },
//   },
//   {
//     id: 5,
//     name: "Kiran Kanojia",
//     posistion: "Athlete",
//     shortDescription:
//       "Kiran Kanojia is the first female blade runner of India, transforming her life after losing a leg.",
//     longDescription:
//       "A test engineer by profession and the sole game changer of her life, Kiran Kanojia is the first female blade runner of India. After losing a leg in a train accident, she transformed her life through resilience and determination, inspiring others to focus on potential rather than limitations.",
//     image: "/Resources/media/kiran_kanojia.jpg",
//     pattern:
//       "bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_50%,#000000_50%,#000000_75%,transparent_75%,transparent)]",
//     linkedin: "https://www.linkedin.com/in/michael-chen",
//     twitter: "https://twitter.com/michael_chen",
//     animation: {
//       text: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 100 } },
//       image: { hidden: { opacity: 0, rotate: -45 }, visible: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 45 } },
//     },
//   },
  
// ];

// const Speakers = () => {
//   const [activeSpeaker, setActiveSpeaker] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const newActiveSpeaker = Math.floor(scrollPosition / windowHeight);
//       if (newActiveSpeaker !== activeSpeaker && newActiveSpeaker < speakers.length) {
//         setActiveSpeaker(newActiveSpeaker);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeSpeaker]);

//   return (
//     <div className="relative">
//       {speakers.map((speaker, index) => (
//         <div
//           key={speaker.id}
//           className={clsx(
//             "h-screen w-full flex items-center justify-center sticky top-0 transition-transform duration-500",
//             speaker.pattern
//           )}
//         >
//           <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
//             <AnimatePresence>
//               {index === activeSpeaker && (
//                 <motion.div
//                   initial={speaker.animation.text.hidden}
//                   animate={speaker.animation.text.visible}
//                   exit={speaker.animation.text.exit}
//                   transition={{ duration: 0.5 }}
//                   className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
//                 >
//                   <h2 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text">
//                     {speaker.name}
//                   </h2>
//                   <p className="text-left text-lg md:text-2xl lg:text-3xl text-white mb-4">
//                     {speaker.posistion}
//                   </p>
//                   <p className="text-left text-sm md:text-lg lg:text-xl text-white mb-6">
//                     {/* Short description for small screens, long for larger ones */}
//                     <span className="block md:hidden">{speaker.shortDescription}</span>
//                     <span className="hidden md:block">{speaker.longDescription}</span>
//                   </p>
//                   <div className="flex justify-center md:justify-start space-x-4">
//                     <a
//                       href={speaker.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white hover:text-red-600 transition-colors duration-300"
//                     >
//                       <FaLinkedin size={24} />
//                     </a>
//                     <a
//                       href={speaker.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white hover:text-red-600 transition-colors duration-300"
//                     >
//                       <FaTwitter size={24} />
//                     </a>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//             <AnimatePresence>
//               {index === activeSpeaker && (
//                 <motion.div
//                   initial={speaker.animation.image.hidden}
//                   animate={speaker.animation.image.visible}
//                   exit={speaker.animation.image.exit}
//                   transition={{ duration: 0.5 }}
//                   className="w-full md:w-1/2 flex justify-center md:justify-end"
//                 >
//                   <div className="relative w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 aspect-square overflow-hidden rounded-full border-4 border-red-600 transition-transform duration-500 hover:scale-105">
//                     <img
//                       src={speaker.image}
//                       alt={speaker.name}
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-black opacity-40"></div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Speakers;
