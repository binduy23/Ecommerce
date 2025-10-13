import {Routes,Route} from 'react-router';
import { HomePage } from './Pages/Home/HomePage';
import { useState,useEffect } from 'react';
import { CheckoutPage } from './Pages/Checkout/CheckoutPage';
import { OrdersPage } from './Pages/Orders/OrdersPage.jsx';
import axios from 'axios';
import './App.css'
import { TrackingPage } from './Pages/TrackingPage';
import { ErrorPage } from './Pages/ErrorPage';



function App() {

  const [cart,setCart]=useState([]);

  const loadCart=(async()=>{
      const response=await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    });

  useEffect(()=>{
    
    loadCart();
  },[])
  
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="/orders" element={<OrdersPage cart={cart}/>} />
      <Route path="/tracking/:orderId/:productId" element={<TrackingPage cart={cart}/>} />
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
    
  )
}

export default App
