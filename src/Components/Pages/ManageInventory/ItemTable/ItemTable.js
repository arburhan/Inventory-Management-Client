import React from 'react';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import './ItemTable.css';

const ItemTable = ({ item }) => {
    const { _id, name } = item;
    const navigate = useNavigate();
    const handleUpdate = id => {
        navigate(`/inventory/${_id}`);
        console.log(id);
    }
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td onClick={() => { handleUpdate(_id) }} className='text-center'><button className='inventory-up manage-btn'>Update</button></td>
            <td className='text-center'><button className='delete-btn manage-btn' >Delete</button></td>
        </tr>
    );
};

export default ItemTable;