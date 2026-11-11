import {Link} from "react-router-dom";
import '../assets/scss/Banner.css';
import banner1 from'../assets/Images/banner1.webp';
import banner2 from'../assets/Images/banner 2.jpg';
import banner3 from'../assets/Images/banner 3.jpg';
import banner4 from'../assets/Images/banner 4.jpg';
import banner5 from'../assets/Images/banner 5.jpg';
import banner6 from'../assets/Images/banner 6.jpg';
import {useEffect, useState} from "react";


const images =[banner1, banner2, banner3, banner4, banner5, banner6];
export default function Banner(){

    const [current, setCurrent] = useState(0);
    useEffect(()=>{
        const timer = setInterval(
            ()=> {
                setCurrent((prev)=>(prev+1)%images.length)
            },6000);
        return ()=> clearInterval(timer);
    },[]);





    return (
        <div className="banner_container">
            <div className="intro_container">
                <span className="banner_intro">Giao hàng nhanh trong 30 phút</span>
                <h1>GETNOON LỰA CHỌN HÀNG ĐẦU CHO BỮA TRƯA</h1>
                <p>
                    Hàng trăm món ngon được chế biến từ nguyên liệu tươi mới, đặt chỉ với vài cú nhấp chuột.
                </p>
                <div className="banner_actions">
                    <Link to="meals" className="btn btn_order">Đặt món ngay</Link>
                    <Link to="Policy" className="btn btn_policy">Xem chính sách</Link>
                </div>
            </div>
            <div className="image_container">
                {images.map((img, index) => {
                    const pos = (index - current + images.length) % images.length;
                    return (
                        <img
                            key={index}
                            src={img}
                            alt={`banner ${index + 1}`}
                            className={`photo pos-${pos}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}