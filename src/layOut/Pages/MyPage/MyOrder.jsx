import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../../../route/AuthProvider";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const MyOrder = () => {
    const loadedMyOrder = useLoaderData();
    const [updateUser, setUpdateUser] = useState(loadedMyOrder);
    const {user} = useContext(AuthContext);
    const {loading} = useContext(AuthContext);
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;

   


    return (
        <div className="container md:mx-auto">
              <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Client's order </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
            <div className="">
                <h1 className="text-2xl md:text-4xl text-center my-10">{user?.displayName}'s Ordered Items</h1>
                <div className="grid grid-cols-1 gap-5 pl-4 md:pl-40 lg:pl-0 lg:grid-cols-3">
                    {
                       updateUser.length && updateUser.map((user) => (
                        <div key={user?._id} className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={user?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{user?.foodname}</h2>
                          
                          <p className="mb-10">{user?.customerName}</p>
                          <p>Price: $ {user?.Price}</p>
                          <p>Date: {user?.Date}</p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">delete</button>
                          </div>
                        </div>
                      </div>
                       )) 
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;