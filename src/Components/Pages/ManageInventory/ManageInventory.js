import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../Hooks/useInventory';
import ItemTable from './ItemTable/ItemTable';
import './ManageInventory.css';

const ManageInventory = () => {
    const navigate = useNavigate();
    const [items] = useInventory();
    const addNewItems = e => {
        navigate('/additem');


    }
    return (
        <div className='container py-2'>
            <h2 className='text-center py-4'>Manage All Items</h2>
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>Item id</th>
                        <th>Name</th>
                        <th>Update Product</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <ItemTable key={item._id} item={item}></ItemTable>)
                    }
                </tbody>
            </Table>
            <div className="text-center py-4">
                <button onClick={addNewItems} className="see-btn addNew-btn">Add New Items</button>
            </div>
        </div>
    );
};

export default ManageInventory;