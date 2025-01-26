
import React from "react";

import MaterialCard from "../../component/MaterialCard/MaterialCard";
import './ConstructionMaterials.css'
import Navbar from'../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'

const materials = [
  {
    name: "Bricks",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/9/344218276/VE/GJ/PX/184645218/61x4-ia7-nl-ac-uf894-1000-ql80.jpg",
    description: "Durable and versatile, bricks are essential for masonry construction.",
  },
  {
    name: "Cement",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWJPMVMN3iGrjRjxE__zbFHlg7Qzjo5Eeaw&s",
    description: "Cement forms the backbone of most construction projects.",
  },
  {
    name: "Steel",
    image: "https://newzelindustries.com/wp-content/uploads/2022/09/4-types-of-steel-1000x675.jpg",
    description: "Steel provides structural support for large constructions.",
  },
  {
    name: "Sand",
    image: "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/types-of-sand-used-in-construction/_jcr_content/root/container/container_2072089177/teaser_copy_1908783579.coreimg.jpeg/1711520871604/types-of-sand-3.jpeg",
    description: "Sand is a fine aggregate used in concrete and masonry.",
  },
];

function ConstructionMaterials() {
    return (
        
          <>
            <Navbar/>
            <div>
            <header className="hero-section">
            <div className="hero-text">
              <h1>Building the Future with Quality Materials</h1>
              <p>Your one-stop solution for all construction needs.</p>
            </div>
            </header>
            <img src={"https://i.imgur.com/0zjqWHw.png"} className="mbi"/>
        <div className="home-container">
         
          <section className="materials-section">
            <h2 className="section-title">Our Construction Materials</h2>
            <div className="materials-grid">
              {materials.map((material, index) => (
                <MaterialCard
                  key={index}
                  name={material.name}
                  description={material.description}
                  image={material.image}
                />
              ))}
            </div>
          </section>
          <div className="construction-materials">
      <h2>High-Quality Construction Materials for Every Project</h2>
      <p>
        At <strong>Vastudoot construction</strong>, we provide top-tier construction materials to ensure the durability and strength of your build. Whether it's a residential, commercial, or industrial project, we offer:
      </p>
      <ul>
        <li><strong>Foundation Materials</strong>: Cement, aggregates, and steel reinforcement.</li>
        <li><strong>Structural Materials</strong>: Bricks, blocks, steel beams, and concrete.</li>
        <li><strong>Flooring & Finishes</strong>: Tiles, plaster, paint, and decorative materials.</li>
        <li><strong>Roofing Solutions</strong>: Roof tiles, metal sheets, and waterproofing.</li>
        <li><strong>Plumbing & Electrical</strong>: Pipes, fittings, switches, and wiring.</li>
      </ul>
      <p>
        We source all our materials from trusted suppliers, offering reliable, long-lasting solutions for your construction needs. Let us help you build with confidence.
      </p>
    </div>
        </div>
        </div>
        <Footer/>
        </>
      );
    };
   

    
export default ConstructionMaterials;

