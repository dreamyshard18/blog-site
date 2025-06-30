import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS styles
import Login from './components/Login';
import Landing from './pages/Landing';
import { useState } from 'react';


function App() {
  const [newBlog, setnewBlog] = useState("");
  const handlenewBlog = async () => {
    const body = {
      content: newBlog,
      title: "",
      username: "",
      createdAt: ""
    };
    await fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    await handlenewBlog();
  }

  const handlegetBlogs = async () => {
    const response = await fetch("http://localhost:8080");
    const data = await response.json();
    setnewBlog(data.map(blog => blog.content));
  }
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
