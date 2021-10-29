import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

import './Places.css'
const Places = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    return (
        <div>
             <h2 className=" mt-5">Tour Places Options</h2>
            <div id="places" className="place-container container">
                {
                    places.map(place => <Place
                        key={place.id}
                        place={place}
                    ></Place>)
                }
            </div>
        </div>
    );
};

export default Places;