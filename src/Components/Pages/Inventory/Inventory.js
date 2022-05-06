import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.modules.css';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    console.log(id);
    useEffect(() => {
        const url = `https://sheltered-citadel-07680.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    return (
        <div className='text-center'>
            <div className='d-flex align-items-center justify-content-center py-3'>
                <div className='inventory-card'>
                    <div className='inventory-card2'>
                        <div className='py-2 px-4 text-light'>
                            <img style={{ width: '250px' }} src={item.image} className="img-fluid" alt="" />
                            <p>Product Id:  {id}</p>
                            <h2>{item.name}</h2>
                            <hr />
                            <p className='fs-6'><span className='fs-5'>Description:</span> {item.description}</p>
                            <h5>Suplier: {item.suplier}</h5>
                            <h5>Quantity: {item.quantity} pc's</h5>
                            <h4>Price: ${item.price}</h4>
                            <h5>Sold: <span className='text-warning'>No</span></h5>
                            <div className='py-2'>
                                <div className='py-2'>
                                    <button className='top-btn inventory-btn' >Delivered</button>
                                </div>
                                <div className='py-3'>
                                    <input type="number" className='w-50' />
                                    <button className='top-btn inventory-btn ms-3'>Add</button>
                                </div>
                                <div className='pt-3'>
                                    <button className="see-btn inventory-see">Manage All Items</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inventory;