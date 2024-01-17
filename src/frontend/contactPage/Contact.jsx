import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-left'>
                <h1>Feel free to contact us!</h1>
                <span>China Top 3 Water Filter Manufacturer</span> <br /><br />
                <p>Welcome to visit our website. Subscribe to our website, we will not only provide awesome discounts, but also share the information of the most popular products in the market.
                </p>
            </div>

            <div className='contact-right'>
                <div className='contact-input1'>
                    <input type='text' placeholder='Your Name' />
                    <input type='text' placeholder='* Your Email' />
                </div>
                <textarea placeholder='* Please enter your inquiry details' />
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Contact;
