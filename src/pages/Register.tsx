import '../assets/scss/login.css';
import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (!username || !phone ||!password || !confirmPassword) {
            setMessage("Please fill all fields");
            setIsError(true);
            return;
        }
        if (password !== confirmPassword) {
            setMessage("Passwords don't match");
            setIsError(true);
            return;
        }
        const users = JSON.parse(localStorage.getItem("fake_users")) || [];
        const existingUsers = users.find(u => u.username === username);
        if (existingUsers) {
            setMessage("User already exist");
            setIsError(true);
            return;
        }
        users.push({ username, phone, password });
        localStorage.setItem("fake_users", JSON.stringify(users));
        setMessage("Register successfully");
        setIsError(false);
        setTimeout(() => {
            navigate("/Login");
        }, 1500)
    }
    return (
        <div className="login_container">
            <div className="login_content">
                <div className="login_left">
                    <form onSubmit={handleRegister}>
                        <div className="left_content">
                            <h2>Đăng ký</h2>
                            <input type="text" placeholder="Nhập tên tài khoản" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input type="text" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            <input type="password" placeholder="Nhập mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <input type="password" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            {message && (<p className={`form_message ${isError? 'error' : 'success'}`}>{message}</p>)}
                            <button>Đăng ký</button>
                            <Link to="/">
                                <p className="white_bg">Quay lại trang chủ</p>
                            </Link>
                        </div>
                    </form>
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