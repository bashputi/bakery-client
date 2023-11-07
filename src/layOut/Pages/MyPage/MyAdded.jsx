import { Button, Spinner } from "@material-tailwind/react";
import { AuthContext } from "../../../route/AuthProvider";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";


const MyAdded = () => {
    const loadedMyitem = useLoaderData();
    console.log(loadedMyitem)
    const [updateItem, setUpdateItem] = useState(loadedMyitem);
    const {user, loading} = useContext(AuthContext);
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;

    const handleDeleteItem = (id) => {
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
                fetch(`http://localhost:5000/item/${id}`,{
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
                      const remaining = updateItem.filter((item) => item._id !== id);
                      setUpdateItem(remaining)
                   }
                })
        
           
            }
          });
           };


    return (
        <div className="container mx-auto">
              <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Client added items </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="">
                <h1 className="text-2xl md:text-4xl text-center my-10">{user?.displayName}s Added Items</h1>
                <div className="grid grid-cols-1  gap-5 pl-4 md:pl-40 lg:pl-0 lg:grid-cols-3">
                    {
                       updateItem.length && updateItem.map((user) => (
                        <div key={user?._id} className="" >
                       <Card className="w-96 bg-blue-gray-100">
                      <CardHeader floated={false} className="">
                        <img className="w-96 h-80" src={user?.img} alt="profile-picture" />
                      </CardHeader>
                      <CardBody className="text-center">
                        <Typography  color="blue-gray" className="flex justify-center gap-5 mb-2">
                         <div className="text-3xl font-semibold text-black"> {user?.foodname}</div>
                          <div className="mt-1"><span className="font-bold text-xl text-amber-800">${user?.price}</span> / <span>{user?.quantity} pcs</span></div>

                        </Typography>
                        <Typography color="blue-gray" className="pb-5 font-medium font-serif" textGradient>
                          <div className="text-blue-gray-800 ">
                          <span className=" text-xl ">{user?.customerName}</span> / {user?.email} </div>
                          <div className="font-serif text-black text-xl">Origin of food: <span className="text-green-700 ">{user?.origin}</span></div>
                          
                        </Typography>
                        <div className="font-serif text-black">{user?.recipie}</div>
                      </CardBody>
                      <CardFooter className="flex justify-center gap-7 pt-2">
                      <NavLink to={`update/${user?._id}`}><Button color="blue">Update</Button> </NavLink>
                      <Button onClick={() => handleDeleteItem(user?._id)} color="red">Delete</Button>
                        
                      </CardFooter>
                    </Card>
                    </div> 
                       )) 
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAdded;

