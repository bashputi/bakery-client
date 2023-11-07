import {  Spinner } from "@material-tailwind/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../route/AuthProvider";
import { useContext } from "react";
import { motion } from "framer-motion";


const TopSection = () => {
    const {loading} = useContext(AuthContext);
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;
    return (
        <div className="my-20">
            <div className="text-center text-amber-600 font-bold text-3xl lg:text-5xl">Our Top Rated Products</div>
            <div className="my-12">

            </div>
            <div className="flex justify-center">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="btn btn-outline btn-warning"><NavLink to="/allfoods" className="flex gap-3 text-lg  "><p>See All</p> <AiOutlineArrowRight  className="mt-1.5"/></NavLink></motion.button>
            </div>
        </div>
    );
};

export default TopSection;