import { useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/Navbar.css'

const NavBar = () =>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const navbarStyle ={
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
    }
    
    return(
        <>
          <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand className="brand" as={Link} to="/">Tony.</Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="offcanvas" onClick={handleShow} />
         <Nav className="nav-links" style={navbarStyle}>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/download">Download Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
     </Container>
    </Navbar>

    <Offcanvas show={show} onHide={handleClose} className='offcanvas w-75'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="nav-off" >
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/download">Download Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}

export default NavBar;