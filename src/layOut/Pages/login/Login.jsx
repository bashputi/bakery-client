import { useContext, useState } from "react";
import { AuthContext } from "../../../route/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ImGoogle } from "react-icons/im";


const Login = () => {

  const [logInError, setLogInError] = useState('');
  const [success, setSuccess] = useState('');
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLogInError('');
    setSuccess('');

    signIn(email, password)
    .then(res => {
      console.log(res);
      setSuccess('User Logged in Successfully!!')
      e.target.reset();
      navigate('/');
    })
    .catch(error => {
      setLogInError(error.message);
    })

  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
        console.log(result.user);
        setSuccess('User Logged in Successfully');
        navigate('/');
    })
    .catch(error => {
        setLogInError(error.message);
    })
  };


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    <div className="text-center">
      {
        logInError && <p className="text-red-700">{logInError}</p>
      }
      {
        success && <p className="text-green-600">{success}</p>
      }
      <div className="flex justify-center mt-5"><hr className="w-24 mt-4 "/><p className="mx-4">or</p> <hr className="w-24 mt-4"/></div>
        <div className="flex justify-center"><button onClick={handleGoogleSignIn} className="btn btn-ghostflex gap-3 my-5"><ImGoogle/><p className="text-green-600">Continue with Google</p></button></div>
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