import {RouterProvider} from "react-router-dom";
import router from "./route.tsx";
import {useAppDispatch, useAppSelector} from "./redux/Hooks/hooks.tsx";
import {useEffect} from "react";
import useAPI from "./redux/Hooks/useAPI.tsx";
import {setMeals} from "./redux/slices/mealSlice.tsx";

export default function App() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAPI("http://localhost:3001/meals");
    const items = useAppSelector(state => state.meals.items);
    useEffect(() => {
        if (data) {
            dispatch(setMeals(data));
        }
    }, [data, dispatch]);


    if (loading || items.length === 0) {
        return <h1>Loading meals...</h1>;
    }

    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return <RouterProvider router={router} />;
}
