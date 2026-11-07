import '../assets/scss/header.css';
import logo from '../assets/Images/logo.png';
import defaultAvatar from '../assets/Images/defaultavatar.jpg';
import {Link} from "react-router-dom";
import {useState} from "react";
export default function Header() {
    const [isLogIn]=useState(false);
    return (
        <header className="header_container">
            <Link to="/" className="button_logo">
                <img src = {logo} alt="Logo" className="logo_image" />
                <span className="logo_text">GetNoon</span>
            </Link>

            <nav className="navigation_menu">
                <Link to="/meals" className="button_product_list">Món Ăn</Link>
                <Link to="/policy" className="button_policy">Chính Sách</Link>
            </nav>
            <nav className="navigation_profile">
                <Link to="/cart" className="button_Cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                { isLogIn ? (
                    <Link to="/Profile" className="button_profile">
                        <img src = {defaultAvatar} alt="avatar" className="avatar_image" />
                    </Link>
                ):(
                    <>
                        <Link to="/Login" className="button_login">Đăng Nhập</Link>
                        <Link to="/Register" className="button_register"> Đăng Ký</Link>
                    </>
                    )}
            </nav>
        </header>
    );
}
