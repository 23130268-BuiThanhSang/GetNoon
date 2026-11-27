import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../redux/Hooks/hooks.tsx";
import {useEffect, useState} from "react";
type size = {id:number, label:string, extra:number,note:string};
const API_URL = "  http://localhost:3001";
function MealDetail() {
    const { id } = useParams();

    const meal = useAppSelector((state) =>
        state.meals.items.find((meal) => meal.id === Number(id))
    );

    const {sizes, setSizes} = useState<size[]>([]);
    const {size, setSize} = useState<size||null>(null);
    if (!meal) {
        return <h1>Meal not found</h1>;
    }
    useEffect(() => {
        if(!meal?.sizeIds?.length) {
            setSizes([]);
            setSize(null);
            return;
        }
        let ignore = false;
        const query = meal.sizeIds.map((id)=>`id=${id}`).join('&');
        fetch(`${API_URL}/sizes?${query}`).then()




    }, []);

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