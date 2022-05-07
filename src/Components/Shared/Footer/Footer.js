import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Footer = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='bg-dark text-light'>
            <div>
                <h3>Account</h3>
                {
                    !user
                }
            </div>

        </div>
    );
};

export default Footer;