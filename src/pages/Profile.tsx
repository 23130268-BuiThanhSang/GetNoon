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

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('currentUser');
        window.location.href = '/';
    }

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
                    <button onClick={handleLogout}> Đăng xuất</button>
                </div>
                <div className="right_profile">
                    {activeTab === 'info' && (
                        <div>
                            <h2 className="profile_title">Thông tin tài khoản</h2>
                            <p>Quản lý thông tin tài khoản cá nhân</p>
                            <div className="space_profile"></div>
                            <p>Tên tài khoản: {currentUser.username}</p>
                            <p>Số điện thoại: ••••••••••</p>
                            <p>Mật khẩu: ••••••••</p>
                        </div>
                    )}

                    {activeTab === 'update' && (
                        <div>
                            <h2 className="profile_title">Cập nhật thông tin</h2>
                            <p>Thay đổi hồ sơ tài khoản</p>
                            <div className="space_profile"></div>
                            <div className="update_group">
                                <p>Tên tài khoản: {currentUser.username}</p>
                                <button>Cập nhật</button>
                            </div>
                            <div className="update_group">
                                <p>Số điện thoại: ••••••••••</p>
                                <button>Cập nhật</button>
                            </div>
                            <div className="update_group">
                                <p>Mật khẩu: ••••••••</p>
                                <button>Cập nhật</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div>
                            <h2 className="profile_title">Lịch sử mua hàng</h2>
                            <p>Quản lý trạng thái đơn hàng đã đặt</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Profile;