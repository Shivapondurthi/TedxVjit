import React from 'react';
import FAQItem from './Faq.jsx';
import videoBackground from '/vjitmedia/about_us.mp4'; // Add your video file path

const AboutUs = () => {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]" // Ensures the video stays fixed and in the background
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className='relative z-10 mt-10'>
        <section className="home-page-content p-4 md:p-20 mt-20">
          <div className="container mx-auto p-4 md:p-10">

            {/* Theme Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4">
              <div className="md:order-1 md:w-1/2">
                <h1 className="text-red-600 font-bold text-2xl md:text-4xl ">
                  THEME 2024
                </h1>
                <p className="py-2 text-slate-400 mr-0 md:mr-5 text-base md:text-lg font-bold text-justify">
                  POWER OF PERSISTENCE - The Unyielding Force
                </p>
                <p className="py-2 text-white mr-0 md:mr-5 pr-0 md:pr-7 text-sm md:text-base font-bold text-justify">
                  The power of persistence lies in its ability to keep you moving forward despite challenges or setbacks.
                  Persistence embodies the unwavering commitment to one's goals, fueled by a spirit that refuses to be taken
                  aback by temporary setbacks. Driven by confidence, persistence helps one understand how to transform
                  challenges into opportunities, turning failures into stepping stones for success.
                </p>
              </div>
              <div className="md:order-2 md:w-1/2 border-2 border-red-500 inline-block mr-3 mt-5 mb-10">
                <img className="img-fluid w-full mx-auto" src="/Resources/media/Tedx1.jpg" alt="Theme" />
              </div>
            </div>

            {/* Motto Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4 mt-10">
              <div className="md:order-2 md:w-1/2">
                <h1 className="py-2 ml-3 text-red-600 font-bold text-2xl md:text-4xl ">
                  MOTTO
                </h1>
                <p className="py-2 text-white ml-0 md:ml-5 text-sm md:text-base font-bold text-justify">
                  In a world where fleeting trends overshadow enduring truths, we believe that the most impactful ideas are not
                  only worth spreading but also worth nurturing through challenges and time. These ideas celebrate the spirit of
                  unwavering dedication, encouraging individuals to persistently pursue their visions and inspire others along the
                  way. By championing enduring ideas, we create a legacy of innovation and progress, proving that persistence is
                  key to unlocking the full potential of shared ideas.
                </p>
              </div>
              <div className="md:order-1 md:w-1/2 border border-red-500 inline-block mr-3 mt-5 mb-10">
                <img className="img-fluid w-full mx-auto" src='./Resources/media/Tedx2.png' alt="Motto" />
              </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4">
              <div className="md:order-1 md:w-1/2">
                <h1 className="text-red-500 font-bold text-2xl md:text-4xl ">
                  VISION
                </h1>
                <p className="py-2 text-white mr-0 md:mr-5 pr-0 md:pr-7 text-sm md:text-base font-bold text-justify">
                  At TEDxVJIT, we envision a world where the relentless pursuit of ideas fuels innovation, ignites passion, and
                  transforms challenges into opportunities. With the <b className="text-red-500">power of persistence</b> as our guiding force, we inspire individuals to
                  embrace tenacity and resilience. By cultivating a community where every idea is nurtured to its fullest potential,
                  we aim to spark enduring change and create a brighter, more connected future for all.
                </p>
              </div>
              <div className="md:order-2 md:w-1/2 border border-red-600 rounded-lg inline-block mr-3 mt-5 mb-10">
                <img className="img-fluid w-full mx-auto " src="/Resources/media/e block.JPG" alt="Vision" />
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <div>
            <h1 className="text-white font-bold text-2xl md:text-4xl font-serif mb-8">
              FAQs
            </h1>

            <FAQItem
              question="1. Is the event in online or offline mode?"
              answer="The event will be held in offline mode."
            />


            <FAQItem
              question="2. Will there be a screening of the event at the location?"
              answer="Yes, there will be screenings of the event inside the institute premises."
            />

            <FAQItem
              question="3. Can the audience interact with the speaker?"
              answer="No, there will be no Q&A session or interaction with the speaker as per the TEDx rules."
            />

            <FAQItem
              question="4. Will there be charges for online mode?"
              answer="There will be no charges for the students."
            />

            <FAQItem
              question="5. How do I apply to be a speaker at the event?"
              answer="If you have ‘any ideas worth spreading’ and it matches our theme, please contact us at tedx@vjit.ac.in or any of our social media pages."
            />

            <FAQItem
              question="6. Will there be recreational events in between the talks (music, storytelling, dance performance etc.)? If so, how can I register to perform?"
              answer="No, there will be no activities between the talks. There will be a short break between each talk."
            />

            <FAQItem
              question="7. Can I get recording of the event afterwards?"
              answer="Yes, the recordings of all the talks are uploaded on the TEDx official Youtube channel."
            />

            <FAQItem
              question="8. I want to sponsor the event. What is the procedure?"
              answer="Please contact us at tedx@vjit.ac.in or any of our social media handles."
            />

            <FAQItem
              question="9. Will the talk be translated/transcripted later into regional languages?"
              answer="The Youtube video on the TEDx channel will be available with English and Hindi subtitles."
            />



          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;














// import React from 'react';
// import FAQItem from './Faq.jsx';
// import image1 from '/Resources/media/1.jpg';
// // import image2 from '/Resources/media/2.png';
// // import image3 from './Resources/media/e block.JPG';
// import background from '/vjitmedia/glowing_text_image.png';


// const AboutUs = () => {
//   return (
//     <div className='mt-10'style={{
//       backgroundImage: `url(${background})`,
//       backgroundSize: 'cover', // This will cover the entire section
//       backgroundPosition: 'center',
//       backgroundAttachment:'fixed'// Center the image
//     }}>
//     <section className="home-page-content  p-4 md:p-20 mt-20">
//       <div className="container mx-auto p-4 md:p-10">

//         {/* Theme Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4">
//           <div className="md:order-1 md:w-1/2">
//             <h1
//               className="text-red-600 font-bold text-2xl md:text-4xl font-serif"
//             >
//               THEME 2024
//             </h1>
//             <p className="py-2 text-slate-400 mr-0 md:mr-5 text-base md:text-lg font-bold text-justify">
//               POWER OF PERSISTENCE - The Unyielding Force
//             </p>
//             <p className="py-2 text-slate-400 mr-0 md:mr-5 pr-0 md:pr-7 text-sm md:text-base font-bold text-justify">
//               The power of persistence lies in its ability to keep you moving forward despite challenges or setbacks.
//               Persistence embodies the unwavering commitment to one's goals, fueled by a spirit that refuses to be taken
//               aback by temporary setbacks. Driven by confidence, persistence helps one understand how to transform
//               challenges into opportunities, turning failures into stepping stones for success.
//             </p>
//           </div>
//           <div className="md:order-2 md:w-1/2 border-2 border-red-500 inline-block mr-3 mt-5 mb-10">
//             <img className="img-fluid w-full mx-auto" src="/Resources/media/1.jpg" alt="Theme" />
//           </div>
//         </div>

//         {/* Motto Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4 mt-10">
//           <div className="md:order-2 md:w-1/2">
//             <h1 className=" py-2 ml-3 text-red-600 font-bold text-2xl md:text-4xl font-serif">
//               MOTTO
//             </h1>
//             <p className="py-2 text-slate-400 ml-0 md:ml-5 text-sm md:text-base font-bold text-justify">
//               In a world where fleeting trends overshadow enduring truths, we believe that the most impactful ideas are not
//               only worth spreading but also worth nurturing through challenges and time. These ideas celebrate the spirit of
//               unwavering dedication, encouraging individuals to persistently pursue their visions and inspire others along the
//               way. By championing enduring ideas, we create a legacy of innovation and progress, proving that persistence is
//               key to unlocking the full potential of shared ideas.
//             </p>
//           </div>
//           <div className="md:order-1 md:w-1/2 border border-red-500 inline-block mr-3 mt-5 mb-10">
//             <img className="img-fluid w-full mx-auto" src='./Resources/media/2.jpg' alt="Motto" />
//           </div>
//         </div>

//         {/* Vision Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4">
//           <div className="md:order-1 md:w-1/2">
//             <h1 className="text-red-500 font-bold text-2xl md:text-4xl font-serif">
//               VISION
//             </h1>
//             <p className="py-2 text-slate-400 mr-0 md:mr-5 pr-0 md:pr-7 text-sm md:text-base font-bold text-justify">
//               At TEDxVJIT, we envision a world where the relentless pursuit of ideas fuels innovation, ignites passion, and
//               transforms challenges into opportunities. With the <b className="text-red-500">power of persistence</b> as our guiding force, we inspire individuals to
//               embrace tenacity and resilience. By cultivating a community where every idea is nurtured to its fullest potential,
//               we aim to spark enduring change and create a brighter, more connected future for all.
//             </p>
//           </div>
//           <div className="md:order-2 md:w-1/2 border border-red-500 rounded-lg inline-block mr-3 mt-5 mb-10">
//             <img className="img-fluid w-full mx-auto " src="/Resources/media/e block.JPG" alt="Vision" />
//           </div>
//         </div>

//       </div>

//       {/* FAQ Section */}
//       <div>
//         <h1 className="text-white font-bold text-2xl md:text-4xl font-serif mb-8">
//           FAQs
//         </h1>

