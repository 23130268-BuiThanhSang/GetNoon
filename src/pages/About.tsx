import useAPI from "../redux/Hooks/useAPI.tsx";
import type { AboutData } from "../redux/slices/aboutSlice.tsx";
import "../assets/scss/about.css";
import {Link} from "react-router-dom";
import {useAppSelector} from "../redux/Hooks/hooks.tsx";

function About() {
    const { data, loading, error } = useAPI("http://localhost:3001/about");
    const about = data as AboutData | null;
    const meals = useAppSelector((state) => state.meals.items);

    if (loading) return <p>Đang tải giới thiệu...</p>;
    if (error) return <p>Lỗi tải trang: {error.message}</p>;
    if (!about) return null;

    return (
        <div className="about_body">
            <div className="about_container">
                <h1>{about.title}</h1>
                <h3 className="about_subtitle">{about.subtitle}</h3>

                <div className="about_content">
                    {about.describe.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
                <h3 className="about_subtitle">{about.list}</h3>
                <div className="about_images">
                    {meals.map((meal) => (
                        <Link
                            key={meal.id}
                            to={`/meals/${meal.id}`}
                            className="about_image_item"
                        >
                            <img src={meal.image} alt={meal.name} />

                            <div className="image_caption">{meal.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;