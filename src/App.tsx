import Footer from './components/Footer';
import './App.css'
import Banner from "./components/Banner.tsx";
import Header from "./components/Header.tsx";

export default function App() {
    return (
        <div className="home_page">
            <Header/>
            <Banner />
            <main>
                <div>Home Page</div>
            </main>
            <Footer />
        </div>
    );
}
