import React, { useState } from 'react';
import './ContactForm.css'
const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <div className='contact-head'>
            <div className='contact_us'>
                <div className='contact_details'>
                    <h1>Get in Touch:</h1>
                    <strong>Fill the form to start a conversation</strong> <br />
                    <div className='contact-address'>
                        <span> <i className="ri-map-pin-fill"></i>   Khanpur adda, near Attock petrol pump, Ramihyar Khan</span> <br />
                        <span> <i className="ri-whatsapp-fill"></i>  +92304-7533-611</span> <br />
                        <span> <i className="ri-mail-add-fill"></i>   ameerhamzag75@gmail.com</span> <br />
                    </div>
                </div>
                <div>
                    <form className='form_elements'>
                        <strong htmlFor="fname">Full name:</strong><br />
                        <input type="text" id="fname" name="fname" value={name} placeholder='Enter Full name' required onChange={(e) => { setName(e.target.value) }} /><br />
                        <strong htmlFor="lname"> E-mail:</strong><br />
                        <input type="email" id="lname" name="lname" value={email} placeholder='Enter Email' required onChange={(e) => { setEmail(e.target.value) }} /><br />

                        <strong htmlFor="number">Telephone:</strong><br />
                        <input type='number' id="number" placeholder="+92xxx-xxxx-xxx" value={phone} onChange={(e) => { setPhone(e.target.value) }} /> <br />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactForm;
