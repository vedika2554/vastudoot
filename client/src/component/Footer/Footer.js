import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Separate file for footer styling
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  return (
    <footer className="footer">
      <Container >
        <Row className="footer-top">
          <Col lg={4} md={6} className="footer-logo-section">
            <div className="footer-logo-container">
              <img src="https://i.imgur.com/XpDrwXR.png" className="footer-logo" alt="Vastudoot Logo" />
              <span className="footer-brand-name1">वास्तु</span>
              <span className="footer-brand-name2"> Doot</span>

            </div>
            <p className="footer-description">
              Transforming your dreams into reality with expert construction and design services that follow vastu principles. We bring your vision to life with precision, quality, and care.
            </p>
          </Col>

          {/* Divided Services Section */}
          <Col lg={2} md={6} className="footer-links-section">
            <h5 className="footer-section-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/ourdesign" className="footer-link">Our design</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="tel:+919404692698" className="footer-link">Contact</a></li>
            </ul>
          </Col>


  {/* Second Column of Services */}
  <Col lg={2} md={6} className="footer-services-section">
            <h5 className="footer-section-title">our Services</h5>
            <ul className="footer-links">
              <li><a href="/वास्तुशास्त्रानुसारबांधकाम" className="footer-link">वास्तुशास्त्रानुसार बांधकाम</a></li>
              <li><a href="/सॉफ्टवेअर" className="footer-link">सॉफ्टवेअर</a></li>
              <li><a href="/rccdesign" className="footer-link">RCC डिझाइन</a></li>
              <li><a href="/constructionpermission" className="footer-link">बांधकाम परवानगी</a></li>
             
            </ul>
          </Col>


          {/* First Column of Services */}
          <Col lg={2} md={6} className="footer-services-section">
            <h5 className="footer-section-title">More Services</h5>
            <ul className="footer-links">
              <li><a href="/constructionmaterials" className="footer-link">मटेरियल सोबत कॉन्ट्रॅक्ट</a></li>
              <li><a href="/3delevation" className="footer-link">3D Design</a></li>
              <li><a href="/supervision" className="footer-link">Supervision</a></li>
              <li><a href="/Interior" className="footer-link">Interior Design</a></li>
            </ul>
          </Col>

         

          <Col lg={2} md={6} className="footer-contact-section">
            <h5 className="footer-section-title">Contact Us</h5>
            <p><strong>Phone:</strong> <a href="tel:+919404692698" className="footer-contact-link">+91 94046 92698</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@vastudoot.com" className="footer-contact-link">info@vastudoot.com</a></p>
            <p><strong>Address:</strong> XYZ Street, Pune, India</p>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col className="footer-bottom-col">
            <p className="footer-rights">© 2025 Vastudoot Construction. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

