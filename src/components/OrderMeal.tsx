import '../assets/scss/OrderMeal.css';

type OrderMealProps = {
    name: string;
    image: string;
    price: number;
    quantity: number;
};

function OrderMeal({ name, image, price, quantity }: OrderMealProps) {
    return (
        <div className="order-meal">
            <img
                className="order-meal__image"
                src={image}
                alt={name}
            />

            <div className="order-meal__info">
                <h3 className="order-meal__name">{name}</h3>

                <p className="order-meal__price">
                    {price.toLocaleString("vi-VN")} VND
                </p>
            </div>

            <div className="order-meal__quantity">
                <span>Qty</span>
                <strong>{quantity}</strong>
            </div>
        </div>
    );
}

export default OrderMeal;
