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
    const handleFooterForm = e => {
        e.preventDefault();
    }
    return (
        <div className='bg-dark text-light'>
            <div className='parent-footer py-5 mx-5'>
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
                    <h4>AR Grocery</h4>
                    <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon-width" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Naogaon, Bangladesh
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon-width" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>+8801737509339
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon-width" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            arburhanar@gmail.com
                        </div>
                    </div>
                </div>
                <div className='text-center py-3 py-md-0'>
                    <form onSubmit={handleFooterForm}>
                        <input placeholder='email' style={{ width: '300px' }} className='footer-input' type="email" /> <br />
                        <input style={{ width: '200px', borderRadius: '45px' }} className='my-3' type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
            <div className='text-center'>
                Copyright © 2022 - All right reserved by <br />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon-width text-danger" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className='fw-bold'>AR Grocery</span>
            </div>
        </div>
    );
};

export default Footer;