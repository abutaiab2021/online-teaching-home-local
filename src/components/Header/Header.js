import logo from '../../components/Imgaes/logo.jpg'
import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" container header">
            <div className="d-flex logo-container">
                <img className="logo" src={logo} alt="" />
                <h1 className="fw-bold text-primary">Online Tachning Home</h1>
            </div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/teacher">Teachers Info</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;