import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../../Shared/Social/Social';
import './Login.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;
    const handleLogIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        if (user) {
            navigate(from, { replace: true });
            console.log('congrats');
        }
        if (loading) {
            return <Loading></Loading>
        }
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    // toggle regisration
    const redirectRegister = () => {
        navigate('/register');
    }
    const forgetPassword = () => {
        navigate('/resetpassword');
    }

    return (
        <div>
            <div className='container-fluid w-75 mx-auto pt-5'>
                <h2 className="text-primary py-4 text-center fs-1">Log in</h2>
                <Form onSubmit={handleLogIn} className='text-center'>
                    <div className='' >
                        <label className='d-block text-start' htmlFor="email">Email</label>
                        <input ref={emailRef} type="email" name="email" id="email" required />
                    </div>
                    <div className='py-3' >
                        <label className='d-block text-start' htmlFor="password">Password</label>
                        <input ref={passwordRef} type="password" name="password" id="password" required />
                    </div>
                    {errorElement}
                    <div className=''>
                        <button type='submit' className='btn submit-btn'>Login</button>
                    </div>
                </Form>
                <div className='text-center py-3 mt-2'>
                    <div>
                        New on Inventory Management? <button onClick={redirectRegister} className='signup-redirect'>Please Register</button>
                    </div>
                    <div className='mt-3'>
                        Forget password? <button onClick={forgetPassword} className='signup-redirect text-danger'>Reset Here</button>
                    </div>
                </div>
                {/* <ToastContainer /> */}
                <Social></Social>
            </div>
        </div>
    );
};

export default Login;