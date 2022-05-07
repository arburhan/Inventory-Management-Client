import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../../Hooks/useInventory';
import ItemTable from './ItemTable/ItemTable';

const ManageInventory = () => {
    const [items] = useInventory();
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
        </div>
    );
};

export default ManageInventory;