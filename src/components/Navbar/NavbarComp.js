import React from 'react'
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap'
import './navbar.css'
function NavbarComp() {
  return (
    <Navbar className='mainnav' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Ramkrishna Mahato Government Engineering College</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <Nav.Link href="https://rkmgec.ac.in/" target='_blank'>About Us</Nav.Link>
      <Nav.Link href="https://rkmgec.ac.in/#contact" target='_blank'>Contact Us</Nav.Link>
      <Nav.Link href="#deets">Register</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
          Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavbarComp