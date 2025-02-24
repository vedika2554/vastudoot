// Importing necessary React components
import React from 'react';
import './Autocad.css'; // Assuming you have a CSS file for styling
import Navbar from './../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'

const Autocad = () => {
    
  return (
    <>
     <Navbar/>
     <div >

      {/* Hero Section */}
      <section className="herosp">
        <h1>Empowering Construction with AutoCAD</h1>
        <p>
          At Vastudoot Construction, we utilize cutting-edge AutoCAD software to design, plan, and execute construction projects with precision and efficiency.
        </p>
        <img src="https://i.imgur.com/ZZFxKCG.jpeg" alt="" className="herosp-image" />
        <img src="https://i.imgur.com/REEyp3H.png" alt="" className="herosp-image" />
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About AutoCAD</h2>
        <p>
        AutoCAD in construction is used to create precise 2D and 3D designs for buildings and infrastructure. It helps in drafting floor plans, elevations, sections, and site plans. Architects, engineers, and contractors use AutoCAD for detailed design work, structural layouts, and MEP (Mechanical, Electrical, Plumbing) systems. It also aids in creating construction documentation, including blueprints and as-built drawings. AutoCAD supports collaboration, clash detection, and cost estimation, making it essential for efficient construction project management and reducing errors during the building process.
        </p>
       
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why We Use AutoCAD</h2>
        <div className="feature-item">
          <h3>Precision and Accuracy</h3>
          <p>
            AutoCAD allows us to create detailed blueprints and designs that minimize errors, ensuring project success from the ground up.
          </p>
          
        </div>
        <div className="feature-item">
          <h3>Improved Collaboration</h3>
          <p>
            With AutoCAD, our team can collaborate effectively, sharing designs and updates seamlessly across all project stakeholders.
          </p>
        
        </div>
        <div className="feature-item">
          <h3>Enhanced Efficiency</h3>
          <p>
            The software streamlines our workflow, reducing the time spent on revisions and enabling faster project completion.
          </p>
        
        </div>
      </section>

      <section id="projects" className="projectslp">
  <h2>Our AutoCAD-Driven Projects</h2>
  <div className="projectlp-container">
    <div className="projectlp-item">
      <h3>Residential Complex</h3>
      <p>
        Designed and executed using AutoCAD, ensuring flawless layouts and optimized use of space.
      </p>
     
      
    </div>
    <div className="projectlp-item">
      <h3>Commercial Buildings</h3>
      <p>
        From drafting to execution, AutoCAD helps us deliver high-quality commercial spaces that meet client needs.
      </p>
     
    
    </div>
    <div className="projectlp-item">
      <h3>Infrastructure Projects</h3>
      <p>
        Our expertise in AutoCAD ensures precise planning and execution for large-scale infrastructure projects.
      </p>
     
     
    </div>
  </div>
</section>
 </div>
<Footer/>
 </>

  );
};

export default Autocad;
