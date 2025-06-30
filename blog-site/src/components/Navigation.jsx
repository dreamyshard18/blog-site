import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// Optional: for custom styles

const Navigation = () => {
  return (
    <Navbar className="navbar" style={{ backgroundColor: '#ff6ec7' }} variant="light" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#ff90d4',
            padding: '0.4rem 0.8rem',
            borderRadius: '10px'
          }}>
            Bi
          </div>
        </Navbar.Brand>

        {/* Center branding */}
        <div className="text-center flex-grow-1" style={{ marginRight: 'auto', marginLeft: '1rem' }}>
          <h3 style={{ margin: 0, color: 'white', letterSpacing: '2px' }}>B L O G I T</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'white' }}>Watch it. Recall it. Blog it.</p>
        </div>

        {/* Right nav + login */}
        <Nav className="ms-auto align-items-center">
          <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
          <Nav.Link href="#categories" style={{ color: 'white' }}>Categories</Nav.Link>
          <Button variant="light" className="ms-3">Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
