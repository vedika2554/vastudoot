import React from 'react';
import './Elevation.css';

import Navbar from './../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'


const ThreeDElevation = () => {
  

  const elIma = [
    { id: 1, img: 'https://i.imgur.com/N8W81W1.jpeg', title: 'Modern Villa' },
    { id: 2, img: 'https://i.imgur.com/H1gKBqC.jpeg', title: 'Luxury Apartment' },
    { id: 3, img: 'https://i.imgur.com/qqgExYy.jpeg', title: 'Corporate Office' },
  ];

  

  return (
    <>
<Navbar/>
<div class="set-background">

<div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

</div>


    <div>
      {/* Hero Section */}

      <section className="zero">
        
        <h1 className='zt'>3D Elevation Designs</h1>
        <p className='zd'>Transforming Vision into Reality</p>
        </section>
        <div class="nbg">

<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>

<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>

<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>

<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>
<div class="drop"></div>







</div>


        <section className="do">
        <h2 className='xvb'>About 3D Elevation</h2>
        <p className='dotd'>3D elevation provides a realistic view of your dream project before construction begins, helps you visualize designs, make informed decisions, ensures efficient space utilization, enhances aesthetic appeal, and highlights the benefits of 3D elevation for a seamless construction process.</p>

        <div class='ecg'>
        <div class="ec">
    <h3>Enhanced Visualization</h3>
    <p>Transforms abstract ideas into realistic images, helping clients understand design concepts.</p>
  </div>
  <div class="ec">
    <h3>Improved Decision-Making</h3>
    <p>Allows for easy adjustments in design, materials, and colors based on client preferences.</p>
  </div>
  <div class="ec">
    <h3>Time and Cost Efficiency</h3>
    <p>Identifying design flaws early saves time and reduces the risk of costly revisions during construction.</p>
  </div>
  <div class="ec">
    <h3>Professional Presentation</h3>
    <p>High-quality 3D models impress clients and stakeholders, enhancing project proposals.</p>
  </div>
  <div class="ec">
    <h3>Customization</h3>
    <p>Tailors every detail to match the client's vision, including lighting, textures, and landscaping.</p>
  </div>
  </div>
      </section>
      {/* Project Gallery */}
      <h2 className='xvb'>Our Projects</h2>
      <section className="epgc">
        
      
          {elIma.map((villa) => (
            <div className="epc" key={villa.id}>
              <img src={villa.img} alt={villa.title} className='eleimg'/>
              <div className="eltt">
                <h3>{villa.title}</h3>
               
              </div>
            </div>
          ))}
       
      </section>

    
           </div>
           <Footer/>
      </>

  );
};

export default ThreeDElevation;
