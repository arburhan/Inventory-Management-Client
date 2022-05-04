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
        <div className='container'>
            <h2>Inventory Items</h2>
            <div className='row row-cols-1 row-cols-md-3 g-5' >
                {

                    items.map(item => <SingleItem item={item}></SingleItem>)
                }

            </div>
        </div>
    );
};

export default InventoryItems;