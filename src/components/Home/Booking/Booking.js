import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import './Booking.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   
    const {placeId}=useParams();
    const { user } = useAuth();
    const [place, setPlace] = useState([])
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    useEffect(() => {
        fetch(`https://vast-falls-32206.herokuapp.com/places/${placeId}`)
            .then(res => res.json())
            .then(data => setPlace(data));

    }, [])
    
    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;
        // const savebooking = data.booking;
        
        fetch('https://vast-falls-32206.herokuapp.com/booking', {
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

        // const handleDelete = id =>{
        //   fetch(`http://localhost:5000/booking/${id}`,{
        //     method: 'DELETE'
        //   })
        //   .then(res => res.json())
        //   .then(data => {
        //       console.log(data);
        //       if (data.id) {
        //         alert('Booking deleted successfully');
        //         // clearTheCart();
        //         reset();
        //     }
        
        //   })
        // }
    

    return (
        <div>
            <h3 className="mt-4 mb-4 text-primary"> Booking Details : {place.name}</h3>
            <h5 className="mt-4 mb-4">Booking Id : {placeId}</h5>
            
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
              
                <img src={place.img} alt="" srcset="" />
                <p className="mt-2"><b>Purpose:{place.name}</b></p>
                <p className="mt-2"><b>Price:$ {place.price}</b></p>
                <input defaultValue={place.name} {...register("purpose")} />
                <input defaultValue={place.price} {...register("price")} />
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                                 
                <input className="button" type="submit" />
                
            </form>
            <Button className="button mb-4 form-style"  onClick={handleShow}>
            Do you want to Cancel your booking
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Cancel Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Link to={'/home'}>
                <Button variant="primary" onClick={handleClose}>
                    
                    Cancel Booking
                </Button>
                </Link>
                </Modal.Footer>
            </Modal>
           
        </div>
    );
};

export default Booking;