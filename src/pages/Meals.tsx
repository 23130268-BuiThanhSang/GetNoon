import {useAppDispatch, useAppSelector} from "../redux/Hooks/hooks.tsx";
import {Link} from "react-router-dom";
import '../assets/scss/meals.css';
import { useEffect, useMemo, useState } from "react";
import type { Category } from "../redux/slices/CategoriesSlice.tsx";
import { setCategories} from "../redux/slices/CategoriesSlice.tsx";
import useAPI from "../redux/Hooks/useAPI.tsx";

function Meals() {
    const dispatch = useAppDispatch();
    const meals = useAppSelector((state) => state.meals.items);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const categoriesFromStore = useAppSelector((state) => state.categories?.items ?? []);
    const { data: categoriesData, loading: categoriesLoading, error: categoriesError } = useAPI("http://localhost:3001/categories");

    useEffect(() => {
        if (categoriesData) {
            dispatch(setCategories(categoriesData as Category[]));
        }
    }, [categoriesData, dispatch]);

    const categories: Category[] = categoriesFromStore.length > 0 ? categoriesFromStore : ((categoriesData as Category[]) || []);
    const filteredMeals = useMemo(() => {
        return meals.filter((meal) => {
            const matchesCategory = selectedCategory === "all" || meal.category === selectedCategory;
            const matchesSearch = !searchQuery.trim() || meal.name.toLowerCase().includes(searchQuery.trim().toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [meals, selectedCategory, searchQuery]);

    return (
        <div className="meals_body">
            <h1>Thực đơn hôm nay</h1>
            <div className="meals_filter">
                <div className="filter_content">
                    <p>Tìm kiếm</p>
                    <input className="meals_input" type="text" placeholder="Nhập tên món ăn" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="filter_content">
                    <p>Danh mục</p>
                    <select className="meals_select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="all">{categoriesLoading ? "Đang tải danh mục..." : "Tất cả danh mục"}</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                    {categoriesError && (
                        <p>Không tải được danh mục: {categoriesError.message}</p>
                    )}
                </div>
                <div className="filter_content">
                    <p>Khoảng giá</p>
                    <select className="meals_select" value="priceRange">
                        <option value="all">Tất cả mức giá</option>
                        <option value="under_50k">Dưới 50,000đ</option>
                        <option value="50k_75k">50,000 - 75,000đ</option>
                        <option value="75k_100k">75,000 - 100,000đ</option>
                        <option value="over_100k">Trên 100,000đ</option>
                    </select>
                </div>
                <div className="filter_content">
                    <p>Sắp xếp</p>
                    <select className="meals_select">
                        <option>Nổi bật</option>
                        <option>Tên A - Z</option>
                        <option>Tên Z - A</option>
                        <option>Giá tăng dần</option>
                        <option>Giá giảm dần</option>
                    </select>
                </div>
            </div>
            <div className="meals_container">
                {filteredMeals.map((meal) => (
                    <div className="meals_box" key={meal.id}>
                        <img src={meal.image}/>
                        <div className="meals_text">
                            <h2>{meal.name}</h2>
                            <div className="meals_description">
                                <p>{meal.description}</p>
                            </div>
                            <p className="price">{meal.price.toLocaleString()} VND</p>
                            <div className="last_group">
                                <Link to={`/meals/${meal.id}`}>
                                    Xem chi tiết
                                </Link>
                                <button className="bt_cart">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Meals