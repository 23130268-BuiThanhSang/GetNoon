import {useAppSelector} from "../redux/Hooks/hooks.tsx";
import {Link} from "react-router-dom";
import '../assets/scss/meals.css';

function Meals() {
    const meals = useAppSelector((state) => state.meals.items);
    return (
        <div className="meals_body">
            <h1>Thực đơn hôm nay</h1>
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