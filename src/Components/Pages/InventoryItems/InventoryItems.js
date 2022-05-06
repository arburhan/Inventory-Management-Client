import React, { useEffect, useState } from 'react';
import useInventory from '../../Hooks/useInventory';
import SingleItem from './SingleItem/SingleItem';
import './InventoryItems.css';
import { useNavigate } from 'react-router-dom';


const InventoryItems = () => {
    const [items, setItems] = useInventory();
    const navigate = useNavigate();

    const handleAllProducts = () => {
        navigate('/manageInventory');

    }
    return (
        <div className='container py-3'>
            <h2 className='text-center py-3'>Special Items</h2>
            <div className='row row-cols-1 row-cols-md-3 g-3' >
                {
                    items.slice(0, 6).map(item => <SingleItem item={item} key={item._id}></SingleItem>)
                }

            </div>
            <div className='text-center pt-5'>
                <button onClick={handleAllProducts} className='see-btn'>Manage All Items</button>
            </div>
        </div>
    );
};

export default InventoryItems;