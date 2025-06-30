import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS styles
import Login from './components/Login';
import Landing from './pages/Landing';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route className="home" path="/" element={<Landing />} />
          <Route className="categories" path="/Categories" />
          <Route className="login" path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
