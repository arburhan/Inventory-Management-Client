import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    console.log(id);
    useEffect(() => {
        const url = `https://sheltered-citadel-07680.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    return (
        <div>
            <h2>Inventory {id}</h2>

        </div>
    );
};

export default Inventory;