import education_work from '../../components/Imgaes/work-in-education.jpg'
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container d-flex text-center">
            <div className=" me-5 mt-3 rounded mt-3">
            <img className="d-block w-100 rounded mt-3 " src={education_work} alt="" />
            <div className="mt-2 border border-primary border-2 p-2">
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </div>
            <div className=" me-5 mt-3 rounded mt-3">
            <img className="d-block w-100 rounded mt-3 " src={education_work} alt="" />
            <div className="mt-2 border border-primary border-2 p-2">
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </div>
        </div>
    );
};

export default About;