import React from "react";
import './Showroom.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

function Threebhk() {
    return (
        <>
            <Navbar />
            <div className="tbd">Showroom design</div>
            <p className="tbdp">
            A showroom design is a carefully crafted layout that showcases products in an aesthetically pleasing and functional manner, designed to attract and engage customers. Typically, a showroom includes dedicated spaces for displaying a range of items, with clear sightlines and organized sections for each product category. The design focuses on creating a welcoming atmosphere, with features like adequate lighting, open floor plans, and strategic placement of products to encourage exploration. Whether it’s furniture, electronics, or fashion, the showroom layout is tailored to highlight the uniqueness and quality of the products, often incorporating design elements that align with the brand’s identity.     
                 </p>
          
            <section className="plan-section">
                <div className="plan-container">
                    <div className="plan-card">
                        <div className="plan-header">
                            <h2 className="plan-title">Building Plan</h2>
                        </div>
                        <div className="image-wrapper">
                            <img
                                src="https://i.imgur.com/ycZat4B.png"
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
                                src="https://i.imgur.com/3rvvczr.jpeg"
                                alt="3D Building"
                                className="building-image"
                            />
                        </div>
                        <p className="created-by">Designed by: Vastudoot Construction</p>
                    </div>
                </div>
            </section>
            <p className="tbdp">
            In a showroom, the space is designed not only to display products but also to provide an immersive shopping experience. Thoughtful attention is given to traffic flow, ensuring that customers can easily navigate the space and interact with the items on display. The use of mirrors, displays, and signage helps direct attention to key products while creating a visually appealing environment. Showroom designs also consider lighting and color schemes to create an ambiance that complements the merchandise. With a balance of functionality and visual appeal, a well-designed showroom ensures a seamless customer experience, encouraging both engagement and purchase.
            </p>
            <Footer/>
        </>
    );
}

export default Threebhk;
