import {useAppSelector} from "../redux/Hooks/hooks.tsx";

function CartItemSummary() {
    const cartItems = useAppSelector((state) => state.cart.items);

    const selectedItems = cartItems.filter((item) => item.selected);

    const totalPrice = selectedItems.reduce(
        (total, item) => total + item.meal.price * item.quantity,
        0
    );

    return (
        <div>
            {selectedItems.length === 0 ? (
                <p>No items selected.</p>
            ) : (
                <div className="cart__summary-list">
                    {selectedItems.map((item) => (
                        <div className="cart__summary-item" key={item.cartItemId}>
                            <img
                                className="cart__summary-image"
                                src={item.meal.image}
                                alt={item.meal.name}
                            />

                            <div className="cart__summary-info">
                                <h4>{item.meal.name}</h4>
                                <span>Số phần: {item.quantity}</span>
                                <strong>
                                    {(item.meal.price * item.quantity).toLocaleString("vi-VN")} VND
                                </strong>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="cart__summary-total">
                <span>Tổng tiền</span>
                <strong>{totalPrice.toLocaleString("vi-VN")} VND</strong>
            </div>
        </div>
    );
}

export default CartItemSummary;