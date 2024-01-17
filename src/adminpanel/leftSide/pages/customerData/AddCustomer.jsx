import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './Customer.css';
import Modal from './Modal';
import EditModal from './EditModal';
import Button from 'react-bootstrap/Button';

const AddCustomer = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [editData, setEditData] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);

    const getdata = async () => {
        try {
            const response = await axios.get('http://localhost:3000/customers');
            setData(response.data);
            setFiltered(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    useEffect(() => {
        const result = data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setFiltered(result);
    }, [search, data]);

    const handleAddCustomer = (newCustomer) => {
        setData([...data, newCustomer]);
    };

    const handleCloseModal = () => {
        setshowModal(false);
    };

    const handleShowModal = () => {
        setshowModal(true);
    };

    // Edit data
    const handleEdit = (id) => {
        try {
            axios.get(`http://localhost:3000/customers/${id}`)
                .then((response) => {
                    setEditData(response.data);
                    setShowEditModal(true);
                });
        }
        catch (err) {
            console.log("Error fetching customer data for editing");
        }
    };

    //Updated
    const handleUpdate = (updatedData) => {
        if (updatedData.name && updatedData.email && updatedData.phone !== '') {
            axios.put(`http://localhost:3000/customers/${updatedData.id}`, updatedData)
                .then(() => {
                    setData(data.map((customer) => (customer.id === updatedData.id ? updatedData : customer)));
                    setShowEditModal(false);
                })
                .catch((err) => {
                    console.log("Error updating customer:", err);
                })
        }
        else {
            console.log("error");
        }
    };

    // Delete Data
    const handleDelete = (id) => {
        const confirmDelete = window.confirm( "Would you like to delete?");
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/customers/${id}`)
                .then(() => {
                    setData(data.filter((customer) => customer.id !== id));
                })
                .catch((err) => {
                    console.log("Error deleting customer:", err);
                });
        }
    };

    const columns = [
        {
            name: 'Customer Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'E-mail Address',
            selector: (row) => row.email,
        },
        {
            name: 'Phone number',
            selector: (row) => row.phone,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div>
                    <Button className='btn-edit'  onClick={() => handleEdit(row.id)}>Edit</Button>
                    <button className='btn-delete' onClick={() => handleDelete(row.id)}>Delete</button>
                </div>
            ),
        },
    ];

    return (
        <div className='datatble-head'>
        <div className='datatable'>
            <DataTable
                title='Customers list'
                columns={columns}
                data={filtered}
                pagination
                selectableRows
                highlightOnHover
                fixedHeader
                actions
                subHeader
                subHeaderComponent={
                    <div className='heaer-search'>
                        <input
                            className='btn-search'
                            type='text'
                            placeholder='Search here'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <button className='btn-export' onClick={handleShowModal}>
                            ADD Customer
                        </button>
                    </div>
                    
                }
            />

            {showModal && (
                <Modal onClose={handleCloseModal} onAddCustomer={handleAddCustomer} />
            )}

            {showEditModal && (
                <EditModal
                    editData={editData}
                    onClose={() => setShowEditModal(false)}
                    onUpdate={handleUpdate}
                                   />
            )}
        </div>
        </div>
    );
};

export default AddCustomer;
