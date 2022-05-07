import React from 'react';
import './SingleCategory.css';


const SingleCategory = ({ category }) => {
    const { name, image } = category;
    return (
        <div className='category-div' >
            <img src={image} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default SingleCategory;