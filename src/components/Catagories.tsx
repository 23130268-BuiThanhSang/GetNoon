import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../redux/store.tsx";
import "../assets/scss/categories.css";
function Catagories(){
    const navigate = useNavigate();
    const {items,loading} = useSelector((s:RootState) => s.categories)
    const handleClick = (name: string) => {
        navigate(`/meals?category = ${encodeURIComponent(name)}`);
    };
    return(
        <section className="container my-5">
            <h2 className="section-title">Danh mục</h2>

            {loading && <p className="text-center">Đang tải...</p>}

            <div className="row justify-content-center">
                {items.map((c) => (
                    <div className="col-6 col-md-3 mb-3" key={c.id}>
                        <div className="category-item" onClick={() => handleClick(c.name)}>
                            <img src={c.image} alt={c.name} />
                            <span>{c.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Catagories;