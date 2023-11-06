import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../../../route/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";


const MyAdded = () => {
    const {loading} = useContext(AuthContext);
    if(loading) return <div className="flex justify-center my-10"><Spinner className="h-8 w-8" /></div> ;
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Client added items </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
            my added item
        </div>
    );
};

export default MyAdded;