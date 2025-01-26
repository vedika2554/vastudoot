import React from 'react';
import './Estimate.css';
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
const ImportanceOfEstimates = () => {
  const points = [
    {
      title: "Financial Planning and Budget Control",
      image:"https://i.imgur.com/z0K6eg0.jpeg",
      description: "Helps determine the total cost of the project, including materials, labor, and overhead. Enables the client and contractor to set a clear budget, preventing cost overruns."
    },
    {
      title: "Project Feasibility",
      image:"https://i.imgur.com/u11gp5B.jpeg",
      description: "Provides insight into whether a project is financially and logistically viable. Ensures resources are allocated efficiently for maximum output."
    },
    {
      title: "Transparent Communication with Clients",
      image:"https://i.imgur.com/DYy7mSn.jpeg",
      description: "Builds trust by offering clients a clear breakdown of costs. Allows clients to make informed decisions about materials, design changes, or potential upgrades."
    },
    {
      title: "Time Management",
      image:"https://i.imgur.com/7VWXCgB.jpeg",
      description: "Includes timelines for acquiring materials and completing different phases of the project. Prevents delays by accounting for lead times and resource availability."
    },
    {
      title: "Avoiding Disputes",
      image:"https://i.imgur.com/wONMZ9n.jpeg",
      description: "A detailed estimate minimizes misunderstandings between the client and contractor. Acts as a reference document for resolving disputes over project scope and costs."
    }
  ];

  return (
    <>

<Navbar/>
<div>



    <div>
      <header className='ehovd'>
        <h1>Importance of Estimates in Construction</h1>
        <p>A crucial step to ensure project success and financial control.</p>
       
        </header>
        </div>


        <div className="eccovd">

      <main className="card-grid">
        {points.map((point, index) => (
          <div className="eoc" key={index}>
            <h2>{point.title}</h2>
            <img src={point.image}/>
            <p>{point.description}</p>
          </div>
        ))}
      </main>
      </div>



      <section className="excel-section">
        <h2>Excel Estimation Tools</h2>
        <p className='zun'>Excel is a vital tool for creating and managing construction estimates. It enables precise calculations and easy adjustments for budgeting and cost control.</p>
        <div className='ewps'>
        <img 
          src="https://i.imgur.com/kESMjkH.png" 
          alt="Excel Estimate Example"
          className="excel-img"
        />
         <img 
          src="https://i.imgur.com/sEBSd8j.png" 
          alt="Excel Estimate Example"
          className="excel-img"
        />
        </div>
      </section>
    
      </div>
<Footer/>
</>


    
  );
};

export default ImportanceOfEstimates;
