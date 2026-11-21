import type {Meal} from "../redux/slices/mealSlice.tsx";
import "../assets/scss/MealsCard.css";
type MealCardProps ={
    meal: Meal;
}

function MealCard({meal}: MealCardProps){
 return(
    <div className="mealCard">this is meals card</div>
 );
}

export default MealCard;