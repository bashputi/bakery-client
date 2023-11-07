import { Helmet } from "react-helmet";

import { useContext } from "react";
import { AuthContext } from "../../../route/AuthProvider";
import Swal from "sweetalert2";
import { Spinner } from "@material-tailwind/react";

const AddFood = () => {
    const {user,loading} = useContext(AuthContext);
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;
    const handleAdd = e => {
        e.preventDefault();
        const foodName = e.target.foodName.value;
        const pic = e.target.pic.value;
        const quantity = e.target.quantity.value;
        const price= e.target.price.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const origin = e.target.origin.value;
        const recipie = e.target.recipie.value;
       
            const adding = {
              foodname: foodName,
              img: pic,
              quantity: quantity,
              Price: price,
              customerName: name,
              email,
              origin: origin,
              recipie: recipie
              
            }
            fetch('http://localhost:5000/item', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(adding)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
      Swal.fire({
        title: "Congratulation",
        text: "You successfully added a item!",
        icon: "success"
      });
    }
  })
    }
    return (
        <div className="container mx-auto pb-10 bg-blue-gray-100 mt-10 py-5">
              <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Add a item </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="text-center my-10 font-bold text-3xl">Add Your Own Items</h1>
            <div className="">
  <div className="hero-content">
    
    <div className=" bg-base-100 shadow-2xl">
      <form onSubmit={handleAdd} className="card-body  my-8">
       
     <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
<div className="form-control">
    <label className="label">
      <span className="label-text">Food Name</span>
    </label>
    <input type="text" name="foodName" placeholder="Type here" className="input input-bordered input-info w-full max-w-lg"  />
  </div>
<div className="form-control">
    <label className="label">
      <span className="label-text">Food Image</span>
    </label>
    <input type="text" name="pic" placeholder="Type here" className="input input-bordered input-info w-full max-w-lg"/>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Price</span>
    </label>
    <input type="text"  name="price"placeholder="Type here" className="input input-bordered input-info w-full max-w-lg" />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Quantity</span>
    </label>
    <input type="text" name="quantity" placeholder="Type here" className="input input-bordered input-info w-full max-w-lg" />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Buyer Name</span>
    </label>
    <input type="text" defaultValue={user?.displayName} name="name"  placeholder="Type here" className="input input-bordered input-info w-full max-w-lg" required readOnly={true}/>
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
    <input type="text" name="origin" placeholder="Type here" className="input input-bordered input-info w-full max-w-lg"  />
   
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Recipie</span>
    </label>
    <textarea name="recipie" className="textarea textarea-info max-w-lg" placeholder="Bio"></textarea>
   
  </div>
  </div>
  <div className="form-control mt-6">
    <button className="btn btn-active btn-accent ">Add your item</button>
  </div>
 
</form>
    </div>
  </div>
</div>
          
        </div>
    );
};

export default AddFood;

