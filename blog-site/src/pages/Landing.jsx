import React from 'react';
import Navigation from '../components/Navigation';
const Landing = () => {
    return (
        <div className="App">
            <h1 className='headblog'>Welcome to BlogIt</h1>
            <main>
                <div className="landing-page">
                    <Navigation />
                    <h1>Welcome to the Blog Site</h1>
                    <p>Your one-stop destination for insightful articles and discussions.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <h2 className='headblog'>Why BlogIt?</h2>
                <p></p>
                <p>BlogIt is a space for everyone to write, read, and connect. Whether you're sharing ideas, telling stories, or exploring topics you love, BlogIt makes blogging simple and open to all. No experience needed — just your voice.</p>
                <button className="blog-button">Blog It</button>
            </main>
        </div>
    );
}
export default Landing;