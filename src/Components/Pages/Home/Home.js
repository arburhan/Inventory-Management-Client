import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AllCategory from '../AllCategory/AllCategory';
import InventoryItems from '../InventoryItems/InventoryItems';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <AllCategory></AllCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;