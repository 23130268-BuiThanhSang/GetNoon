import '../assets/scss/login.css';
import {Link} from "react-router-dom";

export default function ForgetPass() {
    return (
        <div className="login_container">
            <div className="login_content">
                <div className="login_left">
                    <div className="left_content">
                        <h2>Đặt mật khẩu mới</h2>
                        <input type="text" placeholder="Nhập tên tài khoản"/>
                        <input type="password" placeholder="Nhập mật khẩu mới"/>
                        <input type="password" placeholder="Xác nhận mật khẩu"/>
                        <button>Xác nhận</button>
                        <Link to="/login">
                            <p className="white_bg">Quay lại đăng nhập</p>
                        </Link>
                    </div>
                </div>
                <div className="login_right">
                    <div className="right_content">
                        <h2>Đổi mật khẩu</h2>
                        <p>Tiến hành cập nhật mật khẩu mới để phục vụ cho quy trình đăng nhập thành công.</p>
                        <div className="other_option">
                            <p>Chưa có tài khoản?</p>
                            <Link to="/Register">
                                <p className="green_bg">Đăng ký</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}