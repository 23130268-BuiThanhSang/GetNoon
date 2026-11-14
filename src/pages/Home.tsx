import Banner from "../components/Banner.tsx";
import Catagories from "../components/Catagories.tsx";
import {useEffect} from "react";
import type {AppDispatch} from "../redux/store.tsx";
import {useDispatch} from "react-redux";
import {fetchCategories} from "../redux/slices/CategoriesSlice.tsx";

function Home() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    return (
      <div>
          <Banner/>
          <Catagories/>
      </div>
    );
}

export default Home