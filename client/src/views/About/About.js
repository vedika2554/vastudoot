import React from "react";
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'

import './About.css';
function About(){
    return(

        <>
            <Navbar/>
            <div>
        <h2 className="pol">About us</h2>
        

        
        <h2 className="nmp">Company name : Vastudoot construction</h2>
       <div className="vty">
        <div>
        <p className="abdes">Welcome to Vastudoot Construction, your trusted partner in creating harmonious and prosperous living and working spaces through the ancient science of Vastu Shastra. With 29 years of expertise in this traditional Indian architectural practice, we specialize in transforming homes, offices, and commercial establishments into environments that foster peace, happiness, and success.</p>

<p className="abdes">At Vastudoot Construction, we believe that the energy flow within a space profoundly impacts the well-being and fortune of its occupants. Our team of experienced Vastu consultants is dedicated to analyzing the unique energy dynamics of your property and providing personalized recommendations that align with the principles of Vastu Shastra. Whether you are building a new space or looking to improve the harmony of an existing one, we are here to guide you every step of the way.</p>

<p className="abdes">Our services include comprehensive Vastu consultations, site visits, space planning, and layout adjustments, all designed to enhance the positive energies and mitigate any imbalances. We combine traditional Vastu wisdom with modern insights to deliver practical solutions that fit today’s lifestyle and architectural standards.</p>

<p className="abdes">At Vastudoot Construction, we are committed to helping you achieve a balanced and thriving environment. We pride ourselves on our client-centric approach, ensuring that our advice is tailored to meet your specific needs and preferences. Let us help you create a space that not only looks good but also feels right.</p>
<p className="abdes">Thank you for choosing Vastudoot Construction as your Vastu Shastra consultant. We look forward to helping you build a brighter, more harmonious future.</p>
</div>
<img src={"https://i.imgur.com/XpDrwXR.png"} className="abimg"/>

</div>
       
        <div className="lo-ca">

        <div className="oper">
        <h4 className="ol">Er Swapnesh </h4>
            <h4 className="ol">Contact no - 9404692698</h4>

        <a href="tel:+919404692698"className='mop'>Call now</a >
        </div>
        <div className="oper">
        <h4 className="ol">Er Hariprasad </h4>
        <h4 className="ol">  Contact no : 9860031720</h4>

        <a href="tel:+919860031720"className='mop'>Call now</a >
        </div></div>
        <h3 className="ol led">Email id : Swapneshpraut@gmail.com</h3>
        
        
        <a href="mailto:Swapneshpraut@gmail.com"className='mop'> Send mail</a>
        </div>
        
    <Footer/>
      </>
    )
}

export default About
