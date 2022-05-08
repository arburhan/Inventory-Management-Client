import React from 'react';
import './Features.css';
import shippingImage from './Images/shipping.png';
import supportImage from './Images/support.png';
import securityImage from './Images/security.png';
const Features = () => {
    return (
        <div className='text-center my-5'>
            <div className='py-3'>
                <h2>Our Features</h2>
                <p>We offer various types of services to make our clients happy. Here are some of them.</p>
            </div>
            <div className='parent-feature-div'>
                <div className='service'>
                    <img className='img-fluid' src={shippingImage} alt="" />
                    <h3>Fast Delivery</h3>
                    <p>We are the only one who can guarantee you rocket speed shipping. It is too late for your order but our product is not too late to reach your door. We do shipping with aliens (lies).</p>
                </div>
                <div className='service'>
                    <img className='img-fluid' src={securityImage} alt="" />
                    <h3>Super Security</h3>
                    <p>The security of the world is nothing compared to what we have. We are the only one who provides high security of this universe (lies). Check now.</p>
                </div>
                <div className='service'>
                    <img className='img-fluid' src={supportImage} alt="" />
                    <h3>Uninterrupted support</h3>
                    <p>Every day there is no uninterrupted support session, only we provide this service to you. So what's the delay? Can't believe it? Check now. (lies).</p>
                </div>

            </div>
        </div>
    );
};

export default Features;