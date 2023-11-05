import { useContext } from "react";
import { AuthContext } from "../route/AuthProvider";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
             
           
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={user.photoURL} />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <div className="w-10 ml-20 rounded-full">
                <img src={user.photoURL} />
                </div>
                <div className="my-4 text-center font-semibold text-xl text-green-600">{user.displayName}'s Account</div>
                <li><Button variant="outlined"><NavLink to="/myaddeditems">My Added Food Items</NavLink></Button></li>
                <li className="my-3"><Button variant="outlined"><NavLink to="/additems">Add a food item</NavLink></Button></li>
                <li><Button variant="outlined"><NavLink to="/ordereditems">My ordered items</NavLink></Button></li>

            </ul>
            </div>
                
        </>
    );
};

export default MyProfile;