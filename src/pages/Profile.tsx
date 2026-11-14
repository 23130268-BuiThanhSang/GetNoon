import '../assets/scss/profile.css';
import defaultAvatar from "../assets/Images/defaultavatar.jpg";
import { useState} from "react";
import '../assets/Library/fontawesome/all.min.css';

function Profile(){
    const [activeTab, setActiveTab] = useState('info');
    const [currentUser] = useState(() => {
        const storedUser = localStorage.getItem("currentUser");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    return (
        <div className="profile_container">
            <div className="profile_group">
                <div className="left_profile">
                    <div className="avt_profile">
                        <img src={defaultAvatar} className="avatar_image"/>
                        <h2>{currentUser.username}</h2>
                    </div>
                    <div className="space"></div>
                    <div onClick={() => setActiveTab('info')} className={`profile_option ${activeTab === 'info' ? 'active' : ''}`}>
                        <i className="fa-solid fa-circle-user"></i>
                        <p>Thông tin tài khoản</p>
                    </div>
                    <div onClick={() => setActiveTab('update')} className={`profile_option ${activeTab === 'update' ? 'active' : ''}`}>
                        <i className="fa-solid fa-address-card"></i>
                        <p>Cập nhật thông tin</p>
                    </div>
                    <div onClick={() => setActiveTab('history')} className={`profile_option ${activeTab === 'history' ? 'active' : ''}`}>
                        <i className="fa-solid fa-truck-fast"></i>
                        <p>Lịch sử mua hàng</p>
                    </div>
                    <button> Đăng xuất</button>
                </div>
                <div className="right_profile"></div>
            </div>
        </div>
    );
}
export default Profile;