import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const redireBlogs = () => {
        navigate('/blogs');
    }
    const redirectLogin = () => {
        navigate('/login');
    }
    const redirectAbout = () => {
        navigate('/about');
    }
    return (
        <div className='bg-dark text-light'>
            <div>
                <div>
                    <h5 className='footer-link-text'>Useful Links</h5>
                    <div className=''>
                        <button onClick={redireBlogs} className='footer-btn'>Blogs</button>
                    </div>
                    <div className=''>
                        <button onClick={redirectLogin} className='footer-btn'>Login</button>
                    </div>
                    <div className=''>
                        <button onClick={redirectAbout} className='footer-btn'>About</button>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default Footer;