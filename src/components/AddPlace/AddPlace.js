import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPlace.css'

const AddPlace = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://vast-falls-32206.herokuapp.com/places', data)
            .then(res => {
                console.log('post hitted')
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
        
    return (
        <div className="add-place">
            <h2 className="mt-5  text-primary">Please Add a Tourist Place or Tourist Country</h2>
            <form  className="mt-5 mb-5"onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input className="button " type="submit" />
            </form>
        </div>
    );
};

export default AddPlace;