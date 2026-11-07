// import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;