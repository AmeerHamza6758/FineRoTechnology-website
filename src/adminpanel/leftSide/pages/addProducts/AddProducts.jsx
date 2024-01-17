import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './Products.css';

const AddProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  //Getting products from api
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProductsData(response.data);
      setFiltered(response.data);
    } catch (err) {
      console.log("Products fetching error", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const result = productsData.filter((item) =>
      item.productName.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, productsData]);


  //Delete Products
  const productDelete = (id) => {
    try {
      axios.delete(`http://localhost:3000/products/${id}`)
      setProductsData(productsData.filter((product) => product.id !== id))
    } catch (err) {
      console.log(err);
    }

  }

  const columns = [
    {
      name: 'Product Name',
      selector: 'productName',
      sortable: true,
      // cell: (row) => <input type="checkbox"  />,
    },
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
    },
    {
      name: '$Price',
      selector: (row) => row.price,
    },
    {
      name: '$Cost',
      selector: (row) => row.price,
    },
    {
      name: 'Product Images',
      selector: 'images',
      cell: (row) => <img width={80} height={50} src={row.images} alt={`Product Image ${row.images}`} />,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <button className='icon-edit'><span class="material-symbols-outlined">
            edit_note
          </span></button>
          <button className='icon-delete' onClick={productDelete}><span class="material-symbols-outlined">
            delete_forever
          </span></button>
        </div>
      ),
    },
  ];

  return (
    <div className='datatable-products'>
      <br />
      <div className='heaer-search'>
        <h2>Products List</h2>
        <input
          className='btn-search'
          type='text'
          placeholder='Search here'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='icon-export'><span class="material-symbols-outlined">add_circle</span></button>
      </div>
      <DataTable
        // title='PRODUCT LIST'
        columns={columns}
        data={filtered}
        pagination
        selectableRows
        onSelectedRowsChange={({ selectedRows }) => console.log('Selected rows:', selectedRows)}
        highlightOnHover
        fixedHeader
      // actions
      // subHeader

      />
    </div>
  );
};

export default AddProducts;
