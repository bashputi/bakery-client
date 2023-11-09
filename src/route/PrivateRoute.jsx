import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;

    if(!user?.email) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;