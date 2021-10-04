import React from 'react';
import { Link } from 'react-router-dom';
import './Teacher.css'

const Teacher = (props) => {
    const {id,name,Subject,img,age,salary} = props.teacher;
    return (
        <div class="card teacher  shadow-lg p-3 mb-2  rounded border border-danger border-2" >
        <img src={img} class="card-img-top" alt=""/>
    <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Subject : {Subject}</p>
        <p class="card-text">Age : {age}</p>
        <p class="card-text">Salary : {salary}</p>
        <Link to="#" class="btn btn-primary">View More </Link>
    </div>
    </div>
    );
};

export default Teacher;