import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Button variant="primary">Click Me</Button> {/* Add the Button component */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
