import React, { useState } from 'react';
import './Customer.css';

const EditModal = ({ editData, onClose, onUpdate }) => {

    const [editedData, setEditedData] = useState(editData);
    // Error
    const [error, setError] = useState({});

    // Validation
    const validateValues = (name, email, phone) => {
        let error = {};
        if (name.trim() === '') {
            error.name = "Please enter your valid name...!";
        }
        if (email.trim() === '') {
            error.email = "Please enter email address...!";
        }
        if (phone.trim() === '') {
            error.phone = "Please enter phone number...!";
        }
        return error;
    };

    // Input onchange
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    }

    const handleUpdate = () => {
        const { name, email, phone } = editedData;
        const errors = validateValues(name, email, phone);

        if (name && email && phone !== "") {
            onUpdate(editedData);
            onClose();
        } else {
            setError(errors);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header"></div>
                <div className="modal-body">
                    <h2>Update Customer Details</h2>
                    <form>
                        <label>Update Customer name</label>
                        <input
                            type="text"
                            name='name'
                            value={editedData.name}
                            onChange={handleInputChange}
                        />
                        {error.name && <p className="error-message">{error.name}</p>}

                        <label>Update Email Address</label>
                        <input
                            type="email"
                            name='email'
                            value={editedData.email}
                            onChange={handleInputChange}
                        />
                        {error.email && <p className="error-message">{error.email}</p>}

                        <label>Update Phone Number</label>
                        <input
                            type="number"
                            name='phone'
                            value={editedData.phone}
                            onChange={handleInputChange}
                            placeholder='03XX-XXXX-XXX'
                        />
                        {error.phone && <p className="error-message">{error.phone}</p>}

                        <div className="modal-footer">
                            <button type="button" className='primary-button' onClick={handleUpdate}>
                                Update
                            </button>
                            <button className="close-button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
