import React from "react";
import './Twobhk.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

function Twobhk() {
    return (
        <>
            <Navbar />
            <div className="tbd">Two bhk design</div>
            <p className="tbdp">
            A 2BHK design is a versatile and efficient layout that includes two bedrooms, a living area, and a kitchen, making it ideal for small families, couples, or individuals. This design emphasizes space optimization and modern amenities to ensure both comfort and functionality. The master bedroom often features an attached bathroom for added convenience, while the second bedroom serves as a flexible space for guests, children, or work-from-home setups. The living area acts as the central hub for relaxation and entertainment, often designed with open or semi-open connectivity to the kitchen for seamless interaction.
          </p>
          
            <section className="plan-section">
                <div className="plan-container">
                    <div className="plan-card">
                        <div className="plan-header">
                            <h2 className="plan-title">Building Plan</h2>
                        </div>
                        <div className="image-wrapper">
                            <img
                                src="https://i.imgur.com/En0U7KA.jpeg"
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
                                src="https://i.imgur.com/zmEHjaR.jpeg"
                                alt="3D Building"
                                className="building-image"
                            />
                        </div>
                        <p className="created-by">Designed by: Vastudoot Construction</p>
                    </div>
                </div>
            </section>
            <p className="tbdp">With thoughtful planning, a 2BHK design ensures ample natural light, ventilation, and privacy. These homes combine affordability with aesthetic appeal, making them a perfect choice for urban dwellers seeking convenience and style. Whether in a compact city apartment or a spacious suburban home, 2BHK layouts cater to modern lifestyles by balancing functionality with elegance, making them one of the most popular housing options today.</p>
            <Footer/>
        </>
    );
}

export default Twobhk;
