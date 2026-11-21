import {useAppSelector} from "../redux/Hooks/hooks.tsx";
import {useMemo} from "react";
import MealCard from "./MealCard.tsx";
import "../assets/scss/FeaturedProduct.css";

function FeaturedProduct(){
    const meals = useAppSelector(state => state.meals.items);
    const featuredMeals = useMemo(()=>meals.filter((meal)=>meal.isFeatured).slice(0,5),[meals]);
    return (
        <sectio
        <div className="featuredProduct">
            {featuredMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal}/>
            ))}
        </div>
    );
}

export default FeaturedProduct;