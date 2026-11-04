import {useAppSelector} from "../redux/hooks.tsx";
import {Link} from "react-router-dom";

function Meals() {
    const meals = useAppSelector((state) => state.meals.items);
    return (
        <div>
            <h1>Our Meals</h1>

            {meals.map((meal) => (
                <div key={meal.id}>
                    <h2>{meal.name}</h2>
                    <p>{meal.description}</p>
                    <p>Price: {meal.price.toLocaleString()} VND</p>

                    <Link to={`/meals/${meal.id}`}>
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Meals