import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

function MainLayout() {
    return (
        <div>
            <Header/>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/meals">Meals</Link>
            </nav>
            <hr />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;