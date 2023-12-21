import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../../../route/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyOrder = () => {
    const loadedMyOrder = useLoaderData();
    const [updateUser, setUpdateUser] = useState(loadedMyOrder);
    console.log(updateUser)
    const {user, loading} = useContext(AuthContext);
console.log(user?.email)


useEffect(() => {
  if (loadedMyOrder && user?.email) {
    const filterCard = loadedMyOrder.filter((item) => item.email === user.email);
    setUpdateUser(filterCard);
  }
}, [loadedMyOrder, user?.email]);

   const handleDelete = (id) => {
console.log(id);
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    console.log(result)
    if (result.isConfirmed) {
        fetch(`https://bakery-server-psi.vercel.app/order/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           if(data.deletedCount > 0){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = updateUser.filter((item) => item._id !== id);
              setUpdateUser(remaining)
           }
        })

   
    }
  });
   };

  if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;

    return (
        <div className="container mx-auto">
              <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Client order </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
            <div className="">
                <h1 className="text-2xl md:text-4xl text-center my-10">{user?.displayName}s Ordered Items</h1>
                <div className="grid grid-cols-1 gap-5 pl-4 md:pl-40 lg:pl-0 lg:grid-cols-3">
                    {
                       updateUser.length ? updateUser.map((user) => (
                        <div  data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" key={user?._id} className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={user?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{user?.foodname}</h2>
                          
                          <p className="mb-10">{user?.customerName}</p>
                          <p>Price: $ {user?.Price}</p>
                          <p>Date: {user?.Date}</p>
                          <div className="card-actions justify-end">
                            <button onClick={() => handleDelete(user?._id)} className="btn btn-primary">delete</button>
                          </div>
                        </div>
                      </div>
                       )) 
                       : <>
                       <div></div>
                       <div className="lg:text-center lg:pl-0">Must be <span className="text-bold text-green-600 text-xl">Hungry??</span>..Why don't you order a food first......</div>
                       </> 
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;