import {RouterProvider} from "react-router-dom";
import router from "./route.tsx";
import {useAppDispatch} from "./redux/hooks.tsx";
import {useEffect} from "react";
import {fetchMeals} from "./redux/slices/mealSlice.tsx";


export default function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMeals());
    }, [dispatch]);

    return <RouterProvider router={router} />;
}
