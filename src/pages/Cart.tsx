import { useAppDispatch, useAppSelector } from "../redux/Hooks/hooks";
import {
    toggleSelection,
    updateQuantity,
    removeFromCart, addToCart
} from "../redux/slices/cartSlice";
import '../assets/scss/cart.css';
import {useEffect} from "react";

function Cart() {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);
    const selectedItems = cartItems.filter((item) => item.selected);
    const totalPrice = selectedItems.reduce(
        (total, item) => total + item.meal.price * item.quantity,
        0
    );
    //////////////////////////
    const testMeal = useAppSelector((state) => state.meals.items[1]);
    useEffect(() => {
        if (testMeal) {
            dispatch(addToCart({
                cartItemId: crypto.randomUUID(),
                meal: testMeal,
                quantity: 2,
                selected: true
            }));
        }
    }, [testMeal, dispatch]);
    //////////////////////

    if (cartItems.length === 0) {
        return (
            <div className="cart">
                <br/>
                <div className= "titlebox">
                    <h1 className="cart__title">Giỏ Hàng</h1>
                </div>
                <p className="cart__empty">Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="cart">
            <br/>
            <div className= "titlebox">
            <h1 className="cart__title">Giỏ Hàng</h1>
            </div>
        <div className="cart__content">
            <div className="cart__items">
                {cartItems.map((item) => (
                    <div className="cart-item" key={item.cartItemId}>
                        <input
                            className="cart-item__checkbox"
                            type="checkbox"
                            checked={item.selected}
                            onChange={() =>
                                dispatch(toggleSelection(item.cartItemId))
                            }
                        />

                        <img
                            className="cart-item__image"
                            src={item.meal.image}
                            alt={item.meal.name}
                        />

                        <div className="cart-item__info">
                            <h3 className="cart-item__name">
                                {item.meal.name}
                            </h3>

                            <p className="cart-item__price">
                                {item.meal.price.toLocaleString("vi-VN")} VND
                            </p>
                        </div>

                        <div className="cart-item__quantity">
                            <button
                                onClick={() =>
                                    dispatch(updateQuantity({
                                        cartItemId: item.cartItemId,
                                        quantity: item.quantity - 1
                                    }))
                                }
                                disabled={item.quantity <= 1}
                            >
                                −
                            </button>

                            <span>{item.quantity}</span>

                            <button
                                onClick={() =>
                                    dispatch(updateQuantity({
                                        cartItemId: item.cartItemId,
                                        quantity: item.quantity + 1
                                    }))
                                }
                            >
                                +
                            </button>
                        </div>

                        <button
                            className="cart-item__remove"
                            onClick={() =>
                                dispatch(removeFromCart(item.cartItemId))
                            }
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart__summary">
                <h2>Tóm tắt đơn hàng</h2>

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

                <button
                    className="cart__checkout"
                    disabled={selectedItems.length === 0}
                >
                    Tiến hành thanh toán
                </button>
            </div>
        </div>
        </div>
    );
}

export default Cart;
