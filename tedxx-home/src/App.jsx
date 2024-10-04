import React, { useState } from "react";
import Home from './HomePage/Home.jsx'; // Adjust the path based on your file structure
import Navbar from './HomePage/Navbar'; // Assuming you have a Navbar component
import Footer from './HomePage/Footer'; // Assuming you have a Footer component
import Speakers from "./Speakers/speakers.jsx";
import Teams from "./TeamPage/team.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  // Function to handle section change
  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };
  return (
    <>
      
        <div className="toplayer">
        <Navbar onSectionChange={handleSectionChange} />
          {currentSection === "home" && <div><Home/></div>}
          {currentSection === "teams" && <Teams/>}
          {currentSection === "speakers" && <Speakers />}
          {currentSection === "about" && <div><AboutUs/></div>}
          {currentSection === "contact" && <div><ContactUs/></div>}
          {currentSection === "tickets" && <div>Get Tickets Section</div>}
          <Footer></Footer>
        </div>
      
     
    </>
  );
}

export default App;
