import { useContext } from "react";
import { AuthContext } from "../../../route/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import {  Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet";


const Order = () => {
  const service = useLoaderData();
  const {name, image, price} = service ;
const {user,loading} = useContext(AuthContext);
if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;

const handleOrder = e => {
  e.preventDefault();

  const form = e.target;
  const foodName = form.foodName.value;
  const price = form.price.value;
  const quantity = form.quantity.value;
  const name = form.name.value;
  const email = form.email.value;
  const date = form.date.value;

  const ordering = {
    foodname: foodName,
    Price: price,
    Quantity: quantity,
    customerName: name,
    email,
    image,
    Date: date
  }

  fetch('http://localhost:5000/order', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(ordering)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
      Swal.fire({
        title: "Good job!",
        text: "You order the food!",
        icon: "success"
      });
    }
  })

 }

    return (
        <div >
            <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Purchase page </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <div className="mt-10 text-center font-bold text-4xl">Buy Now</div>
            <div className="hero min-h-screen">
  <div className="hero-content ">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleOrder} className="card-body">
        <img src={image} alt="" />
      <div className="form-control">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <input type="text" defaultValue={name} name="foodName" placeholder="Food name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" name="quantity" placeholder="Quantity of food" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} name="name" placeholder="Buyer name" className="input input-bordered" required readOnly={true}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer Email</span>
          </label>
          <input type="Email" defaultValue={user?.email} name="email" placeholder="Buyer email" className="input input-bordered" required readOnly={true}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="Odering date" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-active btn-accent ">Purchase</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Order;