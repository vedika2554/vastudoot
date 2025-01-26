import React from "react";
import './Threebhk.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

function Threebhk() {
    return (
        <>
            <Navbar />
            <div className="tbd">Three bhk design</div>
            <p className="tbdp">
            A 3BHK design is a spacious and well-planned layout that includes three bedrooms, a living area, and a kitchen, making it ideal for larger families or individuals seeking extra space. This design provides the perfect balance between privacy and shared living, with enough room to cater to diverse needs. Typically, the master bedroom comes with an attached bathroom for added convenience, while the other two bedrooms can be used for children, guests, or as a study or hobby room. The living area serves as a central space for relaxation and socializing, often connected to a dining area or balcony, creating a warm and welcoming ambiance.
          </p>
          
            <section className="plan-section">
                <div className="plan-container">
                    <div className="plan-card">
                        <div className="plan-header">
                            <h2 className="plan-title">Building Plan</h2>
                        </div>
                        <div className="image-wrapper">
                            <img
                                src="https://i.imgur.com/EBk3nn7.png"
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
                                src="https://i.imgur.com/ZOIVpBi.jpeg"
                                alt="3D Building"
                                className="building-image"
                            />
                        </div>
                        <p className="created-by">Designed by: Vastudoot Construction</p>
                    </div>
                </div>
            </section>
            <p className="tbdp">A 3BHK design offers flexibility and functionality, making it a great option for families or those who entertain frequently. With ample space for storage and modern amenities, these layouts ensure a comfortable lifestyle while accommodating future needs. Proper ventilation, natural light, and a smart division of spaces are key highlights, providing both aesthetic appeal and practicality. Whether in a modern apartment or an independent house, a 3BHK layout is perfect for those who value convenience, luxury, and room for personalization.</p>
            <Footer/>
        </>
    );
}

export default Threebhk;
