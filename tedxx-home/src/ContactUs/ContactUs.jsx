import React, { useRef } from "react";
import "./ContactUs.css";
import "./ContactUsReactive.css";
import videoBackground from "/vjitmedia/contact_us.mp4"; // Ensure this path is correct

const ContactUs = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const collegeRef = useRef(null);

  const resetForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    contactRef.current.value = "";
    collegeRef.current.value = "";
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex items-center justify-center h-full">
        <div className="containers">
          <div className="screen">
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <img className="img-fluid pb-2" id="pic" src="./Ressources/vjitmedia/TEDxVJIT_Navbar_About.png" alt="" />
                  <span className="mt-3">CONTACT US</span>
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      ref={nameRef}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      ref={emailRef}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      ref={contactRef}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="COLLEGE NAME"
                      ref={collegeRef}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="btn-slide" onClick={resetForm}>
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
