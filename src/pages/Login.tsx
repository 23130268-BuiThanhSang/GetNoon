import '../assets/scss/login.css';

export default function Login() {
   return (
       <div className="login_container">
           <div className="login_content">
               <div className="login_left">
                   <div className="left_content">
                       <h2>Đăng Nhập</h2>
                       <input type="text" placeholder="Nhập tên tài khoản"/>
                       <input type="password" placeholder="********"/>
                       <button>Đăng Nhập</button>
                       <div className="other_option">
                           <p>Quên mật khẩu?</p>
                           <p>Đặt mật khẩu mới</p>
                       </div>
                       <p>Quay lại trang chủ</p>
                   </div>
               </div>
               <div className="login_right">
                   <div className="right_content">
                       <h2>Chào mừng trở lại!</h2>
                       <p>Hãy đăng nhập ngay và chọn món ăn phù hợp với nhu cầu của bạn, chúng tôi sẽ giao bữa trưa cho bạn đúng hẹn.</p>
                       <div className="other_option">
                           <p>Chưa có tài khoản?</p>
                           <p>Đăng ký</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   )
}