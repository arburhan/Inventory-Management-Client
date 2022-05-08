import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import './Social.css';

const Social = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let errors;
    const googleSign = () => {
        signInWithGoogle();
    }
    if (googleUser) {
        navigate('/home');
    }
    if (googleError) {
        errors = googleError.message;
    }

    if (googleLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className='container my-4'>
                <div className='d-flex flex-row text-center justify-content-center align-items-center' >
                    <hr className='w-25' />
                    <p className='mt-2 px-3 fs-5'>or</p>
                    <hr className='w-25' />
                </div>
                <p className='text-danger text-center'>{errors}</p>
                <div className='text-center'>
                    <button onClick={googleSign} className='google-btn bg-transparent' >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Social;