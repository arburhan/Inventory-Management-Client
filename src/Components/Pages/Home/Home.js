import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import InventoryItems from '../InventoryItems/InventoryItems';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;