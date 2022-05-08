import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import avatarImage from '../../../Images/user.png';
import './Footer.css';
const Footer = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='bg-dark text-light'>
            <div>
                <h3>Account</h3>
                {
                    !user ? <button className='footer-btn'>Login</button> : user.photoURL == null ? <img className='img-fluid top-img dropdown-toggle' src={avatarImage} alt="" /> : <img className='img-fluid top-img ' src={user.photoURL} alt="" />
                }
            </div>

        </div>
    );
};

export default Footer;