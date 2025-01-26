// src/components/SupervisionPage.js

import React from 'react';
import './Supervision.css';
import Navbar from './../../component/Navbar/Navbar';
import Footer from "../../component/Footer/Footer"

const Supervision = () => {
  return (
    <>
      <Navbar/>
      <div>
      <header className="page-header">
        <div className="containerppp">
          <h1>Vastudoot Construction</h1>
          <p>Your trusted partner in construction supervision</p>
        </div>
      </header>

      <section className="supervision-section">
        <div className="container">
          <h2>Construction Supervision</h2>
          <p>
            At Vastudoot Construction, we believe that effective supervision is key to ensuring the success of every project.
            Our expert supervisors work tirelessly to ensure every aspect of your construction project meets the highest standards.
          </p>

          {/* Add 1 or 2 images */}
          <div className="supervision-details">
            <div className="supervision-item">
              <img 
                src="https://i.imgur.com/Y1RH0Xs.jpeg" 
                alt="Project Planning & Coordination" 
                className="supervision-image"
              />
              <h3>Project Planning & Coordination</h3>
              <p>
                We provide strategic planning and expert coordination to ensure seamless project execution. Our team ensures timely and cost-effective solutions throughout the construction phase.
              </p>
            </div>

            <div className="supervision-item">
              <img 
                src="https://i.imgur.com/BK2h020.png" 
                alt="Quality Control" 
                className="supervision-image"
              />
              <h3>Quality Control</h3>
              <p>
                Our supervision team ensures that the highest quality standards are met at every stage of the project. From materials to final finishing, we maintain rigorous quality control protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
    <Footer/>
    </>
  );
};

export default Supervision;
