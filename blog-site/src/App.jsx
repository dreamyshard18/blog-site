import React from 'react';
import Navigation from './components/Navigation'; // Adjust path if needed

function App() {
  return (
    <div>
      <Navigation />
      
      {/* Dummy content to show the navbar in action */}
      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h1>Welcome to BlogIt</h1>
        <p>This is your awesome blog homepage!</p>
      </div>
    </div>
  );
}

export default App;
