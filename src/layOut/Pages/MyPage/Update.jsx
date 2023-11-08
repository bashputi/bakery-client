import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../route/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";


const Update = () => {
    const loadItem = useLoaderData();
    const {foodname, _id, recipie, img, Price, origin, quantity} = loadItem ;
    console.log(loadItem)
    const {user, loading} = useContext(AuthContext);
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;

    const handleUpdate = e => {
      e.preventDefault();

      const foodName = e.target.foodName.value;
      const pic = e.target.pic.value;
      const quantity = e.target.quantity.value;
      const price= e.target.price.value;
      const name = e.target.name.value;
      const email = e.target.email.value;
      const origin = e.target.origin.value;
      const recipie = e.target.recipie.value;

      const updateditem = {
        foodName, pic, quantity, price, name, email, origin, recipie
      };
     
      fetch(`https://bakery-server-2uyebxf6v-rimeislam672-gmailcom.vercel.app/item/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updateditem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.matchedCount) {
          Swal.fire({
              title: 'success!!',
              text: 'Item Details Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
      }
      })
    };

    return (
        <div className="container mx-auto">
                <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Client update page </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center mt-12 mb-5 text-3xl font-semibold">Update Your Items Info</div>
            <div className="hero-content">    
    <div className=" bg-base-100 shadow-2xl">
      <div></div>
      <form onSubmit={handleUpdate} className="card-body  my-8">      
     <div data-aos="zoom-in-up" data-aos-duration="2000" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
<div className="form-control">
    <label className="label">
      <span className="label-text">Food Name</span>
    </label>
    <input type="text" name="foodName" defaultValue={foodname} placeholder="Type here" className="input input-bordered input-info w-full max-w-lg"  />
  </div>
<div className="form-control">
    <label className="label">
      <span className="label-text">Food Image</span>
    </label>
    <input type="text" name="pic" placeholder="Type here" defaultValue={img} className="input input-bordered input-info w-full max-w-lg"/>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Price</span>
    </label>
    <input type="text"  name="price" placeholder="Type here" defaultValue={Price} className="input input-bordered input-info w-full max-w-lg" />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Quantity</span>
    </label>
    <input type="text" name="quantity" defaultValue={quantity} placeholder="Type here" className="input input-bordered input-info w-full max-w-lg" />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Buyer Name</span>
    </label>
    <input type="text" defaultValue={user?.displayName}  name="name" placeholder="Type here" className="input input-bordered input-info w-full max-w-lg" required readOnly={true}/>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Buyer Email</span>
    </label>
    <input type="Email" defaultValue={user?.email} name="email" placeholder="Type here" className="input input-bordered input-info w-full max-w-lg" required readOnly={true}/>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Origin</span>
    </label>
    <input type="text" name="origin" defaultValue={origin} placeholder="Type here" className="input input-bordered input-info w-full max-w-lg"  />  
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Recipie</span>
    </label>
    <textarea name="recipie" defaultValue={recipie} className="textarea textarea-info max-w-lg" placeholder="Bio"></textarea>
   
  </div>
  </div>
  <div className="form-control mt-6">
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn btn-active btn-accent ">Update Item</motion.button>
  </div>
 
</form>
    </div>
  </div>
        </div>
    );
};

export default Update;