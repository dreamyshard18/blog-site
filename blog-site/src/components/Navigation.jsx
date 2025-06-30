import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// Optional: for custom styles

const Navigation = () => {
  return (
    <Navbar className="navbar" style={{ backgroundColor: '#ff6ec7' }} variant="light" expand="lg">
 
        {/* Left logo */}
      
          <div style={{
         paddingTop: '0.5rem',
          }}>
            <img src="./src/assets/blogg.png" alt="BlogIt Logo" style={{ height: '40px' }} />
          </div>
        

        {/* Center branding */}
       <header style={{ display: 'flex', alignItems: 'center' }}>
  <img
    src="./src/assets/BLOG IT.png"
    alt="BlogIt Logo"
    style={{ height: '40px', marginRight: '10px' }}
  />
  <div>
    <h3 style={{ margin: 0, color: 'white', letterSpacing: '2px', fontSize: '1.2rem' }}>
      BLOGIT
    </h3>
    <p style={{ margin: 0, fontSize: '0.8rem', color: 'white' }}>
      Watch it. Recall it. Blog it.
    </p>
  </div>
</header>


        {/* Right nav + login */}
      
     
    </Navbar>
  );
};

export default Navigation;
