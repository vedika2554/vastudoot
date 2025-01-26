// Import React and other necessary components
import React from 'react';
import './Construction.css'; // Import the corresponding CSS for styling
import Navbar from'../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'


// Hero Section Component
const Hero = () => (
  <section className="hero">
    <h1>Welcome to Vastudoot Construction</h1>
    <p>Transforming Spaces with Vastu Shastra Principles</p>
    <a href="tel:+919404692698" className="cta-button">Contact Us</a>
  </section>
);

// Introduction Section Component
const Introduction = () => (
  <section id="introduction" className="introduction">
    <h2>What is Vastu Shastra?</h2>
    <p className='land'>
    Vastu Shastra is an ancient Indian science of architecture that integrates nature, energy fields, and design to create harmonious living and working spaces. At Vastudoot Construction, we specialize in applying these principles to modern architecture, ensuring our designs foster positive energy, health, and prosperity. By blending traditional Vastu wisdom with contemporary design, we create spaces that enhance well-being and success, whether for residential, commercial, or industrial projects. Our goal is to build environments that bring peace, harmony, and abundance to those who inhabit them.
    </p>
  </section>
);

// Services Section Component
const Services = () => (
  <section id="services" className="services">
    <h2>How We Apply VastuShastra in Construction</h2>
    <ul>
      <li>Orientation of Buildings: Aligning structures with cardinal directions.</li>
      <li>Optimal Room Placement: Ensuring proper flow of energy in living spaces.</li>
      <li>Structural Design: Balancing elements like water, fire, and air in designs.</li>
      <li>Custom Vastu Solutions: Tailored designs for unique requirements.</li>
    </ul>
  </section>
);

// Benefits Section Component
const Benefits = () => (
  <section id="benefits" className="benefits">
    <h2>Benefits of Vastu-Compliant Construction</h2>
    <ul>
      <li>Enhanced Harmony and Peace</li>
      <li>Improved Health and Well-being</li>
      <li>Increased Prosperity and Success</li>
      <li>Better Energy Flow in Living and Working Spaces</li>
    </ul>
  </section>
);

// Projects Section Component
const Projects = () => (
  <section id="projects" className="projects">
    <h2>Our Vastu Projects</h2>
    <div className="project-gallery">
      <div className="project-card">
        <h3>Eco-friendly Vastu Home</h3>
        <p className='ptxc'>Designed for maximum harmony with nature.</p>
      </div>
      <div className="project-card">
        <h3>Commercial Vastu Complex</h3>
        <p className='ptxc'>Built to foster success and prosperity.</p>
      </div>
      <div className="project-card">
        <h3>Modern Apartment Layout</h3>
        <p className='ptxc'>Combining Vastu principles with contemporary design.</p>
      </div>
    </div>
  </section>
);



// App Component
const App = () => (
  <div className="app">
    <Navbar/>
    <Hero />
    <Introduction />
    <Services />
    <Benefits />
    <Projects />
   <Footer/>
  </div>
);

export default App;
