import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const url = ` https://sheltered-citadel-07680.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                toast('Item added successfully !');
            })

    };
    return (
        <div style={{ backgroundColor: '#2b2d42' }} className='container-fluid text-white pb-3'>
            <h2 className='text-center pt-4'>Add New Product</h2>
            <div className='w-75 mx-auto pt-2'>
                <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                    <label className='mt-2 d-block text-start' htmlFor="productName">Product Name</label>
                    <input placeholder='Product Name' {...register("name")} required />
                    <label className='mt-2 d-block text-start' htmlFor="suplierName">Suplier Name</label>
                    <input placeholder='Suplier Name' {...register("suplier")} required />
                    <label className='mt-2 d-block text-start' htmlFor="email">User Mail</label>
                    <input className='text-warning' {...register("email")} value={user?.email} readOnly />
                    <label className='mt-2 d-block text-start' htmlFor="price">Price</label>
                    <input placeholder='Price' type="number" {...register("price")} required />
                    <label className='mt-2 d-block text-start' htmlFor="quantity">Quantity</label>
                    <input placeholder='Quantity' type="number" {...register("quantity")} required />
                    <label className='mt-2 d-block text-start' htmlFor="imageLink">Image Link</label>
                    <input placeholder='Image Link' {...register("image")} required />
                    <label className='d-block text-start' htmlFor="description">Description</label>
                    <textarea className='rounded textarea-space' name="description" id="" {...register("description")}></textarea>
                    <div className='py-2'>
                        <button type="submit" className='add-item-btn'>Add Item</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddItem;