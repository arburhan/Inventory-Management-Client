import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={{ backgroundColor: '#2b2d42' }} className='container-fluid text-white pb-3'>
            <h2 className='text-center pt-4'>Add New Product</h2>
            <div className='w-75 mx-auto pt-2'>
                <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                    <label className='mt-2 d-block text-start' htmlFor="productName">Product Name</label>
                    <input placeholder='Product Name' {...register("productName")} required />
                    <label className='mt-2 d-block text-start' htmlFor="suplierName">Suplier Name</label>
                    <input placeholder='Suplier Name' {...register("suplierName")} required />
                    <label className='mt-2 d-block text-start' htmlFor="price">Price</label>
                    <input placeholder='Price' type="number" {...register("price")} required />
                    <label className='mt-2 d-block text-start' htmlFor="quantity">Quantity</label>
                    <input placeholder='Quantity' type="number" {...register("quantity")} required />
                    <label className='mt-2 d-block text-start' htmlFor="imageLink">Image Link</label>
                    <input placeholder='Image Link' {...register("imageLink")} required />
                    <label className='d-block text-start' htmlFor="description">Description</label>
                    <textarea className='rounded textarea-space' name="description" id="" {...register("description")}></textarea>
                    <div className='py-2'>
                        <button type="submit" className='add-item-btn'>Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;