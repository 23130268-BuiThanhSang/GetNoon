import {useAppSelector} from "../redux/hooks.tsx";
import {Link} from "react-router-dom";

function Meals() {
    const meals = useAppSelector((state) => state.meals.items);
    const loading = useAppSelector((state) => state.meals.loading);
    const error = useAppSelector((state) => state.meals.error);

    if (loading) {
        return <h1>Loading meals...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }
    return (
        <div>
            <h1>Our Meals</h1>

            {meals.map((meal) => (
                <div key={meal.id}>
                    <h2>{meal.name}</h2>
                    <img src={meal.image}/>
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