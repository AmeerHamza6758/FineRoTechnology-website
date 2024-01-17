CRUD

//import React, { useEffect, useState } from 'react';
import axios from 'axios';
import'./AddCustomer.css';

const AddCustomer = () => {
    const [data, setData] = useState([]);
    //Form Data
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [edit, setEdit] = useState(-1)
    //Update STate
    const [uname, setUname] = useState('')
    const [uemail, setUemail] = useState('')
    const [uphone, setUphone] = useState('')

    // Get Data from API
    useEffect(() => {
        axios.get("http://localhost:3000/customers")
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    // Handle Form Submission Post data in DB
    const handleSubmit = (event) => {
        const id = data.id + 1
        event.preventDefault();
        axios.post("http://localhost:3000/customers", { id: id, name: name, email: email, phone: phone })
            .then(res => {
                // location.reload();
            })
            .catch(err => console.error(err));

        // Add logic to handle form submission (e.g., axios.post())
    };

    //EDIT BUTTON
    const handleEdit = (id) => {
        axios.get("http://localhost:3000/customers/" + id)
            .then(res => {
                setUname(res.data.name)
                setUemail(res.data.email)
                setUphone(res.data.phone)
            })
    }

    //UPDATE BUTTON
    const handleUpdate = (id) => {
        axios.put("http://localhost:3000/customers/" + edit, { id: edit, name: uname, email: uemail, phone: uphone })
            .then(res => {
                // location.reload();
                setEdit(-1)
            })
            .catch(err => console.log(err))
    }

    //DELETE DATA
    const handleDelete=(id)=>{
        axios.get("http://localhost:3000/customers/" + id)
        .then(res => {
        //    location.reload()
        })

    }
    return (
        <div className='container'>
            {/* Adding Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" placeholder='Enter your Name' required onChange={e => setName(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label>E-mail</label>
                    <input type="email" name="email" placeholder='Enter your Email' required onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="number" name="phone" placeholder='Enter your Phone' required onChange={e => setPhone(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>

            <table className='table'>
                <thead className='table-head'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((customer, index) => (
                        customer.id === edit ?
                            <tr>
                                <td>{customer.id}</td>
                                <td><input type="text" value={customer.name} onChange={e => setName(e.target.value)} /></td>
                                <td><input type="text" value={customer.email} onChange={e => setEmail(e.target.value)} /></td>
                                <td><button onClick={handleUpdate}>Update</button></td>
                            </tr>
                            :
                            <tr key={index}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>
                                    <button onClick={() => handleEdit(customer.id)}>Edit</button>
                                    <button onClick={() =>handleDelete(customer.id)}>Delete</button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddCustomer;
