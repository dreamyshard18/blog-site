import React from 'react';
import { Navbar as RBNavbar, Container, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <>
      <RBNavbar bg="dark" data-bs-theme="dark">
        <Container>
          <RBNavbar.Brand href="#home">Navbar</RBNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </RBNavbar>

      <br />

      <RBNavbar bg="primary" data-bs-theme="dark">
        <Container>
          <RBNavbar.Brand href="#home">Navbar</RBNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </RBNavbar>

      <br />

      <RBNavbar bg="light" data-bs-theme="light">
        <Container>
          <RBNavbar.Brand href="#home">Navbar</RBNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </RBNavbar>
    </>
  );
}

export default Navbar;
