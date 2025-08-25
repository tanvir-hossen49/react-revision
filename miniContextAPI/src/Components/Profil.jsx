import { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function Profil () {
    const { user } = useContext(UserContext);
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}