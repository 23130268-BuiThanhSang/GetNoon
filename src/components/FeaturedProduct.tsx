import {useAppSelector} from "../redux/Hooks/hooks.tsx";
import {useMemo} from "react";
import MealCard from "./MealCard.tsx";
import "../assets/scss/FeaturedProduct.css";
import {Link} from "react-router-dom";

function FeaturedProduct(){
    const meals = useAppSelector(state => state.meals.items);
    const featuredMeals = useMemo(()=>meals.filter((meal)=>meal.isFeatured).slice(0,5),[meals]);
    return (
        <section className="featured-product-section container">
            <div className="featured-product-header">
                <div>
                    <h2 className="featured-title">Món nổi bật</h2>
                    <p className="featured-subtitle">Được khách hàng yêu thích nhất tại GetNoon</p>
                </div>
                <Link to="/meals" className="featured-link">
                    Xem tất cả <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
            <div className="featuredProduct">
                {featuredMeals.map((meal) => (
                    <MealCard key={meal.id} meal={meal}/>
                ))}
            </div>
        </section>
    );
}

export default FeaturedProduct;