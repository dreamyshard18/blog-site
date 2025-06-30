import React from 'react';
import Navigation from './components/Navigation'; // Adjust path if needed
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'; // Import your CSS styles
function App() {
  return (
    <div>
     
       <BrowserRouter>
 
  <div className="App">
    
     <Navigation />
     <h1 className='headblog'>Welcome to BlogIt</h1>
    <main>
      <Routes>
        <Route className="home" path="/" />
        <Route className="categories" path="/Categories"  />
      </Routes>
      <h2 className='headblog'>Why BlogIt?</h2>
      <p></p>
      <p>BlogIt is a space for everyone to write, read, and connect. Whether you're sharing ideas, telling stories, or exploring topics you love, BlogIt makes blogging simple and open to all. No experience needed — just your voice.</p>
      <button className="blog-button">Blog It</button>
    </main>
  </div>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
