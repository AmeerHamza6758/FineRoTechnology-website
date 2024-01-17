import React from 'react';

const UploadProducts = () => {

    

    return (
        <div className='products-header'>
            <div className='upload-products'>
                <h2>Add Products</h2> <br/>
                <div className='content'>
                    <form>
                        <div className='product-details'>
                            <div className='input-box'>
                                <strong>Product Name</strong>
                                <input type='text' placeholder='Products Name' />
                            </div>

                            <div className='input-box'>
                                <strong>Title</strong>
                                <input type='text' placeholder='Product title' />
                            </div>

                            <div className='input-box'>
                                <strong>Description</strong>
                                <input type='textarea' placeholder='Description' />
                            </div>

                            <div className='input-box'>
                                <strong>Cost</strong>
                                <input type='number' placeholder='$Cost' />
                            </div>
                            <div className='input-box'>
                                <strong>Price</strong>
                                <input type='number' placeholder='Price' />
                            </div>
                            <div className='input-box-file'>
                                <input type='file' />
                            </div>

                            <div className='input-buttons'>
                                <button>Cancel</button>
                                <button>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default UploadProducts;
