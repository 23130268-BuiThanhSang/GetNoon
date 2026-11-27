import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import Meals from "./pages/Meals.tsx";
import MealDetail from "./components/MealsDetail.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ForgetPass from "./pages/ForgetPass.tsx";
import Policies from "./pages/Policies.tsx";
import Cart from "./pages/Cart.tsx";
import Profile from "./pages/Profile.tsx";
import OrderHistory from "./pages/OrderHistory.tsx";
import About from "./pages/About.tsx";
import Checkout from "./pages/Checkout.tsx";

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
            path:"policy",
            element:<Policies/>
            },
            {
                path: "meals",
                element: <Meals />
            },
            {
                path: "meals/:id",
                element: <MealDetail />
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path: "orders",
                element: <OrderHistory />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "checkout",
                element: <Checkout />
            }
        ],
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Register",
        element: <Register />
    },
    {
        path: "/ForgetPass",
        element: <ForgetPass />
    }
]);

export default router;