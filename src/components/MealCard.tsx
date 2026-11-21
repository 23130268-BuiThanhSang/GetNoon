import type {Meal} from "../redux/slices/mealSlice.tsx";
import "../assets/scss/MealsCard.css";
type MealCardProps ={
    meal: Meal;
}

function MealCard({meal}: MealCardProps){
 return(
    <div className="meal-card">
        <div className="meal-card-image-wrap">
            <img src={meal.image} alt={meal.name}/>
        </div>
        <div className="meal-card-content">
            <span className="meal-card-category">{meal.category}</span>
            <h3 className="meal-card-name">{meal.name}</h3>
            <p className="meal-card-description">{meal.description}</p>
            <div className="meal-card-footer">
                <span className="meal-card-rating">
                     <i className="fa-solid fa-star"></i>
                    {meal.rating.toFixed(1)}
                </span>
                <span className="meal-card_price">{meal.price.toLocaleString("vi-VN")}VNĐ</span>
                <button className="meal-card_btn">Thêm vào giỏ</button>
            </div>
        </div>

    </div>
 );
}

export default MealCard;