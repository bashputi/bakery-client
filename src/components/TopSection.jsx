import {  Spinner } from "@material-tailwind/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../route/AuthProvider";
import { useContext } from "react";
import { motion } from "framer-motion";
import  { useState, useEffect } from 'react';

const TopSection = () => {
    const {loading} = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
console.log(foods)
    useEffect(() => {
      fetch('http://localhost:5000/order')
        .then((res) => res.json())
        .then(data => setFoods(data.slice(0, 6)))
    }, [setFoods]);
 
   
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;
    return (
        <div className="my-20 container mx-auto">
            <div data-aos="zoom-in" data-aos-duration="3000" className="text-center text-amber-700 font-bold text-3xl lg:text-5xl">Our Top Rated Products</div>
            <div data-aos="zoom-in" data-aos-duration="3000" className="my-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
                foods.length && foods.map(item => (
                    <div key={item?._id} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"  className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={item?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{item?.foodname}</h2>
                      
                      <p className="mb-10">{item?.category}</p>
                      <p>Price: $ {item?.Price}</p>
        
                      <div className="card-actions justify-end">
                        <button  className="btn btn-primary">details</button>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>

            </div>
            <div className="flex justify-center">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="btn btn-outline btn-warning"><NavLink to="/allfoods" className="flex gap-3 text-lg  "><p>See All</p> <AiOutlineArrowRight  className="mt-1.5"/></NavLink></motion.button>
            </div>
        </div>
    );
};

export default TopSection;