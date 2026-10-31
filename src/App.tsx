import Footer from './components/Footer';
import './App.css'
import Banner from "./components/Banner.tsx";

export default function App() {
    return (
        <div className="home_page">
            <header>App Order Lunch</header>
            <Banner />
            <main>
                <div>Home Page</div>
            </main>
            <Footer />
        </div>
    );
}
