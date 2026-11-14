import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../redux/store.tsx";

function Catagories(){
    const navigate = useNavigate();
    const {items,loading} = useSelector((s:RootState) => s.categories)
    const hanldeClick =
    return(
        <div className="catagories">this
            is category
        </div>
    );
}
export default Catagories;