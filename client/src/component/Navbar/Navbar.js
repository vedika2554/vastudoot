import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
function BasicExample() {
  const logoUrl = 'https://i.imgur.com/XpDrwXR.png'
  return (
    <div className='cd'>
      
    <Navbar expand="lg" id="ag">
        
      <Container className='con'>
        
        <Navbar.Brand href="#home"> <img src={logoUrl} className='logo' /><span className='navbrand1'>वास्तु</span>&nbsp;  <span className='navbrand2'>Doot</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link href="/"><span className='nav-menu'>Home</span></Nav.Link>
           <NavDropdown  title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/वास्तुशास्त्रानुसारबांधकाम">वास्तुशास्त्रानुसार बांधकाम </NavDropdown.Item>
              <NavDropdown.Item href="/सॉफ्टवेअर">
              सॉफ्टवेअर 

              </NavDropdown.Item>
              <NavDropdown.Item href="/rccdesign">
              RCC डिझाइन

              </NavDropdown.Item>
              <NavDropdown.Item href="/constructionpermission">बांधकाम परवानगी </NavDropdown.Item>
            
              <NavDropdown.Item href="/constructionmaterials">मटेरियल सोबत कॉन्ट्रॅक्ट
              </NavDropdown.Item>
              <NavDropdown.Item href="/3delevation">3D Elevation </NavDropdown.Item>
            
            <NavDropdown.Item href="/estimate">Estimate</NavDropdown.Item>
            <NavDropdown.Item href="/supervision">Supervision</NavDropdown.Item>
            <NavDropdown.Item href="/Interior">Interial Design</NavDropdown.Item>
            </NavDropdown>

            



           




            <Nav.Link href="/ourdesign"><span className='navsub'>Our design</span></Nav.Link>
            <Nav.Link href="/about"><span className='navsub'>About</span></Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
        <a href="tel:+919404692698"className='hth'>Call us to know more</a >


      </Container>
    </Navbar>
    </div>
  );



}
export default BasicExample;