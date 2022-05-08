import React from 'react';
import './StockUpdates.css';

const StockUpdates = () => {
    return (
        <div className='text-center'>
            <div className='parent-stock fw-bold pt-4'>
                <h2 className=''>Weekly Updates</h2>
                <div className='parent-stock-div'>
                    <div className='category-singleDiv category-responsive category-textSpace'>
                        <h1>2M</h1>
                        <h4>We Stock</h4>
                    </div>
                    <div className='category-singleDiv category-responsive category-textSpace'>
                        <h1>1.8M</h1>
                        <h4>We Sold</h4>
                    </div>
                    <div className='category-singleDiv category-textSpace'>
                        <h1>30K</h1>
                        <h4>Customer</h4>
                    </div>
                    <div className=' category-textSpace'>
                        <h1>2K</h1>
                        <h4>Employee</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StockUpdates;