import { formatMoney } from "../../utils/Money";
import axios from 'axios';
import './CheckoutPage.css';
import { useState } from "react";

export function CartItemDetails({ cartItem,loadCart }) {

    const [clicked,setClicked]=useState(false);
    const [newQuantity,setNewQuantity]=useState(cartItem.quantity);
    const deleteCartItem=(async()=>{
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    });


    const updateQuantity=(async()=>{
        
        if(clicked){
        await axios.put(`/api/cart-items/${cartItem.productId}`,{
            
            quantity:Number(newQuantity)
        });
        await loadCart();
        setClicked(!clicked);
    }
    else{
        setClicked(!clicked);
    }
    });

    const handleKeyDown=((event)=>{
        const keyPressed=event.key;
        if(keyPressed==='Enter'){
            updateQuantity();
        }
        else if(keyPressed==='Escape'){
            setNewQuantity(cartItem.quantity);
            setClicked(!clicked);
        }
    });

    const handleChange=((event)=>{
        setNewQuantity(event.target.value);
    })

    

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                
                <div className="product-quantity">
                    <span>
                        Quantity: <span className="quantity-label">{clicked ? (
                    
                <input type="text" className="quantity-update-text-box" value={newQuantity} onChange={handleChange} onKeyDown={handleKeyDown} />):`${cartItem.quantity}`}</span></span>
                    
                    <span className="update-quantity-link link-primary" onClick={updateQuantity} >
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}