import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "./AllFoodsCard";
import { AuthContext } from "../../../route/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet";

const AllFoods = () => {
    
    const loadedFoods = useLoaderData();
    const [bakerys, setBakerys] = useState(loadedFoods);

    const {loading} = useContext(AuthContext);
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;
    // const [currentPage, setCurrentPage] = useState(1);
    // const pages = [...Array(numberofPages).keys()];
    // const itemsPerPage = 9;
    // const numberofPages = Math.ceil(22 / itemsPerPage);

    // const handlePrevPage = () => {
    //     if(currentPage > 0){
    //         setCurrentPage(currentPage - 1);

    //     }
    // };

    // const handleNextPage = () => {
    //     if(currentPage < pages.length - 1){
    //         setCurrentPage(currentPage + 1);

    //     }
    // };

 
   
    return (

        <div className="container mx-auto">
              <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | All food items </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center my-12 text-amber-600 font-bold text-3xl lg:text-5xl">All Food Items</div>
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-5 md:pl-0 lg:grid-cols-3">
                {
                  bakerys.length &&  bakerys.map(bakery => <AllFoodsCard key={bakery._id} bakery={bakery} bakerys={bakerys} setBakerys={setBakerys}></AllFoodsCard>)
                }
            </div>
            {/* <div className="pagination">
                <p>current page {currentPage}</p>
                <button onClick={handlePrevPage}>prev</button>
                    {
                        pages.length && pages.map(page => <button className={currentPage === page ? 'selected' : undefined} onClick={() => setCurrentPage(page)} key={page}>{page}</button>)
                    }
                <button onClick={handleNextPage}>next</button>
               
            </div> */}
        </div>
    );
};

export default AllFoods;