import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import './Login.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleLogIn = e => {
        e.preventDefault();
    }

    return (
        <div>
            <div className='container-fluid w-75 mx-auto pt-5'>
                <h2 className="text-primary py-4 text-center">Login</h2>
                <Form onSubmit={handleLogIn} className='text-center'>
                    <div className='' >
                        <label className='d-block text-start' htmlFor="email">Email</label>
                        <input ref={emailRef} type="email" name="email" id="email" required />
                    </div>
                    <div className='py-3' >
                        <label className='d-block text-start' htmlFor="password">Password</label>
                        <input ref={passwordRef} type="password" name="password" id="password" required />
                    </div>
                    {'errorElement'}
                    <div className=''>
                        <button type='submit' className='btn submit-btn'>Login</button>
                    </div>
                </Form>
                <div className='text-center py-3'>
                    <div>
                        New on Inventory Management? <button onClick={'redirectRegister'} className='signup-redirect'>Please Register</button>
                    </div>
                    <div>
                        Forget password? <button onClick={'forgetPassword'} className='signup-redirect text-danger'>Reset Here</button>
                    </div>
                </div>
                {/* <ToastContainer />
                <SocialSign></SocialSign> */}
            </div>
        </div>
    );
};

export default Login;