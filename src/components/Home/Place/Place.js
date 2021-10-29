import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = ({ place }) => {
    const { name, description, img, id, price } = place;
    return (
        <div className=" place">
        <img className="pt-4 " src={img} alt="" />
        <h4 className="mt-3">{name}</h4>

        <p className="px-2">{description}</p>
        <h6>Price: $ {price}</h6>
        <Link to={`/placeDetails/${id}`}>
            <button className="button m-3">Book Your Tour </button>
        </Link>
            
        </div>
    );
};

export default Place;