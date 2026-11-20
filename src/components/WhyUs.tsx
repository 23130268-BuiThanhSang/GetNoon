import useAPI from "../redux/Hooks/useAPI.tsx";
import {useAppDispatch, useAppSelector} from "../redux/Hooks/hooks.tsx";
import {useEffect} from "react";
import {setWhyUs} from "../redux/slices/WhyUsSlice.tsx";
import "../assets/scss/WhyUs.css";
function WhyUs() {
    const whyUs = useAppSelector((state)=>state.whyUs.items);
    const dispatch = useAppDispatch();
    const {data, loading, error} = useAPI("http://localhost:3001/whyUs");
    useEffect(() => {
        if(data){
           dispatch(setWhyUs(data));
        }
    }, [data,dispatch]);
    return(
        <section className="whyUs-section">
            <div className="container">
                <h2 className="section-title">Vì Sao Bạn Nên Chọn Chúng Tôi ?</h2>
                <div className="row">
                    {loading && <p className="col-12 text-center">Đang tải...</p>}
                    {error && <p className="col-12 text-center">{error.message}</p>}
                    {(whyUs || []).map((w) => (
                        <div className="col-6 col-md-3 mb-3" key={w.id}>
                            <div className="whyUs-item">
                                <i className={`fa-solid ${w.icon}`}></i>
                                <h5>{w.title}</h5>
                                <p>{w.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default WhyUs;