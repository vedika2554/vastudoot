import React  from 'react';

import Navbar from './../../component/Navbar/Navbar'
import Footer from "../../component/Footer/Footer"

import './Rccdesign.css';

function Rccdesign() {
   
        return (
            <>
            
                <Navbar/>
                <div className="rp">
                 <main className="rcc-content">
                 <section id="about" className="rcc-section">
                 
                 <div class="rcc-wave"></div>
    <div class="rcc-wave"></div>
    <div class="rcc-wave"></div>

  
    <div class="reinforcement"></div>
             
      <h1 className="rcc-heading">RCC Design in Construction</h1>
    <p className="rcc-description">
        Reinforced Cement Concrete (RCC) is a revolutionary composite material that combines the best 
        properties of concrete and steel. Known for its exceptional strength, durability, and versatility, 
        RCC is a cornerstone of modern infrastructure development.
    </p>
</section>
<div class="image-container">
<img src='https://i.imgur.com/6rmdUOF.png' className='rcc-img'/>
<img src='https://i.imgur.com/96f781m.png' className='rcc-img'/>
</div>
                    <section id="advantages" class="adv-section">
    <h2>Advantages of RCC</h2>
    <p className='rcp'>
        RCC is renowned for its unmatched benefits in the construction industry, including:
    </p>
    <div class="rcc-card-container">
        <div class="rcc-card">
            <h3>Structural Integrity</h3>
            <p>High tensile and compressive strength make it ideal for enduring loads.</p>
        </div>
        <div class="rcc-card">
            <h3>Longevity</h3>
            <p>Resistance to weathering ensures structures last for decades.</p>
        </div>
        <div class="rcc-card">
            <h3>Fire Safety</h3>
            <p>Non-combustible material provides enhanced safety in buildings.</p>
        </div>
        <div class="rcc-card">
            <h3>Design Flexibility</h3>
            <p>Can be molded into shapes, enabling innovative architectural designs.</p>
        </div>
    </div>
</section>

<section id="applications" class="adv-section">
    <h2>Applications of RCC in Construction</h2>
    <p className='rcp'>
        RCC plays a pivotal role in shaping the infrastructure landscape. Its applications include:
    </p>
    <div class="rcc-card-container">
        <div class="rcc-card">
            <h3>Residential and Commercial Buildings</h3>
            <p>Foundations, walls, and roofs for robust housing and office spaces.</p>
        </div>
        <div class="rcc-card">
            <h3>Transportation Structures</h3>
            <p>Bridges, flyovers, and highways for seamless connectivity.</p>
        </div>
        <div class="rcc-card">
            <h3>Industrial Facilities</h3>
            <p>Durable structures for warehouses, factories, and production units.</p>
        </div>
        <div class="rcc-card">
            <h3>Water Management</h3>
            <p>Tanks, reservoirs, and dams designed to withstand hydrostatic pressures.</p>
        </div>
    </div>
</section>

                
                </main>
                
            </div>
            <section id="applications" class="adv-section">

            <h2>Some RCC design sheets</h2>

            <div className='psew'>

                 
        <img 
          src="https://i.imgur.com/pMMU5Me.png" 
          alt="Excel Estimate Example"
          className="excel-img"/>
          

          
        
         <img 
          src="https://i.imgur.com/l0HaaaJ.png" 
          alt="Excel Estimate Example"
          className="excel-img"/>
          </div>
        </section>
            <Footer/>
            </>
        );
    }

export default Rccdesign;
