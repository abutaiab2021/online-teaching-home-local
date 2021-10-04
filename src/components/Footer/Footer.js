import React from 'react';
import logo from '../../components/Imgaes/logo.jpg'
import './Footer.css'

const Footer = () => {
    return (

        <div className="container">
        <div className="footer d-flex">
            <div className="left-footer">
            <img src={logo}    alt=""/>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h5>
            <span><i class="fab fa-facebook"></i></span><span><i class="fab fa-linkedin-in"></i></span><span><i class="fab fa-telegram-plane"></i></span><span><i class="fab fa-whatsapp-square"></i></span>
            </div>
            <div className="left-footer">
            <h2>Important Link</h2>
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Teachers Info</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            </div>
            <div className="left-footer">
            <h2>Get In Touch</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <p>Phone : 01820538767</p>
            <p>Email : abutaiabcse95@gmail.com</p>
            <p>Website : www.csoft.com</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;