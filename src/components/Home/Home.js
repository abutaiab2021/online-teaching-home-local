import education from '../../components/Imgaes/education.jpg'
import home_page from '../../components/Imgaes/education.jpg'
import React from 'react';
import './Home.css'
import Offers from '../Offers/Offers';


const Home = () => {
    return (
        <div className="container">
    <div id="carouselExampleIndicators" className="carousel slide mt-2" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={education} className="d-block w-100 education" alt=""/>
            </div>
            <div className="carousel-item">
            <img src={home_page} className="d-block w-100 education" alt=""/>
            </div>
            <div className="carousel-item">
            <img src={education} className="d-block w-100 education" alt=""/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div> 
        <div className="mt-5 text-center">
             <h1 className=" text-primary"><u>WE OFFER</u></h1>
             <p className="text-center ms-5 me-5 fw-bold">We have some offer in our Course We have some offer in our Course We have some offer in our Course We have some offer in our Course We have some offer in our Course We have some offer in our Course We have some offer in our Course We have some offer in our Course We have some offer in our Course We have some offer in our Course</p>
        </div>
        <Offers></Offers>
        </div>
    );
};

export default Home;