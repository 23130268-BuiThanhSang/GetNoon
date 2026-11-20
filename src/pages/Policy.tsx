import {useAppSelector} from "../redux/hooks.tsx";
import type { Policy } from "../redux/slices/policySlice.tsx";

function Policy(){
    const policy = useAppSelector((state): Policy[] => state.policy.items);

    return (
        <div>
            <h2>Chính sách</h2>
            {policy.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Policy;