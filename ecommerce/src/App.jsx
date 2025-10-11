import {Routes,Route} from 'react-router';
import { HomePage } from './Pages/HomePage';
import { useState,useEffect } from 'react';
import { CheckoutPage } from './Pages/Checkout/CheckoutPage';
import { OrdersPage } from './Pages/OrdersPage';
import axios from 'axios';
import './App.css'
import { TrackingPage } from './Pages/TrackingPage';
import { ErrorPage } from './Pages/ErrorPage';



function App() {

  const [cart,setCart]=useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
    .then((response)=>{
      setCart(response.data);
    });
  },[])
  
  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="/checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="/orders" element={<OrdersPage cart={cart}/>} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
    
  )
}

export default App
