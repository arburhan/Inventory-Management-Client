import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.modules.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, quantity, suplier, price, image, description } = item;
    const navigate = useNavigate();
    // load item
    useEffect(() => {
        const url = `https://sheltered-citadel-07680.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);
    const handleAllProducts = () => {
        navigate('/manageInventory');

    }
    // decrease quantity
    const decreaseQuantity = e => {
        if (quantity === 0) {
            toast('product stock out');
        }
        if (quantity > 0) {
            let newQuantity = quantity - 1;
            const newItem = { ...item, quantity: newQuantity };
            setItem(newItem);
            toast('product deliverd');
            const url = `https://sheltered-citadel-07680.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
        }
    }


    // quantity update
    const handleUpdateUser = e => {
        e.preventDefault();
        const valuQuantity = parseInt(e.target.quantity.value);
        let newQuantity = parseInt(quantity) + valuQuantity;
        const newItem = { ...item, quantity: newQuantity };
        setItem(newItem);
        const url = `https://sheltered-citadel-07680.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {

                toast('Quantity update successfully .')
                e.target.reset();
            })

    }

    return (
        <div className='text-center'>
            <div className='d-flex align-items-center justify-content-center py-3'>
                <div className='inventory-card'>
                    <div className='inventory-card2'>
                        <div className='py-2 px-4 text-light'>
                            <img style={{ width: '250px' }} src={image} className="img-fluid" alt="" />
                            <p>Product Id:  {id}</p>
                            <hr />
                            <h2>{name}</h2>
                            <p className='fs-6'><span className='fs-5'>Description:</span> {description}</p>
                            <h5>Suplier: {suplier}</h5>
                            <h5>Quantity: {quantity} pc's</h5>
                            <h4>Price: ${price}</h4>
                            <h5>Sold: <span className='text-warning'>{
                                quantity === 0 ? 'All Sold' : 'No'
                            }</span></h5>
                            <div className='py-2'>
                                <button onClick={decreaseQuantity} className='deliver-btn' >Delivered</button>
                            </div>
                            <hr />
                            <div className='py-2'>
                                <form className='py-4 form-parent' onSubmit={handleUpdateUser}>
                                    <input placeholder='Quantity' type="number" name="quantity" className='w-50 me-2' required />
                                    <input className='inventory-btn w-75 w-md-50 mt-3 mt-md-0' type="submit" value="Restock Now" />
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