import React from 'react';
import './SingleItem.css';

const SingleItem = ({ item }) => {
    const { image, name, description, quantity, price, company } = item;
    return (
        <div>
            <div className='card p-3 item-card'>
                <img src={image} alt="" className='img-fluid' />
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h4>Quantity: {quantity} Kg's</h4>
                    <h3>Price: ${price}</h3>
                    <h4>Company: {company}</h4>
                </div>
                <div className='text-center py-2' >
                    <button className='update-btn' >Update</button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;