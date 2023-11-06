import { Button } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    
    const {_id, name, image, category, quantity, price, made, origin, description } = details || {};
   
    return (
  <div className="container mx-auto">
    <h1 className="mt-12 mb-4 font-extrabold text-center text-5xl">Shop</h1>
    <p className="mb-12 md:mb-20 text-center text-gray-600 ">Product Details</p>
          <div className="card h-[60vh] grid md:grid-cols-2 card-side bg-base-900">
            <div>
            <figure><img className="" src={image} alt="Movie"/></figure>
            </div>
            <div className="card-body md:-mt-8">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className="text-gray-600">{category}</p>
                <p className="lg:-mb-10">Made by Chef {made}</p>
                <p><span className="text-green-600 font-semibold text-lg">{origin}</span></p>                
                <p className="">{description}</p>
                <div><span className="font-bold text-xl text-amber-700">${price}</span> / <span>{quantity} pcs</span></div>
                <div className="card-actions justify-end">
                <Button color="green"> Order Now</Button>
                </div>
  </div>
</div>
  </div>
    );
};

export default Details;