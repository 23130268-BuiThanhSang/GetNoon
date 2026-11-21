import {useAppSelector} from "../redux/Hooks/hooks.tsx";
import {useMemo} from "react";

function FeaturedProduct(){
    const meals = useAppSelector(state => state.meals.items);
    const featuredMeals = useMemo(()=>meals.filter((meal)=>meal.isFeatured),[meals]);
    return(
        <div className="featuredProduct">
            {featuredMeals.map((meal) => (
                <div key={meal.id}>
                    <img src={meal.image} alt={meal.name} />
                    <h3>{meal.name}</h3>
                    <p>{meal.price.toLocaleString("vi-VN")}đ</p>
                </div>
            ))}
        </div>
    );
}

export default FeaturedProduct;