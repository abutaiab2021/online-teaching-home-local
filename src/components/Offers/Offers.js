import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import Offer from '../Offer/Offer'
import './Offers.css'

function Offers() {
    const [offers,setOffers] = useState([])
    useEffect(()=>{
        fetch('./offer.JSON')
        .then(res=>res.json())
        .then(data=>setOffers(data))
    },[])
    return (
        <div className="offers">
            {
                offers.map(offer => <Offer
                    key={offer.id} 
                    offer={offer}
                    ></Offer>)
            }
        </div>
    );
}

export default Offers
