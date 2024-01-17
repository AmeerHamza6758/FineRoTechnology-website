import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
const Signup = () => {

    const [error, setError] = useState({})
    const [userData, setUserData] = useState({
        fullName: '',
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.password.length < 6) {
            setError({ password: "Please Enter minimum 6 digits password" })
        } else if (userData.password !== userData.confirmPassword) {
            setError({ confirmPassword: "Your password is not matched" })
        } else {
            setError({ password: "", confirmPassword: "" })
            try {
                const id = await axios.get('http://localhost:3000/signup-user') 
                console.log("HEl")
                    .then(res => res.id.length+ 1)

                const response = await axios.post('http://localhost:3000/signup-user', {
                    id,
                    fullName: userData.fullName,
                    username: userData.username,
                    email: userData.email,
                    password: userData.password,
                    confirmPassword: userData.confirmPassword,
                    gender: userData.gender,
                });
                setUserData(response.data)
            } catch (err) {
                console.log("Error While Fetching Api", err);
            }
        }

    }

    return (
        <div className='sign-up-head'>
            <div className="sign-up">
                <div className="title">Registration</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your name"
                                    value={userData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    value={userData.username}
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={userData.email}
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Enter your number"
                                    value={userData.phoneNumber}
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={userData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                {error.password && <span className='error'>{error.password}</span>}

                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={userData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                                {error.confirmPassword && <span className='error'>{error.confirmPassword}</span>}
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" onChange={handleInputChange} />
                            <input type="radio" name="gender" id="dot-2" onChange={handleInputChange} />
                            <input type="radio" name="gender" id="dot-3" onChange={handleInputChange} />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
