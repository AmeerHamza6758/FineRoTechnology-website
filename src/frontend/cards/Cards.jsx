import React from 'react';
import { cardData } from '../Data';
import { Link } from 'react-router-dom';
import './Cards.css';
function Cards() {
    return (
        <>
            
            <div className='card-head'>
                <h1 className='products-heading'>Explore Products</h1>
                <div className='products'>
                    {cardData.map((item, index) => (
                        <div key={index} className='products-cards'>
                            <div className="card-items">
                                <img src={item.img} className="card-img-top" alt="Product Image" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.tittle}</h5>
                                    <p>{item.description}</p>
                                    <Link to="#" className="card-btn" style={{ backgroundColor: "", color: "white", border: "none" }}>
                                        {item.button}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
            </div>
        </>
    );
}

export default Cards;
