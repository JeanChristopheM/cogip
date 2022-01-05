import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ element, isAuth }) {
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth]);
    return element;
}

export default PrivateRoute;
