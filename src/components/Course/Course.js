import React from 'react'
import { Link } from 'react-router-dom';
import './Course.css'

function Course(props) {
    const {id,img,CourseName,Duration,Price} = props.course;
    return (
        <div class="card shadow-lg p-3 mb-2 bg-body rounded border border-info" >
        <img src={img} class="course-card card-img-top" alt=""/>
    <div class="card-body">
        <h5 class="card-title text-primary">Subject Name : {CourseName}</h5>
        <p class="card-text">Duration : {Duration}</p>
        <p class="card-text">Price : {Price}</p>
        <Link to="#" class="btn btn-primary">Course Details </Link>
    </div>
    </div>
    )
}

export default Course
