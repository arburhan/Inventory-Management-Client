import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleItem.css';


const SingleItem = ({ item }) => {
    const navigate = useNavigate();
    const { _id, image, name, description, quantity, price, suplier } = item;
    const handleUpdate = _id => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div>
            <div className='card p-3 item-card'>
                <img src={image} alt="" className='img-fluid' />
                <div>
                    <h3>{name}</h3>
                    <p title={description}>{description.length > 75 ? description.slice(0, 70) + '...' : description} </p>
                    <h5>Quantity: {quantity}pc's</h5>
                    <h4>Price: ${price}</h4>
                    <h5>Suplier: {suplier}</h5>
                </div>
                <div className='text-center py-2' >
                    <button onClick={() => { handleUpdate(_id) }} className='update-btn' >Update</button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;