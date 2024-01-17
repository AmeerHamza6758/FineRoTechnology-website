// TopLeft.js
import React, { useState } from 'react';
import './TopLeft.css';
import { Link,Outlet } from 'react-router-dom';

function TopLeft() {

    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    //Active
    const [activeItem, setActiveItem] = useState('Dashboard');
    const handleActive = (item) => {
        setActiveItem(item === activeItem ? item : item)
    }
    return (
        <aside>
            {open ? (
                <div>
                    <div className='top'>
                        <div className='logo'>
                            <h2>Fine <span>RO</span> Tech</h2>
                        </div>
                        <div onClick={handleClick}>
                            <span className="material-symbols-outlined">close</span>
                        </div>
                    </div>
                    <div className='sidebar'>
                        <Link to='topdashboard' className={activeItem === 'Dashboard' ? 'active' : ''}
                            onClick={() => handleActive('Dashboard')}>
                            <span className="material-symbols-outlined">grid_view</span>
                            <h3>Dashboard</h3>
                        </Link>
                        <Link to='addCustomer'  className={activeItem === 'Customers' ? 'active' : ''}
                            onClick={() => handleActive('Customers')}>
                            <span className="material-symbols-outlined">person_outline</span>
                            <h3>Customers</h3>
                        </Link>
                        <Link to='analytics'  className={activeItem === 'Analytics' ? 'active' : ''}
                            onClick={() => handleActive('Analytics')}>
                            <span className="material-symbols-outlined">trending_up</span>
                            <h3>Analytics</h3>
                        </Link>
                        <Link to='messages' className={activeItem === 'Messages' ? 'active' : ''}
                            onClick={() => handleActive('Messages')}>
                            <span className="material-symbols-outlined">mail_outline</span>
                            <h3>Messages</h3>
                            <span className="msg_count">14</span>
                        </Link>
                        <Link to='products' className={activeItem === 'Products' ? 'active' : ''}
                            onClick={() => handleActive('Products')}>
                            <span className="material-symbols-outlined">receipt_long</span>
                            <h3>Products</h3>
                        </Link>
                        <Link to='reports' className={activeItem === 'Reports' ? 'active' : ''}
                            onClick={() => handleActive('Reports')}>
                            <span className="material-symbols-outlined">report_gmailerrorred</span>
                            <h3>Reports</h3>
                        </Link>
                        <Link to='setting' className={activeItem === 'Settings' ? 'active' : ''}
                            onClick={() => handleActive('Settings')}>
                            <span className="material-symbols-outlined">settings</span>
                            <h3>Settings</h3>
                        </Link>
                        <Link to='addproducts' className={activeItem === 'Add Products' ? 'active' : ''}
                            onClick={() => handleActive('Add Products')}>
                            <span className="material-symbols-outlined">add</span>
                            <h3>Add Products</h3>
                        </Link>
                        <Link to='/adminlogin'>
                            <span className="material-symbols-outlined">logout</span>
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='close-btn'>
                <button className="close" id="menu_bar" onClick={handleClick}>
                    <span className="material-symbols-outlined">menu</span>
                </button></div>
            )}
          {/* <Outlet/> */}
        </aside>
    );
}

export default TopLeft;
