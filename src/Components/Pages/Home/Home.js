import React from 'react';
import InventoryItems from '../InventoryItems/InventoryItems';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;