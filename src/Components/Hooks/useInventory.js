import { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://inventory-management-server-alpha.vercel.app/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    return [items, setItems];
};

export default useInventory;