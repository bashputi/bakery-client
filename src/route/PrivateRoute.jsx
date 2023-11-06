import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;

    if(!user?.email) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;