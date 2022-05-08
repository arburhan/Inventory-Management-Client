import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const redirectHome = () => {
        navigate('/home');
    }
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
                <h5>Useful Links</h5>
                <div>
                    <button onClick={redirectHome} className='footer-btn'>Home</button>
                </div>
                <div>
                    <button onClick={redireBlogs} className='footer-btn'>Blogs</button>
                </div>
                <div>
                    <button onClick={redirectLogin} className='footer-btn'>Login</button>
                </div>
                <div>
                    <button onClick={redirectAbout} className='footer-btn'>About</button>
                </div>
            </div>

        </div>
    );
};

export default Footer;