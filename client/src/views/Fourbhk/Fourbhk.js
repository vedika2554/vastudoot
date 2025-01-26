import React from "react";
import './Fourbhk.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

function Fourbhk() {
    return (
        <>
            <Navbar />
            <div className="tbd">Four bhk design</div>
            <p className="tbdp">
            A 4BHK design is a luxurious and spacious layout featuring four bedrooms, a living area, and a kitchen, making it ideal for large families or those who require abundant living space. This design is perfect for accommodating multiple generations under one roof or providing flexibility for various uses, such as guest rooms, home offices, or hobby spaces. Typically, the master bedroom comes with an attached bathroom for added comfort, while the additional bedrooms offer privacy and versatility. The living area serves as the heart of the home, often accompanied by a dining space and sometimes extended to a balcony or terrace for a seamless indoor-outdoor experience.
          </p>
          
            <section className="plan-section">
                <div className="plan-container">
                    <div className="plan-card">
                        <div className="plan-header">
                            <h2 className="plan-title">Building Plan</h2>
                        </div>
                        <div className="image-wrapper">
                            <img
                                src="https://i.imgur.com/LHypp70.png"
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
                                src="https://i.imgur.com/c7XHiyR.jpeg"
                                alt="3D Building"
                                className="building-image"
                            />
                        </div>
                        <p className="created-by">Designed by: Vastudoot Construction</p>
                    </div>
                </div>
            </section>
            <p className="tbdp">
            A 4BHK layout offers unparalleled flexibility and functionality, ensuring ample space for storage, modern amenities, and aesthetic appeal. With thoughtful planning, these designs prioritize natural light, ventilation, and privacy while maintaining a luxurious ambiance. Ideal for urban apartments or independent homes, 4BHK layouts are perfect for those seeking a premium living experience with room for both socializing and personal retreat. Whether hosting guests or accommodating a growing family, a 4BHK home ensures comfort, convenience, and elegance for all.
            </p>
            <Footer/>
        </>
    );
}

export default Fourbhk;
