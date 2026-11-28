import {useAppSelector} from "../redux/Hooks/hooks.tsx";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";





type Size = {id:number, label:string, extra:number,note:string};
type Topping ={id:number, name:string, price:number};


const API_URL = "http://localhost:3001";
function MealDetail() {
    const { id } = useParams();

    const meal = useAppSelector((state) =>
        state.meals.items.find((meal) => meal.id === Number(id))
    );

    const [sizes, setSizes] = useState<Size[]>([]);
    const [size, setSize] = useState<Size|null>(null);

    const [toppings, setToppings] = useState<Topping[]>([]);
    const[selectedTopping, setSelectedTopping] = useState<Topping[]>([]);




    useEffect(() => {
        if(!meal?.sizeIds?.length) {
            setSizes([]);
            setSize(null);
            return;
        }
        let ignore = false;
        const query = meal.sizeIds.map((id)=>`id=${id}`).join('&');
        fetch(`${API_URL}/sizes?${query}`)
            .then(
            (res)=>res.json()
        ).then((data:Size[])=>{
            if(ignore){
                return;
            }
            setSizes(data);
            setSize(data[0]??null);
        })
        return () => {ignore=true};
    }, [meal]);

    useEffect(() => {
        if(!meal?.toppingIds?.length) {
            setToppings([]);
            setSelectedTopping([]);
            return;
        }
        let ignore = false;
        const query = meal.toppingIds.map((id)=>`id=${id}`).join('&');
        fetch(`${API_URL}/toppings?${query}`)
            .then(
                (res)=>res.json()
            ).then((data:Topping[])=>{
            if(ignore){
                return;
            }
            setToppings(data);
            setSelectedTopping([]);
        })
        return () => {ignore=true};
    }, [meal]);

    const toggleToppings = (t:Topping) => {
            setSelectedTopping((prev)=>
                prev.some((x)=>x.id===t.id)?prev.filter((x)=>x.id!==t.id):[...prev,t]
            );
    }







    if (!meal) {
        return <h1>Meal not found</h1>;
    }





    const unitPrice = meal.price+(size?.extra ??0)+selectedTopping.reduce((sum,t)=> sum+t.price,0);




    return (
        <div className="meal-detail">
            <Link to="/meals">← Back to Meals</Link>

            <div className="meal-detail-body">
                <img className="meal-detail-image" src={meal.image} alt={meal.name} />

                <div className="meal-detail-info">
                    <span className="meal-detail-category">{meal.category}</span>
                    <h1>{meal.name}</h1>
                    <p>
                        <i className="fa-solid fa-star"></i>
                        {meal.rating}
                    </p>
                    <p>{meal.description}</p>

                    {sizes.length > 0 && (
                        <div className="meal-detail-sizes">
                            <h3>Chọn size</h3>
                            {sizes.map((s) => (
                                <button
                                    key={s.id}
                                    className={size?.id === s.id ? "active" : ""}
                                    onClick={() => setSize(s)}
                                >
                                    {s.label} ({s.note})
                                    {s.extra > 0 && ` +${s.extra.toLocaleString()}đ`}
                                </button>
                            ))}
                        </div>
                    )}
                    {toppings.length > 0 && (
                        <div className="meal-detail-toppings">
                            <h3>Chọn topping</h3>
                            {toppings.map((t) => (
                                <label key={t.id}>
                                    <input
                                        type="checkbox"
                                        checked={selectedTopping.some((x) => x.id === t.id)}
                                        onChange={() => toggleToppings(t)}
                                    />
                                    {t.name} (+{t.price.toLocaleString()}đ)
                                </label>
                            ))}
                        </div>
                    )}
                    <p className="meal-detail-price">{unitPrice.toLocaleString()} VND</p>
                </div>
            </div>
        </div>
    );
}

export default MealDetail