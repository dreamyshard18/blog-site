import React from 'react';
import Navigation from '../components/Navigation';
const Landing = () => {
    return (
        <div className="landing-page">
            <Navigation/>
            <h1>Welcome to the Blog Site</h1>
            <p>Your one-stop destination for insightful articles and discussions.</p>
            <button className="btn btn-primary">Get Started</button>
        </div>
    );
}
export default Landing;