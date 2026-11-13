import '../assets/scss/login.css';
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <div className="login_container">
            <div className="login_content">
                <div className="login_left">
                    <div className="left_content">
                        <h2>Đăng ký</h2>
                        <input type="text" placeholder="Nhập tên tài khoản"/>
                        <input type="text" placeholder="Nhập số điện thoại"/>
                        <input type="text" placeholder="Nhập mật khẩu"/>
                        <input type="text" placeholder="Xác nhận mật khẩu"/>
                        <button>Đăng ký</button>
                        <Link to="/">
                            <p className="white_bg">Quay lại trang chủ</p>
                        </Link>
                    </div>
                </div>
                <div className="login_right">
                    <div className="right_content">
                        <h2>Chào mừng bạn!</h2>
                        <p>Hãy tạo tài khoản và tham khảo thực đơn của chúng tôi. Hiện có rất nhiều
                            ưu đãi dành cho thành viên mới!</p>
                        <div className="other_option">
                            <p>Đã có tài khoản?</p>
                            <Link to="/login">
                                <p className="green_bg">Đăng nhập</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}