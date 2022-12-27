import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ItemTable from '../ManageInventory/ItemTable/ItemTable';
import Table from 'react-bootstrap/Table'
import auth from '../../../firebase.init';


const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {
        const filterItem = async () => {
            const url = ` https://inventory-management-server.onrender.com/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        filterItem();
    }, [items, email])

    return (
        <div className='container-fluid py-3'>
            <h2 className='text-center py-3'>Your Items Totaly:  {items.length} </h2>
            <div className=''>
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

        </div>
    );
};

export default MyItems;