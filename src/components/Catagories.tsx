import {useNavigate} from "react-router-dom";
import "../assets/scss/categories.css";
import {useAppDispatch, useAppSelector} from "../redux/Hooks/hooks.tsx";
import useAPI from "../redux/Hooks/useAPI.tsx";
import {setCategories} from "../redux/slices/CategoriesSlice.tsx";
import {useEffect} from "react";
function Catagories(){
    const navigate = useNavigate();
    const categories = useAppSelector((state)=>state.categories.items);
    const dispatch = useAppDispatch();
    const {data,loading,error} = useAPI("http://localhost:3001/categories");
    useEffect(() => {
        if(data){
            dispatch(setCategories(data));
        }
    }, [data, dispatch]);
    const handleClick = (name: string) => {
        navigate(`/meals?category=${encodeURIComponent(name)}`);
    };
    return(
        <section className="container my-5">
            <h2 className="section-title">Danh mục</h2>

            {loading && <p className="text-center">Đang tải...</p>}
            {error && <p className="text-center">{error.message}</p>}
            <div className="row justify-content-center">
                {categories.map((c) => (
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