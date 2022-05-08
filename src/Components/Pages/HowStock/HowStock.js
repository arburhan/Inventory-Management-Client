import React from 'react';
import stockImage from './stockStep.webp';
import './HowStock.css';

const HowStock = () => {
    return (
        <div className='py-5'>
            <h2 className='text-center'>How We Stock !</h2>
            <div className='how-stock-parent'>
                <div className='px-4'>
                    <h5 className='stock-text'>In our gorcery we stock the product in several steps. First of all we supply fresh, formalin free, daily produced products to the farmers. Then we clean them better by machine and pack the packets in a healthy way and bring them to gorcery. However we try not to stock excess products so that the product becomes stale.</h5>
                    <div>
                        <button className='monitor-btn'>Monitor Steps</button>
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