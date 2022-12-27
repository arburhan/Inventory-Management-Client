import React from 'react';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ItemTable.css';


const ItemTable = ({ item }) => {
    const { _id, name } = item;
    const navigate = useNavigate();
    const handleUpdate = id => {
        navigate(`/inventory/${_id}`);
    }
    const deleteItem = id => {
        const procced = window.confirm('Are you sure delete this item? ');
        if (procced) {
            const url = `https://inventory-management-server.onrender.com/inventory/${id}`;
            toast('Item Delete Successfully.')
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {

                })
        }
    }
    return (
        <>
            <tr>
                <td>{_id}</td>
                <td>{name}</td>
                <td onClick={() => { handleUpdate(_id) }} className='text-center'><button className='inventory-up manage-btn'>Add Stock</button></td>
                <td onClick={() => { deleteItem(_id) }} className='text-center'><button className='delete-btn manage-btn' >Delete</button></td>
            </tr>
        </>
    );
};

export default ItemTable;