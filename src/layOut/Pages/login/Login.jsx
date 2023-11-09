import { useContext, useState } from "react";
import { AuthContext } from "../../../route/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import axios from "axios";



const Login = () => {

  const [logInError, setLogInError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation()
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLogInError('');
    setSuccess('');
    signIn(email, password)
    .then(result => {
      console.log(result)
      setSuccess('User Logged in Successfully.')
      e.target.reset();
      navigate(location?.state ? location.state : '/');
  })
  .catch(error => {
      console.error(error)
     setLogInError(error.message);
  })
};

  const handleGoogleSignIn = () => {
        
    googleSignIn()
    .then(result => {
        console.log(result.user);
        setSuccess('User Logged in Successfully');
        navigate(location?.state ? location.state : '/');
    })
    .catch(error => {
        setLogInError(error.message);
    })
   
};


  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Login </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-5">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Provide Valid Password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
         
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn btn-success">Login</motion.button>
        </div>
      </form>
    <div className="text-center">
      {
        logInError && <p className="text-red-700">{logInError}</p>
      }
      {
        success && <p className="text-green-600">{success}</p>
      }
      <div className="flex justify-center mt-5"><hr className="w-12 mt-4 "/><hr className="w-12 mt-4 "/><p className="mx-4">or</p> <hr className="w-12 mt-4"/><hr className="w-12 mt-4 "/></div>
        <div className="flex justify-center"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleGoogleSignIn} className="btn btn-ghostflex gap-3 my-5"><FcGoogle/><p className="text-green-600">Continue with Google</p></motion.button></div>
      <p className="ml-2 mb-5">New to this site? Please <Link to="/register">
                        <button className="btn btn-link">Register</button>
                        </Link></p>
    </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;