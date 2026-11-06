import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./components/Home.tsx";
import Meals from "./components/Meals.tsx";
import MealDetail from "./components/MealsDetail.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div>Something wrong</div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "meals",
                element: <Meals />
            },
            {
                path: "meals/:id",
                element: <MealDetail />
            },
        ],
    },
    {
        path: "/Login",
        element: <Login />
    }
]);

export default router;