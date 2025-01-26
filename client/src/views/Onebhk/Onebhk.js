import React from "react";
import './Onebhk.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

function Onebhk() {
    return (
        <>
            <Navbar />
            <div className="tbd">One bhk design</div>
            <p className="tbdp">
            A 1BHK design is a compact and efficient layout that includes one bedroom, a living area, and a kitchen, making it an ideal choice for individuals, couples, or small families. This design focuses on maximizing space while ensuring essential amenities are conveniently integrated. The bedroom offers a private and comfortable retreat, while the living area serves as a multifunctional space for relaxation, socializing, or dining. The kitchen, often designed with a modern and modular approach, provides practical storage and functionality within a limited area.
          </p>
          
            <section className="plan-section">
                <div className="plan-container">
                    <div className="plan-card">
                        <div className="plan-header">
                            <h2 className="plan-title">Building Plan</h2>
                        </div>
                        <div className="image-wrapper">
                            <img
                                src="https://i.imgur.com/OU9eFdz.png"
                                alt="Construction Plan"
                                className="plan-image"
                            />
                        </div>
                        <p className="created-by">Designed by: Vastudoot Construction</p>
                    </div>
                    <div className="plan-card">
                        <div className="plan-header">
                            <h2 className="plan-title">3D Model View</h2>
                        </div>
                        <div className="image-wrapper">
                            <img
                                src="https://i.imgur.com/CHUZktL.jpeg"
                                alt="3D Building"
                                className="building-image"
                            />
                        </div>
                        <p className="created-by">Designed by: Vastudoot Construction</p>
                    </div>
                </div>
            </section>
            <p className="tbdp">With clever planning, a 1BHK design optimizes every square foot to create a cozy yet practical living environment. These layouts are perfect for urban settings, where affordability and space utilization are priorities. A well-designed 1BHK ensures proper ventilation, natural light, and an inviting ambiance, making it an excellent option for first-time homeowners, young professionals, or retirees looking for a low-maintenance and stylish home.</p>
            <Footer/>
        </>
    );
}

export default Onebhk;