//         <FAQItem
//           question="1. Is the event in online or offline mode?"
//           answer="The event will be held in offline mode."
//         />

// <FAQItem
//   question="2. Will there be a screening of the event at the location?"
//   answer="Yes, there will be screenings of the event inside the institute premises."
// />

// <FAQItem
//   question="3. Can the audience interact with the speaker?"
//   answer="No, there will be no Q&A session or interaction with the speaker as per the TEDx rules."
// />

// <FAQItem
//   question="4. Will there be charges for online mode?"
//   answer="There will be no charges for the students."
// />

// <FAQItem
//   question="5. How do I apply to be a speaker at the event?"
//   answer="If you have ‘any ideas worth spreading’ and it matches our theme, please contact us at tedx@vjit.ac.in or any of our social media pages."
// />

// <FAQItem
//   question="6. Will there be recreational events in between the talks (music, storytelling, dance performance etc.)? If so, how can I register to perform?"
//   answer="No, there will be no activities between the talks. There will be a short break between each talk."
// />

// <FAQItem
//   question="7. Can I get recording of the event afterwards?"
//   answer="Yes, the recordings of all the talks are uploaded on the TEDx official Youtube channel."
// />

// <FAQItem
//   question="8. I want to sponsor the event. What is the procedure?"
//   answer="Please contact us at tedx@vjit.ac.in or any of our social media handles."
// />

// <FAQItem
//   question="9. Will the talk be translated/transcripted later into regional languages?"
//   answer="The Youtube video on the TEDx channel will be available with English and Hindi subtitles."
// />
//       </div>
//     </section>
//     </div>
//   );
// };

// export default AboutUs;

