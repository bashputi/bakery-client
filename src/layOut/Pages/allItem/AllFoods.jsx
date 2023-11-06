import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "./AllFoodsCard";

const AllFoods = () => {
    const loadedFoods = useLoaderData();
    const [bakerys, setBakerys] = useState(loadedFoods);
   
    return (
        <div className="container mx-auto">
            <div className="text-center my-12 text-amber-600 font-bold text-3xl lg:text-5xl">All Food Items</div>
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-5 md:pl-0 lg:grid-cols-3">
                {
                  bakerys.length &&  bakerys.map(bakery => <AllFoodsCard key={bakery._id} bakery={bakery} bakerys={bakerys} setBakerys={setBakerys}></AllFoodsCard>)
                }
            </div>
            <div className="pagination">
                <p>current page {currentPage}</p>
                <button>prev</button>
                    {
                        pages
                    }
                <button>next</button>

            </div>
        </div>
    );
};

export default AllFoods;