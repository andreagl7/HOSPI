import React from 'react'
import '../App.css'
import logo from './pages/imgs/Gaming.png'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>HOSPIPLAY</h1>
            <p>Videojuegos</p>
            <br/>
            <img src={logo} alt="Logo" width="30%" height="50%"></img>
        </div>
    )
}

export default HeroSection
