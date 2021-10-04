import React from 'react'
import { Link } from 'react-router-dom';
import './Offer.css'

function Offer(props) {
    const {id,title,description,img} = props.offer;
    return (
    <div class="card footer-card shadow-lg p-3 mb-2  rounded border border-danger border-2" >
        <img src={img} class="card-img-top" alt=""/>
    <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <Link to="#" class="btn btn-primary">View More </Link>
    </div>
    </div>


    )
}

export default Offer
