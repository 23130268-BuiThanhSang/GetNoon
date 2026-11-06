import '../assets/scss/header.css';

export default function Header() {
    return (
        <header className="header_container">
            <div className="logo_container">
                image
            </div>
            <div className="button_container">
                <button className="button_product_list">Sản Phẩm</button>
                <button className="button_policy">Chính sách</button>
                <button className="button_register">Đăng ký</button>
                <button className="button_login">Đăng nhập</button>
            </div>
            <hr/>
            <hr/>
        </header>
    );
}