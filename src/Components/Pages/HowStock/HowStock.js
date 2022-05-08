import React from 'react';
import stockImage from './stockStep.webp';
import './HowStock.css';

const HowStock = () => {
    const howStockHandle = () => {
        window.open('https://www.wikihow.com/Stock-Grocery-Shelves');
    }
    return (
        <div className='py-3'>
            <h2 className='text-center'>How We Stock !</h2>
            <div className='how-stock-parent pb-4'>
                <div className='px-2 px-md-4 text-center text-md-start'>
                    <h5 className='stock-text'>In our gorcery we stock the product in several steps. First of all we supply fresh, formalin free, daily produced products to the farmers. Then we clean them better by machine and pack the packets in a healthy way and bring them to gorcery. However we try not to stock excess products so that the product becomes stale.</h5>
                    <div className=''>
                        <button onClick={howStockHandle} className='monitor-btn'>Monitor Steps</button>
                    </div>
                </div>
                <div className='img-div-stock'>
                    <img className='img-fluid' src={stockImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default HowStock;