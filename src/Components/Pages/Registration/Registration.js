import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Registration = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    // registration hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let errorElement;

    const handaleFormSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        console.log('congratulations:)')
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const redirectLogin = () => {
        navigate('/login');

    }
    return (
        <div className='container-fluid w-75 mx-auto pt-5'>
            <h2 className="text-primary py-4 text-center">Register</h2>
            <Form onSubmit={handaleFormSubmit} className='text-center'>
                <div className='' >
                    <label className='d-block text-start' htmlFor="name">Name</label>
                    <input ref={nameRef} type="name" name="name" id="name" required />
                </div>
                <div className='py-3' >
                    <label className='d-block text-start' htmlFor="email">Email</label>
                    <input ref={emailRef} type="email" name="email" id="email" required />
                </div>
                <div className='' >
                    <label className='d-block text-start' htmlFor="password">Password</label>
                    <input ref={passwordRef} type="password" name="password" id="password" required />
                </div>
                <br />
                {errorElement}
                <div className='text-center'>
                    {/* <div className='mt-3'>
                        <input className='me-2 mb-3' onClick={() => { setAgree(!agree) }} type="checkbox" name="terms" id="terms" />
                        <label className={user ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept terms and conditions</label>
                    </div> */}
                    <div className=''>
                        {/* disabled={!agree} */}
                        <button className='btn submit-btn' type="submit">Register</button>
                    </div>
                </div>
            </Form>
            <div className='py-2 text-center'>
                Already have an account? <button onClick={redirectLogin} className='signup-redirect'>Please Login</button>
            </div>
            {/*  <SocialSign></SocialSign>
            <ToastContainer /> */}
        </div>
    );
};

export default Registration;