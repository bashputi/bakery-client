import { Button } from "@material-tailwind/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const TopSection = () => {
    return (
        <div className="my-20">
            <div className="text-center text-amber-600 font-bold text-3xl lg:text-5xl">Our Top Rated Products</div>
            <div className="my-12">

            </div>
            <div className="flex justify-center">
            <Button color="amber"><NavLink to="/allItems" className="flex gap-3 text-lg  lg:py-4"><p>See All</p> <AiOutlineArrowRight  className="mt-1.5"/></NavLink></Button>
            </div>
        </div>
    );
};

export default TopSection;