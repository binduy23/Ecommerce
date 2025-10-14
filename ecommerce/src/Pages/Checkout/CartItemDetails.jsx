import { formatMoney } from "../../utils/Money";
import axios from 'axios';

export function CartItemDetails({ cartItem,loadCart }) {

    const deleteCartItem=(async()=>{
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    });

    const updateQuantity=(async()=>{
        await axios.put(`/api/cart-items/${cartItem.productId}`,{
            quantity:2
        });
        loadCart();
    });

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
                        Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary" onClick={updateQuantity}>
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