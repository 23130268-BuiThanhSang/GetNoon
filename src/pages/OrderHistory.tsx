import { useAppSelector } from "../redux/hooks";
import OrderMeal from "../components/OrderMeal";
import '../assets/scss/OrderHistory.css';
function OrderHistory() {
    const orders = useAppSelector((state) => state.orders.items);

    if (orders.length === 0) {
        return (
            <div>
                <h1>Order History</h1>
                <p>You haven't placed any orders yet.</p>
            </div>
        );
    }

    return (
        <div className="order-history">
            <h1>Order History</h1>

            {orders.map((order) => (
                <div className="order-history__order" key={order.id}>
                    <div className="order-history__header">
                        <div>
                            <h2>Order #{order.id}</h2>
                            <p>
                                {new Date(order.createdAt).toLocaleString()}
                            </p>
                        </div>

                        <span>{order.status}</span>
                    </div>

                    <div className="order-history__items">
                        {order.items.map((item, index) => (
                            <OrderMeal
                                key={`${order.id}-${item.mealId}-${index}`}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>

                    <div className="order-history__total">
                        <span>Total</span>
                        <strong>
                            {order.total.toLocaleString("vi-VN")} VND
                        </strong>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrderHistory;
