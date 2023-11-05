import { Button } from "@material-tailwind/react";
import { AiOutlineArrowRight } from "react-icons/ai";

const TopSection = () => {
    return (
        <div className="my-10">
            <div className="text-center font-bold text-3xl lg:text-5xl">Top Food Section</div>
            <div className="my-12">
cccccc
            </div>
            <div className="flex justify-center">
            <Button className="flex gap-3 text-lg  py-4" color="amber"><p>See All</p> <AiOutlineArrowRight /></Button>
            </div>
        </div>
    );
};

export default TopSection;