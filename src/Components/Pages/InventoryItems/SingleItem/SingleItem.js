import React from 'react';

const SingleItem = ({ item }) => {
    const { image, name, description, quantity, price, company } = item;
    return (
        <div className='shadow-sm p-3 rounded'>
            <img src={image} alt="" className='img-fluid' />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>Quantity: {quantity} Kg's</h4>
                <h3>Price: ${price}</h3>
                <h4>Company: {company}</h4>
            </div>
            <div className='text-center' >
                <button className='update-btn' >Update</button>
            </div>
        </div>
    );
};

export default SingleItem;