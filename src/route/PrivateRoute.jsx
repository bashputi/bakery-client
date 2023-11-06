import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading) return <Spinner className="h-8 w-8" /> ;

    if(!user?.email) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;