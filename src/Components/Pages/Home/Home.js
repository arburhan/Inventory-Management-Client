import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AllCategory from '../AllCategory/AllCategory';
import Features from '../Features/Features';
import HowStock from '../HowStock/HowStock';
import InventoryItems from '../InventoryItems/InventoryItems';
import StockUpdates from '../StockUpdates/StockUpdates';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <AllCategory></AllCategory>
            <HowStock></HowStock>
            <StockUpdates></StockUpdates>
            <Features></Features>
        </div>
    );
};

export default Home;