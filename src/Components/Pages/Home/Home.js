import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AllCategory from '../AllCategory/AllCategory';
import InventoryItems from '../InventoryItems/InventoryItems';
import StockUpdates from '../StockUpdates/StockUpdates';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <AllCategory></AllCategory>
            <StockUpdates></StockUpdates>
            <Footer></Footer>
        </div>
    );
};

export default Home;