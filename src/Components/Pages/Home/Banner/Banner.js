import React from 'react';
import './Banner.css';
const Banner = () => {
    const detailsHandle = () => {
        window.open('https://www.wikihow.com/Stock-Grocery-Shelves');
    }
    return (
        <div className='top-banner d-flex align-items-center justify-content-center'>
            <div className='banner-text text-center py-3' >
                <h2 className='banner-heading'>100% Healthy & Organic </h2>
                <h3> Natural Health Care Ingredients </h3>
                <p>Getting big in small decisions</p>
                <button onClick={detailsHandle} className='top-btn'>Details</button>
            </div>
        </div>
    );
};

export default Banner;