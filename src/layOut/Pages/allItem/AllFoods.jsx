import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "./AllFoodsCard";
import { Helmet } from "react-helmet";
import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../../../route/AuthProvider";


const AllFoods = () => {
    const loadedFoods = useLoaderData();
    const { loading} = useContext(AuthContext); 
    const [bakerys, setBakerys] = useState(loadedFoods);
    const count = loadedFoods.length ;
    const itemsPerPage = 9 ;
    const numberOfPage = Math.ceil( count / itemsPerPage);
    const pages = [...Array(numberOfPage).keys()];
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/bakery?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setBakerys(data))
    }, [currentPage]);
 
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;
 const handleSarch = (e) => {
    e.preventDefault();
    const food = e.target.food.value;
    if ( food === "All") {
        const remaining = loadedFoods.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
          setBakerys(remaining);
    } else {
        const remaining = loadedFoods?.filter((item) => item.category === food);
    setBakerys(remaining.slice(0, itemsPerPage));
    }
 };
   
    return (
        <div className="container mx-auto">
              <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | All food items </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="2000" className="text-center mt-12 mb-8 text-amber-600 font-bold text-3xl lg:text-5xl">All Food Items</div>
            <div className="mb-12 flex justify-center">
            <form onSubmit={handleSarch}>
            <div className="form-control">
            <div className="input-group">
                <select name="food"  className="select w-56 select-bordered">
                <option value="All">All</option>
                <option value="Cakes">Cakes</option>
                <option value="Macaron">Macaron</option>
                <option value="Croissant">Croissant</option>
                <option value="Bread">Bread</option>
                </select>
                <button  className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
            </div>
            </form>
            
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-5 md:pl-0 lg:grid-cols-3">
                {
                  bakerys.length &&  bakerys.map((bakery)=> <AllFoodsCard key={bakery._id} bakery={bakery} bakerys={bakerys} setBakerys={setBakerys}></AllFoodsCard>)
                }
            </div>
            <div className="flex justify-center mt-16">
             <div className="grid grid-cols-3 gap-6">
                  
               {
                 pages.map(page => <button className={currentPage === page ? "btn btn-warning" : undefined} onClick={() => setCurrentPage(page)} key={page}>{page} </button>)
            }
             </div>
                </div>
        </div>
    );
};

export default AllFoods;