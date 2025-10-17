import {OrderedProduct} from'./OrderedProduct';

export function OrderDetails({ order, loadCart }) {
    return (
        <div className="order-details-grid" >
            {order.products.map((orderedProduct) => {
                    return (
                        <OrderedProduct key={orderedProduct.product.id} orderedProduct={orderedProduct} loadCart={loadCart} order={order} />
                    );
                })
            }                                                                                                                    
        </div >
    );
}