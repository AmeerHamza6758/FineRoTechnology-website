import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import TopLeft from './adminpanel/leftSide/TopLeft';
import AddProducts from './adminpanel/leftSide/pages/addProducts/AddProducts';
import Analytics from './adminpanel/leftSide/pages/Analytics';
import Messages from './adminpanel/leftSide/pages/Messages';
import Products from './adminpanel/leftSide/pages/Products';
import Reports from './adminpanel/leftSide/pages/Reports';
import Setting from './adminpanel/leftSide/pages/Setting';
import TopDashboard from './adminpanel/middleSide/TopDashboard';
import AddCustomer from './adminpanel/leftSide/pages/customerData/AddCustomer';
import Home from './frontend/Home';
import ContactForm from './frontend/contactPage/ContactForm';
import Login from './frontend/loginForm/Login';
import Signup from './frontend/signUp/Signup';
import Navbar from './frontend/Navbar';
import Cards from './frontend/cards/Cards';

function App() {
  const [color, setColor] = useState(true);
  const themeToggle = () => {
    setColor(!color);
    console.log("Color Function");
  };

  return (
    <Routes>
      <Route
        path="/admin/*"
        element={
          <div className={`AdminPanel ${color ? "" : "dark"}`}>
            <TopLeft />
            <Routes>
              <Route 
                path='topdashboard'
                element={<TopDashboard themeToggle={themeToggle} />}>
                <Route path="addcustomer" element={<AddCustomer />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="messages" element={<Messages />} />
                <Route path="Products" element={<Products />} />
                <Route path="reports" element={<Reports />} />
                <Route path="setting" element={<Setting />} />
                <Route path="addproducts" element={<AddProducts />} />
              </Route>
            </Routes>
          </div>
        }
      />
      <Route
        path="/*"
        element={
          <>
            
            <Routes>
              <Route path='/' element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="contact" element={<ContactForm />} />
                <Route path="product" element={<Cards />} />
              </Route>
            </Routes>
          </>
        }
      />
    </Routes>
  );
}

export default App;
