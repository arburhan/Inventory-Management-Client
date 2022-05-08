import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../../Shared/Social/Social';

const Registration = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [agree, setAgree] = useState();

    // registration hooks
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, verifySending, verifyError] = useSendEmailVerification(auth);

    const handaleFormSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (agree) {
            toast('verify mail sent. Please verify.');
            toast('After verify . Please login.');
            await sendEmailVerification(email);
            await createUserWithEmailAndPassword(email, password);
            setTimeout(() => {
                navigate('/login');
            }, 5000);
        }
        if (loading || verifySending) {
            return <Loading></Loading>
        }
    }

    if (error || verifyError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {verifyError?.message}</p>
    }
    const redirectLogin = () => {
        navigate('/login');
    }
    return (
        <div className='container-fluid w-75 mx-auto pt-5'>
            <h2 className="text-primary text-center">Register</h2>
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
                    <div className='mt-3'>
                        <input className='me-2 mb-3' onClick={() => { setAgree(!agree) }} type="checkbox" name="terms" id="terms" />
                        <label className={user ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept terms and conditions</label>
                    </div>
                    <div className=''>
                        <button disabled={!agree} className='btn submit-btn' type="submit">Register</button>
                    </div>
                </div>
            </Form>
            <div className='py-2 text-center mt-3'>
                Already have an account? <button onClick={redirectLogin} className='signup-redirect'>Please Login</button>
            </div>
            <Social></Social>
        </div>
    );
};

export default Registration;