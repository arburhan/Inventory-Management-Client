import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {
        const filterItem = async () => {
            const url = ` https://sheltered-citadel-07680.herokuapp.com/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        filterItem();
    }, [user])

    return (
        <div>
            <h2>Your Items {items.length} </h2>

        </div>
    );
};

export default MyItems;