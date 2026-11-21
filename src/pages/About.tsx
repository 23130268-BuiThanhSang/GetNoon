import useAPI from "../redux/Hooks/useAPI.tsx";
import type { AboutData } from "../redux/slices/aboutSlice.tsx";
import "../assets/scss/about.css";

function About() {
    const { data, loading, error } = useAPI("http://localhost:3001/about");
    const about = data as AboutData | null;

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

                <div className="about_images">
                    {about.images.map((imgUrl, index) => (
                        <img key={index} src={imgUrl} alt={`${about.title} ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;