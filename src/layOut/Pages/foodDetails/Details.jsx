import { Button, Spinner } from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../route/AuthProvider";
import { Helmet } from "react-helmet";


const Details = () => {
    const details = useLoaderData();
    
    const {_id, name, image, category, quantity, price, made, origin, description } = details || {};

    const {loading} = useContext(AuthContext);
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;
   
    return (
  <div className="container mx-auto">
      <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Food Details </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <h1 className="mt-12 mb-4 font-extrabold text-center text-5xl">Shop</h1>
    <p className="mb-12 md:mb-20 text-center text-gray-600 ">Product Details</p>
          <div className="card h-[60vh] grid md:grid-cols-2 card-side bg-base-900">
            <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <figure><img className="h-[60vh]" src={image} alt="Movie"/></figure>
            </div>
            <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card-body md:-mt-8">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className="text-gray-600">{category}</p>
                <p className="lg:-mb-10">Made by Chef {made}</p>
                <p><span className="text-green-600 font-semibold text-lg">{origin}</span></p>                
                <p className="">{description}</p>
                <div><span className="font-bold text-xl text-amber-700">${price}</span> / <span>{quantity} pcs</span></div>
                <div className="card-actions justify-end">
               <Link to={`/order/${_id}`}> <Button color="green"> Order Now</Button></Link>
                </div>
  </div>
</div>
  </div>
    );
};

export default Details;