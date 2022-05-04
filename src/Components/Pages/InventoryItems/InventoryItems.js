import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem/SingleItem';


const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('InventoryItem.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='container py-3'>
            <h2 className='text-center py-3'>Special Items</h2>
            <div className='row row-cols-1 row-cols-md-3 g-3' >
                {

                    items.map(item => <SingleItem item={item}></SingleItem>)
                }

            </div>
        </div>
    );
};

export default InventoryItems;