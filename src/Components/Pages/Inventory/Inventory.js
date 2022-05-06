import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.modules.css';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const url = `https://sheltered-citadel-07680.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);
    const handleAllProducts = () => {
        navigate('/manageInventory');

    }
    const handleUpdateUser = e => {
        const quantity = e.target.quantity.value;
        console.log(quantity);
    }

    return (
        <div className='text-center'>
            <div className='d-flex align-items-center justify-content-center py-3'>
                <div className='inventory-card'>
                    <div className='inventory-card2'>
                        <div className='py-2 px-4 text-light'>
                            <img style={{ width: '250px' }} src={item.image} className="img-fluid" alt="" />
                            <p>Product Id:  {id}</p>
                            <hr />
                            <h2>{item.name}</h2>
                            <p className='fs-6'><span className='fs-5'>Description:</span> {item.description}</p>
                            <h5>Suplier: {item.suplier}</h5>
                            <h5>Quantity: {item.quantity} pc's</h5>
                            <h4>Price: ${item.price}</h4>
                            <h5>Sold: <span className='text-warning'>No</span></h5>
                            <div className='py-2'>
                                <button className='deliver-btn' >Delivered</button>
                            </div>
                            <hr />
                            <div className='py-2'>
                                <form className='py-4 form-parent' onSubmit={handleUpdateUser}>
                                    <input placeholder='Quantity' type="number" name="quantity" className='w-50 me-2' required />
                                    <input className='inventory-btn w-75 w-md-50 mt-3 mt-md-0' type="submit" value="Add Quantity" />
                                </form>
                                <div className='pt-3'>
                                    <button onClick={handleAllProducts} className="see-btn inventory-see">Manage All Items</button>
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