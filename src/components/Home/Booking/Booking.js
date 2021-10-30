import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import './Booking.css'
import { useParams } from 'react-router';

const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   
    const {placeId}=useParams();
    const { user } = useAuth();
    const [place, setPlace] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/places/${placeId}`)
            .then(res => res.json())
            .then(data => setPlace(data));

    }, [])
    
    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;
        const savebooking = data.booking;

     

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Booking completed Successfully');
                    // clearTheCart();
                    reset();
                }
            })
        }
    return (
        <div>
            <h3 className="mt-4 mb-4 text-primary"> Booking Details : {place.name}</h3>
            <h5 className="mt-4 mb-4">Booking Id : {placeId}</h5>
            
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
              
                <img src={place.img} alt="" srcset="" />
                <p className="mt-2"><b>Purpose:{place.name}</b></p>
                <p className="mt-2"><b>Price:$ {place.price}</b></p>
                
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input className="button mb-4" type="submit" />
            </form>
        </div>
    );
};

export default Booking;