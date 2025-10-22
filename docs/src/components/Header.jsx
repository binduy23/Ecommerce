import './Header.css';
import {NavLink} from 'react-router';
import CartIcon from '../assets/images/icons/cart-icon.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import {useState} from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router';

export function Header({cart}){

  
  const navigate=useNavigate();
  const [searchParams]=useSearchParams();
  const searchText=searchParams.get('search');
  const [search,updateSearch]=useState(searchText || '');
  
  let totalQuantity=0;
  cart.forEach((cartItem)=>{
    totalQuantity+=cartItem.quantity;
  });


  const handleChange=(event)=>{
    updateSearch(event.target.value);
  }

const handleSearchClick=(()=>{
  navigate(`/?search=${search}`);
})
    return (
        <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src="images/logo-white.png" />
          <img className="mobile-logo"
            src="images/mobile-logo-white.png" />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search"  onChange={handleChange}/>

        <button className="search-button" onClick={handleSearchClick}>
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
            </div>
    );
}