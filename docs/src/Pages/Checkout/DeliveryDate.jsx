import dayjs from "dayjs";

export function DeliveryDate({deliveryOptions,cartItem}) {
    const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
        return deliveryOption.id === cartItem.productId;
    });
    return (
        <div className="delivery-date">
            Delivery date: {dayjs(selectedDeliveryOption).format('dddd, MMMM D')}
        </div>
    );
}