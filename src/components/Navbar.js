import React from 'react';
import { Link } from 'react-router-dom';
import { images } from "../assets/images";
import "../styles/navbar.css";
import Home from "../pages/Home";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={images.logo} alt="Project Logo" className="navbar-logo" />
            <h1 className="navbar-title">Superteam DeSci Challenge 2025</h1>
            <div className="navbar-menu">
                <Link to="/home" element={<Home />}>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;