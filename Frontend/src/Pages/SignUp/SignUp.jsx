import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from "react-router-dom" ;

function SignUp() {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

    const handleSignUp = async (e) => {
    e.preventDefault();

    if(!name){
      setError("Please enter your name");
      return;
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!password){
      setError("Please enter the password");
      return;
    }

    setError('');

    // Login Api Integration
    try {
      const response = await axiosInstance.post('/create-account', {
        fullName : name,
        email: email,
        password: password,
      });

      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }
      
      if(response.data && response.data.accessToken){
        localStorage.setItem("token",response.data.accessToken)
        navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
    };
   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1 text-gray-700">
                Username
              </label>
              <input
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your username"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && <p className="text-red-500 text-xs pb-1">{error}</p> }
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <a
              href="/SignIn"
              className="text-blue-500 hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  export default SignUp;
