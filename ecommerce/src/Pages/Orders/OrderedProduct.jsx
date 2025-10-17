import dayjs from "dayjs";
import { Fragment } from "react";
import { Link } from "react-router";
import axios from "axios";
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';



export function OrderedProduct({orderedProduct,loadCart,order}) {

    const addToCart=async()=> {
        await axios.post('/api/cart-items', {

            productId: orderedProduct.product.id,
            quantity: orderedProduct.quantity
        });
        await loadCart();
    };
    return (
        <Fragment>
            <div className="product-image-container">
                <img src={orderedProduct.product.image} />
            </div>

            <div className="product-details">
                <div className="product-name">
                    {orderedProduct.product.name}
                </div>
                <div className="product-delivery-date">
                    Arriving on: {dayjs(orderedProduct.product.estimatedDeliveryTimeMs).format('MMMM D')}
                </div>
                <div className="product-quantity">
                    Quantity: {orderedProduct.quantity}
                </div>
                <button className="buy-again-button button-primary">
                    <img className="buy-again-icon" src={BuyAgainIcon} />
                    <span className="buy-again-message" onClick={addToCart}>Add to Cart</span>
                </button>
            </div>

            <div className="product-actions">
                <Link to={`/tracking/${order.id}/${orderedProduct.product.id}`}>
                    <button className="track-package-button button-secondary">
                        Track package
                    </button>
                </Link>
            </div>
        </Fragment>
    );

}