import React from 'react';
import NotFoundImage from '../../../Images/sadface.gif';

const NotFound = () => {
    return (

        <div className='text-center '>
            <h2 className='text-danger pt-4'>404 Not Page Found</h2>
            <div>
                <img className='img-fluid' style={{ height: '70vh' }} src={NotFoundImage} alt="" />
            </div>
        </div>


    );
};

export default NotFound;