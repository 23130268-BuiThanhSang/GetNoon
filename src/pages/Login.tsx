import '../assets/scss/login.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("fake_users")) || [];
        const validUser = users.find(u => u.username === username && u.password === password);
        if (validUser) {
            localStorage.setItem('isLogin', 'true');
            localStorage.setItem('currentUser', JSON.stringify(validUser));
            setMessage("Đăng nhập thành công");
            setIsError(false);
            setTimeout(() => {
                navigate("/");
                window.location.reload();
            }, 1500)
        } else {
            setMessage("Sai tên tài khoản hoặc mật khẩu!");
            setIsError(true)
        }
    }
   return (
       <div className="login_container">
           <div className="login_content">
               <div className="login_left">
                   <form onSubmit={handleLogin}>
                       <div className="left_content">
                           <h2>Đăng Nhập</h2>
                           <input type="text" placeholder="Nhập tên tài khoản" value={username} onChange={(e) => setUsername(e.target.value)} />
                           <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                           {message && (<p className={`form_message ${isError? 'error' : 'success'}`}>{message}</p>)}
                           <button>Đăng Nhập</button>
                           <div className="other_option">
                               <p>Quên mật khẩu?</p>
                               <Link to="/ForgetPass">
                                   <p className="white_bg">Đặt mật khẩu mới</p>
                               </Link>
                           </div>
                           <Link to="/">
                               <p className="white_bg">Quay lại trang chủ</p>
                           </Link>
                       </div>
                   </form>
               </div>
               <div className="login_right">
                   <div className="right_content">
                       <h2>Chào mừng trở lại!</h2>
                       <p>Hãy đăng nhập ngay và chọn món ăn phù hợp với nhu cầu của bạn, chúng tôi sẽ giao bữa trưa cho bạn đúng hẹn.</p>
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