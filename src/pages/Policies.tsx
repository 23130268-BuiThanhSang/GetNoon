import type { Policy } from "../redux/slices/policySlice.tsx";
import '../assets/scss/policy.css';
import useAPI from "../redux/Hooks/useAPI.tsx";

function Policies(){
    const { data, loading, error } = useAPI("http://localhost:3001/policies");
    const policy = (data as Policy[]) || [];

    if (loading) return <p>Đang tải chính sách...</p>;
    if (error) return <p>Lỗi tải trang: {error.message}</p>;

    return (
        <div className="policy_body">
            <h2>Chính sách quy định chung của GetNoon</h2>
            <div className="policy_container">
                {policy.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Policies;