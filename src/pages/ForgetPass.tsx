import '../assets/scss/login.css';
import {Link} from "react-router-dom";
import { useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ForgetPass() {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('fake_users')) || [];
        const userIndex = users.findIndex(u => u.username === username);
        if (userIndex === -1) {
            setMessage("Không tìm thấy tài khoản.");
            setIsError(true);
            return;
        }
        if (newPassword !== confirmPassword){
            setMessage("Mật khẩu xác nhận không khớp!");
            setIsError(true);
            return;
        }
        users[userIndex].password = newPassword;
        localStorage.setItem('fake_users', JSON.stringify(users));
        setMessage("Đặt lại mật khẩu thành công! Vui lòng đăng nhập lại.");
        setIsError(false);
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    }
    return (
        <div className="login_container">
            <div className="login_content">
                <div className="login_left">
                    <form onSubmit={handleResetPassword}>
                        <div className="left_content">
                            <h2>Đặt mật khẩu mới</h2>
                            <input type="text" placeholder="Nhập tên tài khoản" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input type="password" placeholder="Nhập mật khẩu mới" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                            <input type="password" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            {message && (<p className={`form_message ${isError? 'error' : 'success'}`}>{message}</p>)}
                            <button>Xác nhận</button>
                            <Link to="/login">
                                <p className="white_bg">Quay lại đăng nhập</p>
                            </Link>
                        </div>
                    </form>
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