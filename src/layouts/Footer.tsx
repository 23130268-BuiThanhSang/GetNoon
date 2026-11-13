import logo from '../assets/Images/logo.png';
import {Link} from "react-router-dom";
import '../assets/scss/footer.css';

export default function Footer() {
    return (
        <footer className="footer_container">
            <div className="logo_group">
                <Link to="/">
                    <img src={logo} className="logo_footer"/>
                    <span className="logo_ft_text">GetNoon</span>
                </Link>
            </div>
            <div>
                <p className="title">Dịch vụ</p>
                <p>Đặt cơm văn phòng theo tháng</p>
                <p>Menu cơm trưa theo tuần</p>
                <p>Thực đơn hôm nay</p>
            </div>
            <div>
                <p className="title">Khám phá</p>
                <p>Thực đơn</p>
                <p>Chính sách</p>
                <p>Câu hỏi thường gặp</p>
            </div>
            <div>
                <p className="title">Liên hệ</p>
                <p>Số điện thoại: 0457389573</p>
                <p>Zalo: 0457389573</p>
                <p>Email: GetNoon@gmail.com</p>
            </div>
            <div className="last_div">
                <p className="title">Khu vực giao</p>
                <p>Bình thạnh, Tân Bình</p>
                <p>Thủ đức, Gò vấp</p>
                <p>Quận 1, 3, 7</p>
            </div>
        </footer>
    );
}