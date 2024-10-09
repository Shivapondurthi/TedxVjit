import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import '../style.css';
import '../Responsive_index.css';

const Home = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: false, // Change to true if you want animations to trigger again
    });

    // Reveal all elements with the class 'reveal'
    sr.reveal('.reveal', {
      origin: 'bottom',
      interval: 200, // Delay between each element
    });
  }, []);

  return (
    <div>
      <div className="video-container">
        <video autoPlay muted loop id="background-video" playsInline>
          <source src="/Resources/media/homeBG3d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="homepage reveal">
        <img
          src="/vjitmedia/TEDxVJIT-_3000-x-1000-px_-removebg-preview.png" // Replace with your image path
          alt="Participate Icon"
          style={{
            position: 'relative',
            top: '-30px', // Adjust as needed
            left: '50.5%',
            transform: 'translateX(-50%)',
            width: '800px', // Adjust size as needed
            height: '250px', // Adjust size as needed
            marginTop: '330px',
            marginLeft: '10px'
          }}
        />
        <div className="container" style={{ marginLeft:"60px", zIndex: '100' }}>
          <div className="row justify-content-evenly align-items-center">
            <div className="col-lg-6 box-1111 align-items-center">
              <div className="container mx-auto register">
                <div className="btn-group ms-7 me-5" role="group" style={{ marginLeft: '2px' }}>
                  <button type="button" className="btn">
                    26th October 2024
                  </button>

                  <button
                    type="button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="btn btn-participate"
                  >
                    Participate Now <i className={`bi ${showOptions ? 'bi-x-lg' : 'bi-arrow-down'}`} id="participateNow"></i>
                  </button>

                  {showOptions && (
                    <div
                      className="brdrgrp py-2 px-2"
                      id="brdrgrp"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a href="javascript:void( window.open( 'https://konfhub.com/tedxvjit', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )">
                        <button type="button" className="btn btn-attandee ms-2">As Attendee</button>
                      </a>
                      <a href="javascript:void( window.open( 'https://forms.gle/j9xivk5LCN6Qz7Wn6', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )">
                        <button type="button" className="btn btn-attandee ms-2">As Speaker</button>
                      </a>
                      <a href="javascript:void( window.open( 'https://forms.gle/gQ96sCnS3idoYLiL9', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )">
                        <button type="button" className="btn btn-participate2 ms-2">As Sponsor</button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



















      <section class="hero-section flex flex-col md:flex-row items-center justify-between w-full   p-4">
  <img class="w-full md:w-1/2 h-auto order-1 md:order-1 about-illustration" 
       src="Resources/Images/Power_of_Persistence.png" 
       alt="About Illustration" />

  <div class="hero-content w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0 order-2 md:order-1">
    <h1 class="heading-pop text-3xl md:text-5xl font-bold mb-4">
      POWER OF <em class="text-red-600">PERSISTENCE</em>
    </h1>
    <p class="paragraph-pop text-lg md:text-xl font-light mb-6">
      The theme "<em class="text-red-500">Power of Persistence</em>"
      represents the strength and dedication needed to overcome obstacles and achieve greatness.
    </p>
    <a href="#" class="learn-more-btn inline-block bg-black-500 text-white py-2 px-4 hover:bg-red-700 transition duration-300">
      LEARN MORE →
    </a>
  </div>
</section>



















































      <section className="about-section reveal w-full" id="discover">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-evenly">
      <div className="w-full md:w-2/3">
        <div className="about-section-content">
          <div className="about-heading flex flex-row md:flex-row items-center">
            <p className="text-4xl md:text-5xl mt-4 md:mt-0">What is</p> 
            <img className="ml-0 md:ml-4 mt-4 md:mt-0 w-48 h-10" src="vjitmedia/TEDxVJIT_Navbar_About.png" alt="TEDx VJIT" />
          </div>

          <div className="text-box text-center md:text-left ">
            <p className="py-2 text-lg md:text-4xl text-red-600 text-justify">
              We are thrilled to announce VJIT's very own TEDx VJIT community! TEDx is a program of local, self-organized events that bring people together to share ideas and inspire action through powerful talks. Promises to be a day filled with thought-provoking presentations, inspiring stories, and engaging discussions.
            </p>
            <p className="py-2 text-lg md:text-xl font-light text-justify">
              Whether you're a budding entrepreneur, a passionate artist, or simply someone with a unique perspective to share, we encourage you to be a part of TEDx VJIT. This is your chance to be part of a movement that's sparking innovation and change around the world. Stay tuned for more information about speaker announcements, registration details, and exciting activities planned for the event!
            </p>
            <h3 className="wevjit text-red-500 text-4xl mt-6 text-left">We The VJIT . . .</h3> 
            <p className="py-2 text-lg md:text-xl font-light text-justify">
              Vidya Jyothi Institute of Technology is an Autonomous Institution, Approved by AICTE and Affiliated to JNTUH. VJIT is offering B. Tech, M. Tech and MBA programs. The institution is accredited by NAAC A+ grade. All the eligible B. tech programs are accredited by NBA under Tier I. In NIRF 2023, VJIT is in the band of 151-300 under Innovation Ranking. In 2022 Vjit is ranked 200 under Engineering Category.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>























      <section className="speakers reveal">
        <div className="container">
          <div className="speakers-heading mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>MEDIA</h1>
          </div>
          <div className="containers">
            <div className="slider-container">
              {[
                "/Resources/media/1.jpg",
                "/Resources/media/2.jpg",
                "/Resources/media/3.jpg",
                "/Resources/media/4.jpg",
                "/Resources/media/5.jpg",
                "/Resources/media/6.jpg",
                "/Resources/media/7.jpg",
                "/Resources/media/8.jpg",
                "/Resources/media/9.jpg",
                "/Resources/media/10.jpg"
              ].map((imageSrc, index) => (
                <div className="single-team" key={index} style={{ backgroundColor: 'transparent', width: '350px' }}>
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    src={imageSrc}
                    alt={`media-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="map-registration reveal" id="maps">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <p className="fs-5 head-1">Participate Now</p>
              <div>
                <a href="javascript:void( window.open( 'https://konfhub.com/tedxvjit', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )" className="hover-btn-change-color">
                  <button type="button" className="btn btn-danger btn-custom">As Attendee</button>
                </a>
              </div>
              <div className="pt-2">
                <a href="javascript:void( window.open( 'https://forms.gle/gQ96sCnS3idoYLiL9', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )" className="hover-btn-change-color">
                  <button type="button" className="btn btn-danger btn-custom btn-custom2">As Sponsor</button>
                </a>
              </div>
              <div className="pt-2">
                <a href="javascript:void( window.open( 'https://forms.gle/j9xivk5LCN6Qz7Wn6', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) )" className="hover-btn-change-color">
                  <button type="button" className="btn btn-danger btn-custom btn-custom2">As Speaker</button>
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="container mx-auto map_box_container">
                <div className="map-bg-screen">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121832.2780266916!2d78.28233073667944!3d17.399368808179574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95a278ecef95%3A0x6cd763949617029a!2sVidya%20Jyothi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1715679876574!5m2!1sen!2sin"
                    width="300"
                    height="200"
                    style={{ border: '1' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="map-sm-screen">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121832.2780266916!2d78.28233073667944!3d17.399368808179574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95a278ecef95%3A0x6cd763949617029a!2sVidya%20Jyothi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1715679876574!5m2!1sen!2sin"
                    width="250"
                    height="160"
                    style={{ border: '1' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="container mx-auto">
                <p className="fs-5 venue-text text-center head-2">Venue</p>

                <div className="card square">
                  <div className="card-body">
                    <p className="card-text text-center" style={{ fontSize: 'large', fontWeight: '700' }}>
                      Vidya Jyothi Institute of Technology, Aziz Nagar, C.B. post, Chilkur Road, Hyderabad – 500075, Telangana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
