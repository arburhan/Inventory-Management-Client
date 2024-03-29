import React, { useState } from 'react';
import SingleCategory from './SingleCategory/SingleCategory';
import './AllCategory.css';

const AllCategory = () => {
    const [categories, setCategories] = useState([]);

    fetch(`https://inventory-management-server-alpha.vercel.app/allcategory`, {
        method: 'GET',
    })
        .then(res => res.json()
            .then(data => setCategories(data))
        )

    return (
        <div className='py-4 container'>
            <div className='text-center my-5'>
                <h2>All Products Category</h2>
                <p className='pt-1'>Tap on the category to show its product. This feature will be added very quickly.</p>
            </div>
            <div className='category-parent my-5'>
                {
                    categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default AllCategory;