import {useAppSelector} from "../redux/Hooks/hooks.tsx";
import {Link} from "react-router-dom";
import '../assets/scss/meals.css';

function Meals() {
    const meals = useAppSelector((state) => state.meals.items);
    return (
        <div className="meals_body">
            <h1>Thực đơn hôm nay</h1>
            <div className="meals_filter">
                <div className="filter_content">
                    <p>Tìm kiếm</p>
                    <input className="meals_input" type="text" placeholder="Nhập tên món ăn"/>
                </div>
                <div className="filter_content">
                    <p>Danh mục</p>
                    <select className="meals_select">
                        <option>Tất cả danh mục</option>
                        <option>Món mặn</option>
                        <option>Món nước</option>
                        <option>Món chay</option>
                        <option>Đồ ăn nhanh</option>
                        <option>Món ăn kèm</option>
                        <option>Giải khát</option>
                    </select>
                </div>
                <div className="filter_content">
                    <p>Khoảng giá</p>
                    <select className="meals_select">
                        <option>Tất cả mức giá</option>
                        <option>Dưới 50,000đ</option>
                        <option>50,000 - 75,000đ</option>
                        <option>75,000 - 100,000đ</option>
                        <option>Trên 100,000đ</option>
                    </select>
                </div>
                <div className="filter_content">
                    <p>Sắp xếp</p>
                    <select className="meals_select">
                        <option>Nổi bật</option>
                        <option>Tên A - Z</option>
                        <option>Tên Z - A</option>
                        <option>Giá tăng dần</option>
                        <option>Giá giảm dần</option>
                    </select>
                </div>
            </div>
            <div className="meals_container">
                {meals.map((meal) => (
                    <div className="meals_box" key={meal.id}>
                        <img src={meal.image}/>
                        <div className="meals_text">
                            <h2>{meal.name}</h2>
                            <div className="meals_description">
                                <p>{meal.description}</p>
                            </div>
                            <p className="price">{meal.price.toLocaleString()} VND</p>
                            <div className="last_group">
                                <Link to={`/meals/${meal.id}`}>
                                    Xem chi tiết
                                </Link>
                                <button className="bt_cart">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Meals