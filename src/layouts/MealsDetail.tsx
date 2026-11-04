import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks.tsx";

function MealDetail() {
    const { id } = useParams();

    const meal = useAppSelector((state) =>
        state.meals.items.find((meal) => meal.id === Number(id))
    );
    if (!meal) {
        return <h1>Meal not found</h1>;
    }

    return (
        <div>
            <h1>{meal.name}</h1>
            <p>{meal.description}</p>
            <p>Price: {meal.price.toLocaleString()} VND</p>

            <Link to="/meals">Back to Meals</Link>
        </div>
    );
}

export default MealDetail