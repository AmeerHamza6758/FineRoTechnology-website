import React, { useState } from 'react';
import './Customer.css';
import axios from 'axios';
// import gif from '../../../../Assets/Images/loadergif.gif'
const Modal = ({ onClose, onAddCustomer }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    //Error
    const [error, setError] = useState({})

    //loader
    const[loader, setLoader]=useState("gif")

    const handleSubmit = async (event) => {
        // setLoader(true)
        event.preventDefault();
        console.log("Clicked");
        try {
            if (name && email && phone !== "") {
                const id = await axios.get('http://localhost:3000/customers')
                    .then(res => res.data.length + 1)

                const response = await axios.post('http://localhost:3000/customers', {
                    id: id,
                    name: name,
                    email: email,
                    phone: phone,
                });
                console.log("Response:", response.data);
                onAddCustomer(response.data);
                onClose();
            }
            else {
                setError(validateValues(name, email, phone));
            }
        } catch (error) {
            console.log("Form submittion error",error.response);
       }
    //    setLoader(false)
    };

    //Validation
    const validateValues = (name, email, phone) => {
        let error = {}
        if (name.trim() === '') {
            error.name = "Please enter your valid name...!"
        }
        if (email.trim() === '') {
            error.email = "Please enter email address...!"
        }
        if (phone.trim() === '') {
            error.phone = "Please enter phone number...!"
        }
        return error;
    }

    const handleCancel = () => {
        // Clear input fields and close the modal
        setName('');
        setEmail('');
        setPhone('');
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <h2>Add Customer Details</h2>

                        <label>Enter Customer name</label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Full Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        {error.name && <p className="error-message">{error.name}</p>}
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="E-mail address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error.email && <p className="error-message">{error.email}</p>}

                        <label>Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            placeholder="03xx-xxxx-xxx"
                            onChange={(e) => setPhone(e.target.value)}
                        // pattern="[0-9]{4}-[0-9]{4}-[0-9]{3}"
                        />
                        {error.phone && <p className="error-message">{error.phone}</p>}

                        <div className="modal-footer">
                            <button type="submit" className="primary-button">
                                Submit
                            </button>
                            <button type="button" className="close-button" onClick={handleCancel}>
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
