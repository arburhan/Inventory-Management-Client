import React from 'react';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import './ItemTable.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemTable = ({ item }) => {
    const { _id, name } = item;
    const navigate = useNavigate();
    const handleUpdate = id => {
        navigate(`/inventory/${_id}`);
    }
    const deleteItem = id => {
        const procced = window.confirm('Are you sure delete this item? ');
        if (procced) {
            const url = `https://sheltered-citadel-07680.herokuapp.com/inventory/${id}`;
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
                <td onClick={() => { handleUpdate(_id) }} className='text-center'><button className='inventory-up manage-btn'>Update</button></td>
                <td onClick={() => { deleteItem(_id) }} className='text-center'><button className='delete-btn manage-btn' >Delete</button></td>
            </tr>
            <ToastContainer />
        </>
    );
};

export default ItemTable;