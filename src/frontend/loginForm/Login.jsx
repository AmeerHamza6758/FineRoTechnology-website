import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // remember: true,
    });

    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (formData.email === '' || formData.email === null) {
            isValid = false;
            validationErrors.email = 'Email Required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            validationErrors.email = 'Email is not Valid';
        }

        if (!formData.password) {
            isValid = false;
            validationErrors.password = 'Password required';
        } else if (formData.password.length < 6) {
            isValid = false;
            validationErrors.password = 'Password length should be at least 6 characters';
        }

        try {
            const response = await axios.get('http://localhost:3000/admin');
            const user = response.data.find((user) => user.email === formData.email);

            if (user) {
                if (user.password === formData.password) {
                    alert('Login Successfully');
                    navigate('login');
                } else {
                    isValid = false;
                    validationErrors.password = 'Wrong password';
                }
            } else {
                isValid = false;
                validationErrors.email = 'User not found';
            }
        } catch (err) {
            console.log(err);
        }

        setErrors(validationErrors);
        setValid(isValid);
    };

    return (
        <div className='form-parent'>
            <div className='sign-in-form'>
                <h1>Please Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-fields'>
                        <input
                            className='input-fields'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />

                        {errors.email && <span className='error'>{errors.email}</span>}

                        <input
                            className='input-fields'
                            type='password'
                            name='password'
                            placeholder='Enter valid password'
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        {errors.password && <span className='error'>{errors.password}</span>}
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className='form-button'>
                        <button type='submit'>Sign In</button>
                    </div>
                </form>
                <div>
                    Don't have an account? <Link to='login'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
