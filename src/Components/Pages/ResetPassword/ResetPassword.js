import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const ResetPassword = () => {
    const emailRef = useRef();
    const navigate = useNavigate();
    let errorElement;
    const [sendPasswordResetEmail, sending, errorPassReset] = useSendPasswordResetEmail(auth);
    const handleReset = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
    }
    if (sending) {
        return <Loading></Loading>
    }
    if (errorPassReset) {
        errorElement = <p className='text-danger'>Error: {errorPassReset?.message}</p>
    }
    return (
        <div className='container mx-auto w-75 py-5'>
            <h3 className='text-center py-4'>Please enter your email for reset password</h3>
            <Form onSubmit={handleReset} className='text-center'>
                <div className='' >
                    <label className='d-block text-start ps-2' htmlFor="email">Email</label>
                    <input ref={emailRef} type="email" name="email" id="email" required />
                </div>
                <br />
                {errorElement}
                <div className=''>
                    <button type='submit' className='btn submit-btn'>Send Reset Mail</button>
                </div>
            </Form>

        </div>
    );
};

export default ResetPassword;