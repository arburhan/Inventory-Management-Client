import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory/SingleCategory';
import './AllCategory.css';

const AllCategory = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);
    useEffect(() => {
        const allCategories = async () => {
            const url = `https://sheltered-citadel-07680.herokuapp.com/allcategory`;
            const { data } = await axios.get(url);
            setCategories(data)
        }
        allCategories();
    }, [])
    return (
        <div className='py-4 container'>
            <h2 className='text-center py-3'>All Products Category</h2>
            <div className='category-parent'>
                {
                    categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default AllCategory;