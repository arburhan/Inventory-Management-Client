import React from 'react';
import Table from 'react-bootstrap/Table'
import './ItemTable.css';

const ItemTable = ({ item }) => {
    const { _id, name } = item;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td className='text-center'><button className='inventory-up manage-btn'>Update</button></td>
            <td className='text-center'><button className='delete-btn manage-btn' >Delete</button></td>
        </tr>
    );
};

export default ItemTable;