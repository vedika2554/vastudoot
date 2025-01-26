import React, { useState } from 'react';
import './Constructionpermission.css';
import Navbar from './../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'


function Card({ title, children }) {
  return (
    
    <div className="percard">
      {title && <h3 className="percard-title">{title}</h3>}
      <div className="percard-content">{children}</div>
    </div>
  );
}

// Reusable Feature Block
function FeatureBlock({ image, title, description }) {
  return (
    <div className="perfeature">
      <img src={image} alt={title} className="prefeimg" />
      <div className="perfeature-details">
        <h4 className="perfeature-title">{title}</h4>
        <p className="perfeature-description">{description}</p>
      </div>
    </div>
  );
}

// Reusable FAQ Item Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h4>{question}</h4>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function ConstructionPermission() {
  return (
    <>
    <Navbar/>

    <div class="wrapper">
      
    <div className="per-head">
    
      <header className="hedper">
        <h1>Vastudooot Construction</h1>
        <h2>Your Trusted Partner in Construction Permissions</h2>
      </header>

    </div>
</div>










      <main className="per-main-content">
        {/* Why Choose Us Section */}
        <Card title="Why Choose Vastudooot Construction?">
          <div className="cpfeatures">
            <FeatureBlock 
                  image="https://i.imgur.com/TFNZIdc.jpeg" 
              title="Expert Guidance" 
              description="Our team provides step-by-step guidance through the entire permission process." 
            />
            <FeatureBlock 
             image='https://i.imgur.com/UPwTGft.jpeg'
              title="Streamlined Approvals" 
              description="We leverage strong relationships with local authorities to expedite approvals." 
            />
            <FeatureBlock 
               image='https://i.imgur.com/mm8q75R.jpeg'
              title="Regulatory Compliance" 
              description="We ensure your project adheres to all regulatory and environmental guidelines." 
            />
            <FeatureBlock 
              image="https://i.imgur.com/pUjalfj.jpeg" 
              title="Transparency" 
              description="We are committed to clear communication and professional service." 
            />
            <FeatureBlock 
              image="https://i.imgur.com/72YmXGc.jpeg" 
              title="Tailored Solutions" 
              description="We offer custom solutions for residential, commercial, and industrial projects." 
            />
          </div>
        </Card>

        {/* Steps Section */}
        <Card title="Steps to Obtain Construction Permissions">
          <div className="cpfeatures">
            <FeatureBlock 
             image="https://i.imgur.com/vJT8XH7.jpeg"  
              title="Land Survey and Documentation" 
              description="Conduct a thorough land survey and verify land ownership documents." 
            />
            <FeatureBlock 
              image="https://i.imgur.com/vqFEFrv.jpeg" 
              title="Architectural Plan Preparation" 
              description="Prepare detailed plans compliant with building codes and zoning regulations." 
            />
            <FeatureBlock 
               image="https://i.imgur.com/lMvtnNW.jpeg" 
              title="Approval from Local Authorities" 
              description="Submit plans to municipal authorities for design and safety assessments." 
            />
            <FeatureBlock 
               image="https://i.imgur.com/shg1UJU.jpeg" 
              title="Environmental Clearance" 
              description="Obtain necessary environmental clearances for eligible projects." 
            />
            <FeatureBlock 
              image="https://i.imgur.com/gJhhD9m.jpeg" 
              title="Additional Permits" 
              description="Secure permits such as fire safety, water connections, and utilities." 
            />
          </div>
        </Card>

        {/* FAQ Section */}
        <Card title="Frequently Asked Questions">
          <div className="faq-section">
            <FAQItem 
              question="How long does it take to get construction permissions?" 
              answer="The timeline varies depending on project size and local authority processes, but typically ranges from 1 week to 1 month." 
            />
            <FAQItem 
              question="What documents are required?" 
              answer="Essential documents include land ownership proof, architectural plans, and previous permissions (if any)." 
            />
            <FAQItem 
              question="Do you handle environmental clearance?" 
              answer="Yes, we provide end-to-end support for obtaining necessary environmental clearances." 
            />
          </div>
        </Card>
      </main>
    <Footer/>
    </>
  );
}

export default ConstructionPermission;
