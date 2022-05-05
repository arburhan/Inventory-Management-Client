import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-citadel-07680.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    return [items, setItems];
};

export default useInventory;