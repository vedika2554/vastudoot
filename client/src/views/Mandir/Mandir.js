import React from "react";
import './Mandir.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

function Mandir() {
    return (
        <>
            <Navbar />
            <div className="tbd">Mandir design</div>
            <p className="tbdp">
            A mandir (temple) design is a sacred and serene layout dedicated to spiritual practices, often serving as a place of worship and meditation. Typically, a mandir includes a central sanctum where idols or deities are placed, along with an area for devotees to offer prayers, light incense, or meditate. The design prioritizes tranquility, with elements such as intricate carvings, religious symbols, and natural materials like wood or stone, which contribute to the divine atmosphere. The mandir often features a simple yet elegant structure, with spaces designed for a calm and reflective environment, allowing individuals to connect with their spirituality.
          </p>
          
            <section className="plan-section">
                <div className="plan-container">
                    <div className="plan-card">
                        <div className="plan-header">
                            <h2 className="plan-title">Building Plan</h2>
                        </div>
                        <div className="image-wrapper">
                            <img
                                src="https://i.imgur.com/gsoYNs3.png"
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
                                src="https://i.imgur.com/FmcG6EP.jpeg"
                                alt="3D Building"
                                className="building-image"
                            />
                        </div>
                        <p className="created-by">Designed by: Vastudoot Construction</p>
                    </div>
                </div>
            </section>
            <p className="tbdp">
            The layout of a mandir ensures proper flow of energy and respect for religious traditions. There is often a designated area for performing rituals, such as lighting diyas (lamps), offering flowers, or chanting mantras. Natural light and ventilation are also key considerations in mandir design, with windows or openings to allow sunlight, enhancing the spiritual ambiance. The exterior may include decorative elements, such as sculptures or carvings, reflecting the culture and religious significance of the temple. A well-designed mandir offers a peaceful retreat, fostering devotion, reflection, and connection with the divine.
            </p>
            <Footer/>
        </>
    );
}

export default Mandir;
