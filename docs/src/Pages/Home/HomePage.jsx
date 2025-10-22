import axios from 'axios';
import {Header} from '../../components/Header.jsx';
import './HomePage.css';
import {useSearchParams} from 'react-router';
import { useEffect,useState } from 'react';
import { ProductsGrid } from './ProductsGrid.jsx';

export function HomePage({cart,loadCart}) {

  const [products,setProducts]=useState([]);
  const [searchParams]=useSearchParams();
  console.log(searchParams);
  const search=searchParams.get('search');
console.log(search);

  useEffect(()=>{
    const getHomeData=(async()=>{
      const urlPath=search?`/api/products?search=${search}`:'/api/products';
      const response=await axios.get(urlPath);
      setProducts(response.data);
    })
    getHomeData();
    
  },[search]);

  return (
    <>
      <title>ecommerce</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}