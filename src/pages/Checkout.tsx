import { useState } from "react";
import CartItemSummary from "../components/CartItemSummary";
import "../assets/scss/checkout.css";

function Checkout() {
    const [note, setNote] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");

    return (
        <div className="checkout">
            <div className="checkout__left">

                <section className="checkout__section">
                    <h2>Order Details</h2>
                    <CartItemSummary />
                </section>

                <section className="checkout__section">
                    <h2>Note for the Cook</h2>
                    <p className="checkout__description">
                        Any special requests for preparing your meals?
                    </p>

                    <textarea
                        className="checkout__note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Example: Less spicy, no onions..."
                        rows={4}
                    />
                </section>

                <section className="checkout__section">
                    <h2>Delivery Information</h2>

                    <div className="checkout__fields">
                        <div className="checkout__field">
                            <label htmlFor="customerName">Full Name</label>
                            <input
                                id="customerName"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="checkout__field">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="checkout__field">
                            <label htmlFor="address">Delivery Address</label>
                            <input
                                id="address"
                                type="text"
                                placeholder="Enter your delivery address"
                            />
                        </div>

                        <div className="checkout__field">
                            <label htmlFor="deliveryDate">Delivery Date</label>
                            <input
                                id="deliveryDate"
                                type="date"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <aside className="checkout__right">

                <section className="checkout__section">
                    <h2>Payment Method</h2>

                    <label className="checkout__payment-option">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="COD"
                            checked={paymentMethod === "COD"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery (COD)
                    </label>

                    <label className="checkout__payment-option">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Bank Transfer"
                            checked={paymentMethod === "Bank Transfer"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Bank Transfer
                    </label>
                </section>

                <button
                    className="checkout__confirm"
                    type="button"
                >
                    Confirm Order
                </button>

                <section className="checkout__static-info">
                    <h3>Ordering & Delivery Information</h3>
                    <p>
                        Please double-check your delivery information
                        before confirming your order.
                    </p>
                    <p>
                        Make sure your phone number is available
                        so the delivery staff can contact you.
                    </p>
                </section>
            </aside>
        </div>
    );
}

export default Checkout;
